import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBook, getBookCreatures, searchCreatures } from '../content/repository';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { CreatureCard } from '../components/CreatureCard';
import { BookEmblem } from '../components/BookEmblem';
import { NotFound } from '../components/NotFound';
import { Icon } from '../components/Icon';
import { usePageTitle } from '../hooks/usePageTitle';
import common from '../components/Common.module.css';
import styles from './BookOverview.module.css';

export function BookOverview() {
  const { category } = useParams();
  const book = getBook(category);
  const [query, setQuery] = useState('');
  usePageTitle(book?.title ?? 'Een onbekend boek');
  if (!book) return <NotFound title="Dit boek staat nog niet op de plank." />;
  const entries = getBookCreatures(book.id);
  const filtered = searchCreatures(entries, query);
  return <div className={common.paperPage} data-theme={book.id}>
    <SiteHeader />
    <main id="main" tabIndex={-1} className={styles.main}>
      <Link to="/" className={`${common.textLink} ${styles.back}`}><Icon name="arrow-left" /> De studeerkamer</Link>
      <section className={styles.heading} aria-labelledby="book-title">
        <div><span className={common.eyebrow}>Boek {book.volume} <span aria-hidden="true">/</span> {book.nickname}</span><h1 id="book-title">{book.shortTitle}<br /><em>wezens.</em></h1><p>{book.description}</p><span className={styles.age}>{book.age} <span aria-hidden="true">·</span> {book.mood}</span></div>
        <div className={styles.seal} aria-hidden="true"><BookEmblem kind={book.emblem} /><span>VOLUME {book.volume}</span></div>
      </section>
      {book.id === 'frightening' && <div className={styles.warning}><Icon name="shield" /><p>Het zwarte boek lees je het liefst samen. Elk veldverslag begint met een moment om de sfeer te bekijken.</p></div>}
      <section aria-label="Inhoudsopgave" className={styles.contents}>
        <div className={styles.toolbar}><div><span className={common.eyebrow}>Inhoudsopgave</span><span className={styles.count}>{entries.length} {entries.length === 1 ? 'veldverslag' : 'veldverslagen'}</span></div><div className={styles.search}><Icon name="search" /><label htmlFor="creature-search" className="sr-only">Zoek op naam, regio of onderwerp</label><input id="creature-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Zoek in dit boek…" type="search" />{query && <button onClick={() => setQuery('')} aria-label="Zoekopdracht wissen"><Icon name="close" /></button>}</div></div>
        <p role="status" className="sr-only">{filtered.length} veldverslagen gevonden.</p>
        <div className={styles.cards} data-multiple={filtered.length > 1}>{filtered.map((creature, index) => <CreatureCard key={creature.id} creature={creature} index={index} compact={filtered.length > 1} />)}</div>
        {filtered.length === 0 && <div className={styles.empty}><Icon name="feather" /><h2>{entries.length ? 'Geen spoor gevonden.' : 'De eerste bladzijde wacht nog.'}</h2><p>{entries.length ? 'Probeer een andere naam, regio of een ander onderwerp.' : 'De onderzoeker werkt aan nieuwe veldverslagen voor dit boek.'}</p>{query && <button className={common.button} onClick={() => setQuery('')}>Toon alle veldverslagen</button>}</div>}
      </section>
      <div className={styles.endnote}><span aria-hidden="true">✧</span><p>De verzameling groeit. Elk nieuw verhaal krijgt zijn eigen plek in het boek.</p><Link to="/" className={common.textLink}>Ontdek ook de andere boeken <Icon name="arrow-right" /></Link></div>
    </main>
    <SiteFooter />
  </div>;
}
