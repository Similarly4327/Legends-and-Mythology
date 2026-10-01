import { useId } from 'react';
import type { MapLocation } from '../../content/types';
import styles from './Story.module.css';

export function MapStage({ location }: { location: MapLocation }) {
  const gridId = useId();
  return <div className={styles.mapStage}>
    <span className={styles.mapEyebrow}>ATLAS VAN DE VERBEELDING</span>
    <svg className={styles.map} viewBox="0 0 600 370" role="img" aria-label={`Schematische verhalenkaart: ${location.name}`}>
      <defs><pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".16" /></pattern></defs>
      <rect x="10" y="10" width="580" height="350" fill={`url(#${gridId})`} stroke="currentColor" strokeWidth=".5" opacity=".65" />
      <g fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="1" opacity=".75">
        <path d="m54 78 31-23 45-9 24 8 20-13 43 3 8 26-20 10-5 20-27 8-5 29-20 12-8 30-12 5-18-16-8-26-19-10-25-28Z" />
        <path d="m182 48 22-27 24 5 11 20-16 28-23-5Z" />
        <path d="m140 174 29-8 21 21 15 23-4 37-20 27-13 47-14 9-9-39-14-27 5-29-19-27Z" />
        <path d="m277 101 14-21 30 1 16-15 29-2 11 22-8 18-36-1-16 15-16-4-20 8Z" />
        <path d="m297 130 22-10 30 7 22 25-6 37-22 28-7 35-21 15-18-34-18-19-10-34 5-29Z" />
        <path d="m350 83 21-27 59-7 41 10 25-1 45 22 8 23-35 10-15 19-16-8-14 34-22 9-16-20-17-24-29-11-12 13-19-17-21 2Z" />
        <path d="m403 146 18 16 3 35-12 20-13-39Zm43 26 14 17 4 18 20 8-9 13-32-10-9-27Zm46 61 18-11 34 3 17 24-8 25-21 9-32-11-19 3-5-23Z" />
        <path d="m532 134 5-11 5 8-6 18-8 4Zm-171 96 8 7-8 30-6-15Zm200 56 9 14-12 17-5-4Z" />
      </g>
      <g transform={`translate(${location.x * 6}, ${location.y * 3.7})`}><circle r="17" fill="currentColor" opacity=".1" /><circle r="7" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" /><circle r="2.5" fill="currentColor" /></g>
      <g transform="translate(55 302)" fill="none" stroke="currentColor" strokeWidth=".7"><circle r="18" /><path d="M0-26V26M-26 0h52m-52 0 18-6 8-20 6 20 20 6-20 8-6 18-8-18Z" /><text x="0" y="-32" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8">N</text></g>
    </svg>
    <div className={styles.mapLabel}><span>HET SPOOR BEGINT HIER</span><strong>{location.name}</strong><p>{location.context}</p></div>
    <span className={styles.mapNote}>Schematische kaart · verhalentraditie, geen vindplaats</span>
  </div>;
}
