import { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { getBook, getCreature, getCreatureNeighbors } from '../content/repository';
import type { Creature } from '../content/types';
import { usePageTitle } from '../hooks/usePageTitle';
import { ReaderHeader } from '../components/reader/ReaderHeader';
import { StickyStorySection } from '../components/reader/StickyStorySection';
import { FolkloreSection } from '../components/reader/FolkloreSection';
import { WarningGate } from '../components/reader/WarningGate';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { NotFound } from '../components/NotFound';
import { Icon } from '../components/Icon';
import common from '../components/Common.module.css';
import styles from '../components/reader/Reader.module.css';

export function CreatureReader() {
  const { slug } = useParams();
  const creature = getCreature(slug);
  usePageTitle(creature?.name ?? 'Een onbekend wezen');
  if (!creature) return <NotFound title="Dit wezen laat nog geen sporen achter." description="Dit veldverslag bestaat nog niet of is nog niet gepubliceerd. Kies een boek in de studeerkamer om verder te ontdekken." />;
  if (creature.status !== 'available') return <NotFound title={creature.status === 'locked' ? 'Dit veldverslag is nog gesloten.' : 'De onderzoeker is nog onderweg.'} description="Deze bladzijde is in voorbereiding. Je kunt ondertussen de andere veldverslagen in de studeerkamer ontdekken." />;
  return <ReaderContent key={creature.id} creature={creature} />;
}

function ReaderContent({ creature }: { creature: Creature }) {
  const [gateAccepted, setGateAccepted] = useState(!creature.warning);
  const [largeText, setLargeText] = useState(false);
  const [activeChapter, setActiveChapter] = useState(creature.chapters[0].id);
  const onActivate = useCallback((chapterId: string) => setActiveChapter(chapterId), []);
  const book = getBook(creature.category)!;
  const { next, previous } = getCreatureNeighbors(creature.slug);
  const selectChapter = (chapterId: string) => {
    document.getElementById(chapterId)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <div data-theme={creature.category} className={styles.reader} style={{ '--reader-font-size': largeText ? '27px' : undefined } as CSSProperties}>
    {gateAccepted ? <ReaderHeader creature={creature} activeChapter={activeChapter} largeText={largeText} onTextSize={() => setLargeText((current) => !current)} onChapterSelect={selectChapter} /> : <SiteHeader />}
    <main id="main" tabIndex={-1}>
      {!gateAccepted ? <WarningGate creature={creature} onContinue={() => { setGateAccepted(true); window.scrollTo({ top: 0, behavior: 'instant' }); }} /> : <>
        <header className={styles.titleBlock}><span className={common.eyebrow}>{book.nickname} <span aria-hidden="true">/</span> {creature.region}</span><h1>{creature.name}</h1><p>{creature.alternativeName}</p><div className={styles.readerMeta}><span>{creature.tradition}</span><span>{creature.readingMinutes} min. samen lezen</span><span>{creature.age}</span></div><span className={styles.titleOrnament} aria-hidden="true">✧</span></header>
        {creature.chapters.map((chapter, index) => <StickyStorySection key={chapter.id} creature={creature} chapter={chapter} index={index} onActivate={onActivate} />)}
        <FolkloreSection creature={creature} />
        <nav className={styles.nextDiscovery} aria-label="Verder ontdekken"><span className={common.eyebrow}>Het verhaal reist verder</span><h2>Neem je nieuwsgierigheid mee.</h2><div>{previous && <Link to={`/wezens/${previous.slug}`} className={common.textLink}><Icon name="arrow-left" /> {previous.name}</Link>}<Link to={`/boeken/${creature.category}`} className={common.textLink}><Icon name="book" /> Naar de inhoudsopgave</Link>{next && <Link to={`/wezens/${next.slug}`} className={common.button}>Ontdek {next.name} <Icon name="arrow-right" /></Link>}</div></nav>
      </>}
    </main>
    <SiteFooter />
  </div>;
}
