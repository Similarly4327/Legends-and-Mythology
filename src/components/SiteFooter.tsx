import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import styles from './Common.module.css';

export function SiteFooter() {
  return <footer className={styles.footer}>
    <span className={styles.footerBrand}><Icon name="compass" /> Legends & Mythology</span>
    <span>Verhalen om samen te ontdekken.</span>
    <Link to="/over">Over de verzameling <Icon name="arrow-right" /></Link>
  </footer>;
}
