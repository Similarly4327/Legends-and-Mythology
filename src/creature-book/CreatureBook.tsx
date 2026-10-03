import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { creatures } from '../creatures';
import { books } from '../creatures/types';
import type { Creature, CreatureStory } from '../creatures/types';
import { bookCreatures, creatureNeighbors } from '../creatures/registry';
import { illustrationPoints } from '../creatures/pegasus/illustration-points';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { StickyScroll } from './StickyScroll';
import { getBookCreatures } from '../content/repository';
import { foundationCategories } from './foundationCatalog';
import './book.css';
import './manuscript.css';
import { Ornament } from './Ornament';

const chapters: { id: string; label: string; icon: IconName; number: string }[] = [
  { id: 'anatomy', label: 'Pegasus van dichtbij', icon: 'feather', number: '01' },
  { id: 'origin', label: 'De wereld van Pegasus', icon: 'map', number: '02' },
  { id: 'story', label: 'Pegasus bij de bron', icon: 'story', number: '03' },
  { id: 'folklore', label: 'Waar komt de legende vandaan?', icon: 'book', number: '04' },
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

function StoryReader({ creature }: { creature: Creature }) {
  const [selectedId, setSelectedId] = useState(creature.stories[0]?.id);
  const [choiceOpen, setChoiceOpen] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const scenes = useRef<(HTMLElement | null)[]>([]);
  const storyText = useRef<HTMLDivElement>(null);
  const choiceDialog = useRef<HTMLDialogElement>(null);
  const story = creature.stories.find(item => item.id === selectedId) ?? creature.stories[0];
  useEffect(() => {
    const dialog = choiceDialog.current;
    if (!dialog) return;
    if (choiceOpen && !dialog.open) dialog.showModal();
    if (!choiceOpen && dialog.open) dialog.close();
  }, [choiceOpen]);
  useEffect(() => {
    const elements = scenes.current.filter((element): element is HTMLElement => !!element);
    const observer = new IntersectionObserver(entries => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (current) setActiveScene(Number(current.target.getAttribute('data-scene-index')));
    }, { rootMargin: '-22% 0px -58% 0px', threshold: 0 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [story]);
  if (!story) return null;

  const openStory = () => {
    if (creature.stories.length > 1) setChoiceOpen(true);
    else storyText.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  };

  const selectStory = (item: CreatureStory) => {
    setSelectedId(item.id);
    setChoiceOpen(false);
    window.setTimeout(() => storyText.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  };

  return <section className="story-reader" aria-label={`Verhalen over ${creature.name}`}>
    <figure className="story-art"><img src={story.image} alt={story.imageAlt} /></figure>
    <div className="story-reading">
      <div className="story-title-row"><span className="eyebrow">EEN VERHAAL UIT HET OUDE GRIEKENLAND</span><button className="story-title" onClick={openStory} aria-haspopup={creature.stories.length > 1 ? 'dialog' : undefined}>{story.title}<Icon name="arrow" size={18} /></button></div>
      <dialog ref={choiceDialog} className="story-picker" aria-label="Kies een verhaal" onCancel={() => setChoiceOpen(false)} onClick={event => { if (event.target === event.currentTarget) setChoiceOpen(false); }}><button className="icon-button story-picker-close" aria-label="Sluit verhalenkeuze" onClick={() => setChoiceOpen(false)}><Icon name="close" /></button><h2>Kies een verhaal</h2>{creature.stories.map(item => <button key={item.id} className="story-option" onClick={() => selectStory(item)}><img src={item.image} alt="" /><span><strong>{item.title}</strong><small>{item.shortDescription}</small></span><Icon name="arrow" size={18} /></button>)}</dialog>
      <div className="story-reading-inner" ref={storyText}>
        {story.sections.map((section, index) => <article className={`story-scene ${activeScene === index ? 'is-active' : ''}`} key={`${story.id}-${index}`} ref={element => { scenes.current[index] = element; }} data-scene-index={index}>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${index}-${paragraphIndex}`}>{paragraph}</p>)}</article>)}
        <div className="story-end"><Icon name="spark" /><a href="#folklore">Waar komt de legende vandaan? <Icon name="arrow" size={17} /></a></div>
      </div>
    </div>
  </section>;
}

function Folklore({ creature }: { creature: Creature }) {
  return <section className="folklore-page"><div className="folklore-heading"><span className="eyebrow">DE ECHTE MYTHOLOGISCHE ACHTERGROND</span><h1>{creature.folklore.title}</h1><Ornament /><p>{creature.folklore.intro}</p><figure className="folklore-sketch"><img src={creature.anatomy.image} alt="" loading="lazy" /><figcaption>{creature.name} · uit de oude Griekse verhalen</figcaption></figure></div><div className="folklore-notes">{creature.folklore.notes.map((note, index) => <article key={note.id}><span className="note-number">0{index + 1}</span><div><h2>{note.title}</h2><p>{note.text}</p></div></article>)}<p className="folklore-closing">{creature.folklore.closing}</p></div></section>;
}

export function CreatureBook() {
  const { id, slug, chapter = '' } = useParams();
  const creature = creatures.find(item => item.id === (id ?? slug));
  const [contentsOpen, setContentsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(chapter || chapters[0].id);
  const location = useLocation();
  useEffect(() => {
    const sections = chapters.map(item => document.getElementById(item.id)).filter((item): item is HTMLElement => !!item);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActiveChapter(visible.target.id);
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
    <nav className="chapter-nav" aria-label="Hoofdstukken">{chapters.map(item => <a key={item.id} href={`#${item.id}`} className={activeChapter === item.id ? 'selected' : ''} aria-current={activeChapter === item.id ? 'location' : undefined}><Icon name={item.icon} size={18} /><span>{item.label}</span><small>{item.number}</small></a>)}</nav>
    <main id="main" tabIndex={-1}>
      <div id="anatomy" className="continuous-section"><StickyScroll image={creature.anatomy.image} imageAlt={creature.anatomy.imageAlt} title={creature.anatomy.title} intro={creature.anatomy.intro} steps={creature.anatomy.facts} question={creature.anatomy.question} points={illustrationPoints.anatomy} /></div>
      <div id="origin" className="continuous-section"><StickyScroll image={creature.location.image} imageAlt={creature.location.imageAlt} title={creature.location.title} intro={creature.location.intro} steps={creature.location.steps} question={creature.location.question} points={illustrationPoints.world} variant="map" /></div>
      <div id="story" className="continuous-section"><StoryReader creature={creature} /></div>
      <div id="folklore" className="continuous-section"><Folklore creature={creature} /></div>
    </main>
    <footer className="site-footer"><span>Legends & Mythology</span><span>{creature.name} · {book.numeral}</span><span>{neighbors.previous && <Link to={pathFor(neighbors.previous)}>← {neighbors.previous.name}</Link>} {chapters.find(item => item.id === activeChapter)?.number ?? chapters[0].number} {neighbors.next && <Link to={pathFor(neighbors.next)}>{neighbors.next.name} →</Link>}</span></footer>
    {contentsOpen && <Contents current={creature} close={() => setContentsOpen(false)} />}
  </div></div>;
}
