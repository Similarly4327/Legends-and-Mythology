import { Link } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { Icon } from './Icon';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './Common.module.css';

export function NotFound({ title = 'Een onbeschreven bladzijde.', description = 'Dit pad staat nog niet op onze kaart. In de studeerkamer vind je de boeken die je wel kunt openen.' }: { title?: string; description?: string }) {
  usePageTitle('Een onbeschreven bladzijde');
  return <div className={styles.paperPage}><SiteHeader /><main id="main" tabIndex={-1} className={styles.emptyPage}><Icon name="compass" /><span className={styles.eyebrow}>Aan de rand van de kaart</span><h1>{title}</h1><p>{description}</p><Link to="/" className={styles.button}>Terug naar de studeerkamer <Icon name="arrow-right" /></Link></main><SiteFooter /></div>;
}
