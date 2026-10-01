import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import type { Category } from '../content/types';
import { useBookMotion } from '../hooks/useBookMotion';
import styles from './Common.module.css';

export function SiteFooter({ book }: { book?: Category }) {
  const move = useBookMotion();
  return <footer className={styles.footer}>
    <span className={styles.footerBrand}><Icon name="compass" /> Legends & Mythology</span>
    <span>Verhalen om samen te ontdekken.</span>
    {book ? <button style={{background:"transparent",color:"inherit",border:0}} onClick={() => move(book, 'closing')}>Sluit boek</button> : <Link to="/over">Over de verzameling <Icon name="arrow-right" /></Link>}
  </footer>;
}
