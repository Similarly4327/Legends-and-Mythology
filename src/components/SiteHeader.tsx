import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './Common.module.css';

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return <header className={`${styles.siteHeader} ${dark ? styles.dark : ''}`}>
    <Link to="/" className={styles.brand} aria-label="Legends & Mythology, terug naar de studeerkamer"><Icon name="compass" /><span>LEGENDS <i>&</i> MYTHOLOGY</span></Link>
    <nav aria-label="Hoofdnavigatie" className={styles.siteNav}>
      <Link to="/" className={styles.collectionLink}><Icon name="book" /><span>De verzameling</span></Link>
      <Link to="/over">Over dit bestiarium</Link>
    </nav>
  </header>;
}
