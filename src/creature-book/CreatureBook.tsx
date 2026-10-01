import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { creatures } from '../creatures';
import { getCreatureStory } from '../creatures/stories';
import { books } from '../creatures/types';
import type { Creature } from '../creatures/types';
import { bookCreatures, creatureNeighbors } from '../creatures/registry';
import { Icon } from './Icon';
import type { IconName } from './Icon';
import { StickyScroll } from './StickyScroll';
import { Markdown } from './Markdown';
import { useBookMotion } from '../hooks/useBookMotion';
import { foundationCategories } from './foundationCatalog';
import './book.css';
import './manuscript.css';
import './reader-continuity.css';
import { Ornament } from './Ornament';

const chapters: { id: string; label: string; icon: IconName; number: string }[] = [
  { id: '', label: 'Ontmoeting', icon: 'spark', number: '01' },
  { id: 'anatomy', label: 'Anatomie', icon: 'feather', number: '02' },
  { id: 'origin', label: 'Herkomst', icon: 'map', number: '03' },
  { id: 'story', label: 'Het verhaal', icon: 'story', number: '04' },
  { id: 'folklore', label: 'Folklore', icon: 'book', number: '05' },
];
const pathFor = (creature: Creature, chapter = '') => `/creatures/${creature.id}${chapter ? `/${chapter}` : ''}`;

function Introduction({ creature }: { creature: Creature }) {
  return <section className="introduction"><div className="intro-copy"><div className="specimen-label"><span /> MYTHOLOGISCHE WEZENS <span /></div>
    <h1>{creature.name}</h1><div className="intro-subtitle">{creature.introduction.title}</div><Ornament /><p className="intro-lead">{creature.introduction.shortText}</p><p className="intro-description">{creature.introduction.invitation}</p>
    <button className="primary-button" onClick={() => scrollToChapter("anatomy")}>Ontdek {creature.name}<Icon name="arrow" size={19} /></button><div className="origin-tag"><Icon name="map" size={17} /><span>{creature.region.displayName}</span><i /><span>Mythologie</span></div></div>
    <figure className="intro-art"><div className="art-number">FIG. {String(creatures.indexOf(creature) + 1).padStart(2, '0')}</div><img src={creature.cover} alt={creature.anatomy.imageAlt} fetchPriority="high" /><figcaption><span className="caption-line" />{creature.introduction.title}<span className="caption-line" /></figcaption><Ornament compass /></figure>
    <div className="intro-bottom"><span><Icon name="feather" size={16} />Een veldgids voor nieuwsgierige zielen</span><button onClick={() => scrollToChapter("anatomy")}>Het avontuur begint hier <span>↓</span></button></div></section>;
}

function StoryReader({ creature }: { creature: Creature }) {
  return <section className="story-reader" aria-label={`Het verhaal van ${creature.name}`}><div className="story-art"><img src={creature.story.image} alt={creature.story.imageAlt} /><div className="story-art-label"><Icon name="story" size={17} />HET VERHAAL VAN {creature.name.toLocaleUpperCase('nl')}</div></div>
    <div className="story-reading" tabIndex={0} role="region" aria-label="Verhaaltekst"><div className="story-reading-inner"><Markdown headingOffset={1} source={getCreatureStory(creature.id, creature.story.file)} />{creature.story.note && <p className="story-note">{creature.story.note}</p>}<div className="story-end"><Icon name="spark" /><button onClick={() => scrollToChapter("folklore")}>Ontdek de folklore <Icon name="arrow" size={17} /></button></div></div></div></section>;
}

function Folklore({ creature }: { creature: Creature }) {
  const notes = [{ label: 'Oorsprong', text: creature.folklore.origin }, { label: 'In de verhalen', text: creature.folklore.role }, { label: 'Betekenis', text: creature.folklore.meaning }];
  return <section className="folklore-page"><div className="folklore-heading"><span className="eyebrow">ACHTER DE MYTHE</span><h2>{creature.folklore.title}</h2><Ornament /><p>Elk wezen draagt de sporen van de mensen die zijn verhaal vertelden.</p><figure className="folklore-sketch"><img src={creature.anatomy.image} alt="" loading="lazy" /><figcaption>{creature.name} · sporen uit de overlevering</figcaption></figure></div><div className="folklore-notes">{notes.map((note, i) => <article key={note.label}><span className="note-number">0{i + 1}</span><div><h2>{note.label}</h2><p>{note.text}</p></div></article>)}{creature.folklore.moral && <blockquote>{creature.folklore.moral}<span>Een gedachte om mee te nemen</span></blockquote>}{creature.folklore.sources && <details><summary>Verder lezen · bronnen bij deze mythe</summary><ul>{creature.folklore.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul><p>Het verhaal is een vrije bewerking. De gedachte hierboven is een moderne interpretatie.</p></details>}</div></section>;
}

function scrollToChapter(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
}

export function CreatureBook() {
  const { id, slug, chapter = '' } = useParams();
  const creature = creatures.find(item => item.id === (id ?? slug));
  if (!creature || !chapters.some(item => item.id === chapter)) return <div className="creature-experience"><div className="not-found"><Icon name="book" size={44} /><h1>Dit verhaal is nog niet gevonden.</h1><Link to="/" className="primary-button">Terug naar de studeerkamer</Link></div></div>;
  return <CreatureEntry key={creature.id} creature={creature} chapter={chapter} />;
}

function CreatureEntry({ creature, chapter }: { creature: Creature; chapter: string }) {
  const [accepted, setAccepted] = useState(false);
  const move = useBookMotion();
  const category = foundationCategories[creature.book];
  const book = books.find(item => item.id === creature.book)!;
  const neighbors = creatureNeighbors(creatures, creature);
  const gated = creature.book === 'dark' && !accepted;
  useEffect(() => { document.title = creature.name + ' — Legends & Mythology'; }, [creature]);
  useEffect(() => {
    if (gated) return;
    const frame = requestAnimationFrame(() => { if (chapter) document.getElementById(chapter)?.scrollIntoView({ block: 'start' }); else window.scrollTo({ top: 0, behavior: 'instant' }); });
    return () => cancelAnimationFrame(frame);
  }, [chapter, gated]);
  return <div className="creature-experience"><div className={'book-shell theme-' + creature.book}>
    <header className="site-header"><button onClick={() => move(category, 'closing')} className="brand" aria-label="Sluit boek en ga naar de studeerkamer"><Icon name="book" size={29} /><span>Legends <i>&</i> Mythology<small>EEN WERELD VOL VERHALEN</small></span></button><div className="header-book">{book.title}</div><button className="contents-button" onClick={() => move(category, 'closing')}><Icon name="close" size={18} />Sluit boek</button></header>
    <div className="book-topline"><Link to={'/boeken/' + category} className="back-to-book">← Inhoudsopgave</Link><span className="creature-index">WEZEN {String(bookCreatures(creatures, creature.book).indexOf(creature) + 1).padStart(2, '0')} / {creature.name.toUpperCase()}</span><span className="book-edition">EEN GEÏLLUSTREERD ONDERZOEKSBOEK</span></div>
    {!gated && <nav className="chapter-nav" aria-label="Hoofdstukken">{chapters.map(item => <button key={item.id} onClick={() => scrollToChapter(item.id || 'introduction')}><Icon name={item.icon} size={18} /><span>{item.label}</span><small>{item.number}</small></button>)}</nav>}
    <main id="main" tabIndex={-1}>
      {gated ? <section className="reader-warning"><Icon name="book" size={40} /><span className="eyebrow">HET ZWARTE BOEK · {creature.reading?.age}</span><h1>Een moment voor jullie samen.</h1><p>{creature.warning ?? 'Dit verhaal bevat langzaam opgebouwde spanning. Lees eerst als ouder mee en kies samen of deze sfeer bij jullie past.'}</p><button className="primary-button" onClick={() => setAccepted(true)}>Lees samen verder <Icon name="arrow" /></button><Link to={'/boeken/' + category}>Terug naar de inhoudsopgave</Link></section> : <>
        <div id="introduction" data-chapter="introduction"><Introduction creature={creature} /></div>
        <div id="anatomy" data-chapter="anatomy"><StickyScroll image={creature.anatomy.image} imageAlt={creature.anatomy.imageAlt} title={creature.anatomy.title} eyebrow={creature.name + ' · ANATOMIE'} steps={creature.anatomy.facts} /></div>
        <div id="origin" data-chapter="origin"><StickyScroll image={creature.location.image} imageAlt={creature.location.imageAlt} title={creature.location.title} eyebrow={creature.name + ' · HERKOMST'} steps={creature.location.steps} variant="map" /></div>
        <div id="story" data-chapter="story"><StoryReader creature={creature} /></div>
        <div id="folklore" data-chapter="folklore"><Folklore creature={creature} /></div>
      </>}
    </main>
    {!gated && <nav className="chapter-turn" aria-label="Wezens in dit boek">{neighbors.previous ? <Link to={pathFor(neighbors.previous)}>← {neighbors.previous.name}</Link> : <span>Begin van dit boek</span>}{neighbors.next ? <Link className="primary-button" to={pathFor(neighbors.next)}>{neighbors.next.name}<Icon name="arrow" size={18} /></Link> : <Link className="primary-button" to={'/boeken/' + category}>Terug naar de inhoudsopgave<Icon name="book" size={18} /></Link>}</nav>}
    <footer className="site-footer"><span>Legends & Mythology</span><span>Blijf nieuwsgierig. Er is altijd een volgend verhaal.</span><button onClick={() => move(category, 'closing')}>Sluit boek</button></footer>
  </div></div>;
}
