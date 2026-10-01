import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import type { Category } from '../content/types';
import { useBookMotion } from '../hooks/useBookMotion';
import styles from './Common.module.css';

export function SiteHeader({ dark = false, book }: { dark?: boolean; book?: Category }) {
  const move = useBookMotion();
  return <header className={`${styles.siteHeader} ${dark ? styles.dark : ''}`}>
    <Link to="/" onClick={event => { if (book) { event.preventDefault(); move(book, 'closing'); } }} className={styles.brand} aria-label="Legends & Mythology, terug naar de studeerkamer"><Icon name="compass" /><span>LEGENDS <i>&</i> MYTHOLOGY</span></Link>
    <nav aria-label="Hoofdnavigatie" className={styles.siteNav}>
      {book ? <button className={styles.collectionLink} style={{background:"transparent",color:"inherit",border:0}} onClick={() => move(book, 'closing')}>Sluit boek</button> : <Link to="/" className={styles.collectionLink}><Icon name="book" /><span>De verzameling</span></Link>}
      {!book && <Link to="/over">Over dit bestiarium</Link>}
    </nav>
  </header>;
}
