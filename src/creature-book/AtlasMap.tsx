import land from './atlas/land.json';
import lakes from './atlas/lakes.json';
import detail from './atlas/detail.json';
import type { AtlasFocus } from '../creatures/types';

/** Local Natural Earth geography, deliberately without political place claims. */
export function AtlasMap({ focus }: { focus: AtlasFocus }) {
  const [west, south, east, north] = focus.bounds;
  const width = east - west;
  const height = north - south;
  const unit = Math.max(width, height) / 90;
  const [lon, lat] = focus.center;
  const area = focus.area;
  const geography = detail.find(zone => west >= zone.bounds[0] && south >= zone.bounds[1] && east <= zone.bounds[2] && north <= zone.bounds[3])?.paths ?? land;
  return <figure className="atlas-sheet"><svg viewBox={`${west} ${-north} ${width} ${height}`} style={{ aspectRatio: width + ' / ' + height }} role="img" aria-label={`Atlas: ${focus.label}. Gemarkeerd ${focus.point ? 'cultuurhistorisch punt' : 'breed cultuurgebied'}, geen vindplaats van een wezen.`}>
    <rect x={west} y={-north} width={width} height={height} fill="var(--atlas-water)" />
    <g className="atlas-grid" strokeWidth={unit * .025}>{Array.from({ length: 37 }, (_, i) => <path key={`lon${i}`} d={`M${i * 10 - 180},-90V90`} />)}{Array.from({ length: 19 }, (_, i) => <path key={`lat${i}`} d={`M-180,${i * 10 - 90}H180`} />)}</g>
    <g fill="var(--atlas-land)" stroke="var(--atlas-ink)" strokeWidth={unit * .07}>{geography.map((d, i) => <path key={i} d={d} />)}</g>
    <g fill="var(--atlas-water)" stroke="var(--atlas-ink)" strokeWidth={unit * .05}>{lakes.map((d, i) => <path key={i} d={d} />)}</g>
    {area && <ellipse cx={(area[0] + area[2]) / 2} cy={-(area[1] + area[3]) / 2} rx={(area[2] - area[0]) / 2} ry={(area[3] - area[1]) / 2} fill="var(--accent)" fillOpacity=".13" stroke="var(--accent)" strokeWidth={unit * .13} strokeDasharray={`${unit * .5} ${unit * .3}`} />}
    {focus.point && <circle cx={lon} cy={-lat} r={unit * .8} fill="var(--accent)" />}
    <text x={lon} y={-lat + unit * 3} textAnchor="middle" fontSize={unit * 4.6} fill="var(--ink)" stroke="var(--atlas-water)" strokeWidth={unit * .2} paintOrder="stroke" fontFamily="Georgia,serif">{focus.label}</text>
    <text x={east - unit * 4} y={-north + unit * 5} textAnchor="middle" fontSize={unit * 3} fill="var(--atlas-ink)">N ↑</text>
  </svg><figcaption>{focus.point ? 'Cultuurhistorische context' : 'Verhalen verschillen per streek en verteller.'}</figcaption></figure>;
}
