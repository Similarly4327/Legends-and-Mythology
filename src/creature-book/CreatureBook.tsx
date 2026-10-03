import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { creatures } from '../creatures';
import { getCreatureStory } from '../creatures/stories';
import { books } from '../creatures/types';
import type { Creature } from '../creatures/types';
import { bookCreatures, creatureNeighbors } from '../creatures/registry';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { StickyScroll } from './StickyScroll';
import { Markdown } from './Markdown';
import { getBookCreatures } from '../content/repository';
import { foundationCategories } from './foundationCatalog';
import './book.css';
import './manuscript.css';
import { Ornament } from './Ornament';

const chapters: { id: string; label: string; icon: IconName; number: string }[] = [
  { id: '', label: 'Ontmoeting', icon: 'spark', number: '01' },
  { id: 'anatomy', label: 'Anatomie', icon: 'feather', number: '02' },
  { id: 'origin', label: 'Herkomst', icon: 'map', number: '03' },
  { id: 'story', label: 'Het verhaal', icon: 'story', number: '04' },
  { id: 'folklore', label: 'Folklore', icon: 'book', number: '05' },
];
const pathFor = (creature: Creature, chapter = '') => `/creatures/${creature.id}${chapter ? `/${chapter}` : ''}`;

function Contents({ close, current }: { close: () => void; current: Creature }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { const el = dialog.current; const returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null; const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; el?.showModal(); return () => { el?.close(); document.body.style.overflow = overflow; returnFocus?.focus({ preventScroll: true }); }; }, []);
  return <dialog ref={dialog} className="contents-dialog" aria-label="De boeken, inhoudsopgave" onCancel={close} onClick={event => { if (event.target === event.currentTarget) close(); }}><div className="contents-inner">
    <button className="icon-button dialog-close" onClick={close} aria-label="Sluit inhoudsopgave"><Icon name="close" /></button><span className="eyebrow">DE VERZAMELING</span><h2>Een wereld tussen<br />de bladzijden.</h2><p>Kies een boek. Volg je verwondering.</p>
    <div className="book-list">{books.map(book => <section key={book.id} className={`book-entry theme-${book.id}`}><div className="book-spine">{book.numeral}</div><div><h3>{book.title}</h3><p>{book.subtitle}</p>{getBookCreatures(foundationCategories[book.id]).length ? <ul>{getBookCreatures(foundationCategories[book.id]).map(item => <li key={item.id}><Link to={creatures.some(entry => entry.id === item.id) ? `/creatures/${item.id}` : `/wezens/${item.slug}`} onClick={close} aria-current={item.id === current.id ? 'page' : undefined}>{item.name}<Icon name="arrow" size={16} /></Link></li>)}</ul> : <span className="empty-book">De eerste bladzijde wacht nog op een verhaal.</span>}</div></section>)}</div><Link to="/" onClick={close} className="library-return">← Terug naar de studeerkamer</Link>
  </div></dialog>;
}

function Introduction({ creature }: { creature: Creature }) {
  return <section className="introduction"><div className="intro-copy"><div className="specimen-label"><span /> MYTHOLOGISCHE WEZENS <span /></div>
    <h1>{creature.name}</h1><div className="intro-subtitle">{creature.introduction.title}</div><Ornament /><p className="intro-lead">{creature.introduction.shortText}</p><p className="intro-description">{creature.introduction.invitation}</p>
    <a className="primary-button" href="#anatomy">Ontdek {creature.name}<Icon name="arrow" size={19} /></a><div className="origin-tag"><Icon name="map" size={17} /><span>{creature.region.displayName}</span><i /><span>Mythologie</span></div></div>
    <figure className="intro-art"><div className="art-number">FIG. {String(creatures.indexOf(creature) + 1).padStart(2, '0')}</div><img src={creature.cover} alt={creature.anatomy.imageAlt} fetchPriority="high" /><figcaption><span className="caption-line" />{creature.introduction.title}<span className="caption-line" /></figcaption><Ornament compass /></figure>
    <div className="intro-bottom"><span><Icon name="feather" size={16} />Een veldgids voor nieuwsgierige zielen</span><a href="#anatomy">Het avontuur begint hier <span>↓</span></a></div></section>;
}

function StoryReader({ creature }: { creature: Creature }) {
  return <section className="story-reader" aria-label={`Het verhaal van ${creature.name}`}><div className="story-art"><img src={creature.story.image} alt={creature.story.imageAlt} /><div className="story-art-label"><Icon name="story" size={17} />HET VERHAAL VAN {creature.name.toLocaleUpperCase('nl')}</div></div>
    <div className="story-reading"><div className="story-reading-inner"><Markdown source={getCreatureStory(creature.id, creature.story.file)} />{creature.story.note && <p className="story-note">{creature.story.note}</p>}<div className="story-end"><Icon name="spark" /><a href="#folklore">Ontdek de folklore <Icon name="arrow" size={17} /></a></div></div></div></section>;
}

function Folklore({ creature }: { creature: Creature }) {
  const notes = [{ label: 'Oorsprong', text: creature.folklore.origin }, { label: 'In de verhalen', text: creature.folklore.role }, { label: 'Betekenis', text: creature.folklore.meaning }];
  return <section className="folklore-page"><div className="folklore-heading"><span className="eyebrow">ACHTER DE MYTHE</span><h1>{creature.folklore.title}</h1><Ornament /><p>Elk wezen draagt de sporen van de mensen die zijn verhaal vertelden.</p><figure className="folklore-sketch"><img src={creature.anatomy.image} alt="" loading="lazy" /><figcaption>{creature.name} · sporen uit de overlevering</figcaption></figure></div><div className="folklore-notes">{notes.map((note, i) => <article key={note.label}><span className="note-number">0{i + 1}</span><div><h2>{note.label}</h2><p>{note.text}</p></div></article>)}{creature.folklore.moral && <blockquote>{creature.folklore.moral}<span>Een gedachte om mee te nemen</span></blockquote>}{creature.folklore.sources && <details><summary>Verder lezen · bronnen bij deze mythe</summary><ul>{creature.folklore.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul><p>Het verhaal is een vrije bewerking. De gedachte hierboven is een moderne interpretatie.</p></details>}</div></section>;
}

export function CreatureBook() {
  const { id, slug, chapter = '' } = useParams();
  const creature = creatures.find(item => item.id === (id ?? slug));
  const [contentsOpen, setContentsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(chapter);
  const location = useLocation();
  useEffect(() => {
    const sections = chapters.map(item => document.getElementById(item.id || 'introduction')).filter((item): item is HTMLElement => !!item);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActiveChapter(visible.target.id === 'introduction' ? '' : visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [creature]);
  useEffect(() => {
    const target = chapter ? document.getElementById(chapter) : null;
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, chapter]);
  useEffect(() => { if (creature) document.title = `${creature.name} — Legends & Mythology`; }, [creature]);
  if (!creature || !chapters.some(item => item.id === chapter)) return <div className="creature-experience"><div className="not-found"><Icon name="book" size={44} /><span className="eyebrow">EEN ONBEKENDE BLADZIJDE</span><h1>Dit verhaal is nog niet gevonden.</h1><Link to="/" className="primary-button">Open het boek <Icon name="arrow" /></Link></div></div>;
  const book = books.find(item => item.id === creature.book)!;
  const neighbors = creatureNeighbors(creatures, creature);
  return <div className="creature-experience"><div className={`book-shell theme-${creature.book}`}>
    <header className="site-header"><Link to="/" className="brand" aria-label="Legends and Mythology, beginpagina"><Icon name="book" size={29} /><span>Legends <i>&</i> Mythology<small>EEN WERELD VOL VERHALEN</small></span></Link><div className="header-book"><Icon name="sun" size={16} />{book.title}</div><button className="contents-button" onClick={() => setContentsOpen(true)}><Icon name="book" size={18} /><span>De boeken</span><span className="tiny-arrow">↗</span></button></header>
    <div className="book-topline"><button onClick={() => setContentsOpen(true)} className="back-to-book">← <span>{book.title}</span></button><span className="creature-index">WEZEN {String(bookCreatures(creatures, creature.book).indexOf(creature) + 1).padStart(2, '0')} <span>/</span> {creature.name.toUpperCase()}</span><span className="book-edition">EEN GEÏLLUSTREERD ONDERZOEKSBOEK</span></div>
    <nav className="chapter-nav" aria-label="Hoofdstukken">{chapters.map(item => { const sectionId = item.id || 'introduction'; return <a key={sectionId} href={`#${sectionId}`} className={activeChapter === item.id ? 'selected' : ''} aria-current={activeChapter === item.id ? 'location' : undefined}><Icon name={item.icon} size={18} /><span>{item.label}</span><small>{item.number}</small></a>; })}</nav>
    <main id="main" tabIndex={-1}>
      <div id="introduction" className="continuous-section"><Introduction creature={creature} /></div>
      <div id="anatomy" className="continuous-section"><StickyScroll image={creature.anatomy.image} imageAlt={creature.anatomy.imageAlt} title={creature.anatomy.title} eyebrow={`${creature.name} · ANATOMIE`} steps={creature.anatomy.facts} /></div>
      <div id="origin" className="continuous-section"><StickyScroll image={creature.location.image} imageAlt={creature.location.imageAlt} title={creature.location.title} eyebrow={`${creature.name} · HERKOMST`} steps={creature.location.steps} variant="map" /></div>
      <div id="story" className="continuous-section"><StoryReader creature={creature} /></div>
      <div id="folklore" className="continuous-section"><Folklore creature={creature} /></div>
    </main>
    <footer className="site-footer"><span>Legends & Mythology</span><span>Blijf nieuwsgierig. Er is altijd een volgend verhaal.</span><span>{neighbors.previous && <Link to={pathFor(neighbors.previous)}>← {neighbors.previous.name}</Link>} {book.numeral} — {chapters.find(item => item.id === activeChapter)?.number ?? chapters[0].number} {neighbors.next && <Link to={pathFor(neighbors.next)}>{neighbors.next.name} →</Link>}</span></footer>
    {contentsOpen && <Contents current={creature} close={() => setContentsOpen(false)} />}
  </div></div>;
}
