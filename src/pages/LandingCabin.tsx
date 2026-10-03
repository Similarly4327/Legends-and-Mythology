import { Link } from 'react-router-dom';
import { books } from '../content/books';
import { pegasus } from '../content/creatures/pegasus';
import { assetUrl } from '../lib/assets';
import { BookObject } from '../components/BookObject';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { Artwork } from '../components/Artwork';
import { Icon } from '../components/Icon';
import { usePageTitle } from '../hooks/usePageTitle';
import common from '../components/Common.module.css';
import styles from './LandingCabin.module.css';

export function LandingCabin() {
  usePageTitle('De studeerkamer');
  return <div className={common.paperPage}>
    <div className={styles.cabin}>
      <img className={styles.backdrop} src={assetUrl('artwork/cabin.webp')} width="1672" height="941" alt="" fetchPriority="high" />
      <div className={styles.shade} />
      <SiteHeader dark />
      <main id="main" tabIndex={-1}>
        <div className={styles.introduction}>
          <div className={styles.eyebrow}><span /> EEN VERZAMELING VOOR NIEUWSGIERIGE ZIELEN <span /></div>
          <h1>Sommige verhalen<br /><em>leven verder.</em></h1>
          <p>Welkom in de studeerkamer. Hier rusten wezens uit oude<br className={styles.desktopBreak} /> verhalen, verre landen en onze verbeelding.</p>
          <span className={styles.invitation}>Kies een boek. Sla een wereld open.</span>
        </div>
        <section id="boeken" className={styles.books} aria-label="Kies een van de drie boeken">
          {books.map((book) => <BookObject key={book.id} book={book} />)}
        </section>
        <div className={styles.bottomNote}><span /> Drie boeken. Een wereld om samen te ontdekken. <span /></div>
        <button className={styles.down} onClick={() => document.getElementById('ontdekken')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Lees meer over de verzameling"><Icon name="chevron-down" /></button>
      </main>
    </div>
    <section id="ontdekken" className={styles.discovery} aria-labelledby="discovery-title">
      <div className={styles.discoveryCopy}>
        <span className={common.eyebrow}>Meer dan een verzameling wezens</span>
        <h2 id="discovery-title">Elke legende begint<br />met nieuwsgierigheid.</h2>
        <p>Een veer tussen de rotsen. Een schaduw over de berg. Een verhaal dat al honderden jaren wordt doorverteld.</p>
        <p>Dit bestiarium nodigt je uit om langzaam te kijken, samen te lezen en vragen te stellen. Ontdek waar een wezen vandaan komt — en waarom mensen het verhaal bleven vertellen.</p>
        <Link className={common.textLink} to="/over">Een kijkje in het veldnotitieboek <Icon name="arrow-right" /></Link>
        <div className={styles.features}><span><Icon name="book" /> Om samen te lezen</span><span><Icon name="map" /> Verhalen van de wereld</span></div>
      </div>
      <Link to="/wezens/pegasus" className={styles.preview} aria-label="Ontmoet Pegasus, een verhaal uit het lichte boek">
        <div className={styles.previewArt}><Artwork artwork={pegasus.artwork} /><span className={styles.plateNumber}>PLAAT I</span></div>
        <div className={styles.previewCaption}><span><small>UIT HET LICHTE BOEK</small><strong>Een eerste ontmoeting: Pegasus</strong></span><Icon name="arrow-right" /></div>
      </Link>
    </section>
    <SiteFooter />
  </div>;
}
