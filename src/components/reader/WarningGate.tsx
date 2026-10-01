import { Link } from 'react-router-dom';
import type { Creature } from '../../content/types';
import { Artwork } from '../Artwork';
import { Icon } from '../Icon';
import common from '../Common.module.css';
import styles from './Reader.module.css';

export function WarningGate({ creature, onContinue }: { creature: Creature; onContinue: () => void }) {
  return <div className={styles.gate}>
    <div className={styles.gateArt}><Artwork artwork={creature.artwork} priority /></div>
    <div className={styles.gateCopy}><Icon name="shield" /><span className={common.eyebrow}>Een moment voor jullie samen · {creature.age}</span><h1>{creature.warning?.title}</h1><p>{creature.warning?.description}</p><div className={styles.gateActions}><button className={common.button} onClick={onContinue}>Lees samen verder <Icon name="arrow-right" /></button><Link to={`/boeken/${creature.category}`} className={common.textLink}><Icon name="arrow-left" /> Terug naar het boek</Link></div><span className={styles.gateFootnote}>Je kunt op ieder moment stoppen en terug naar de studeerkamer.</span></div>
  </div>;
}
