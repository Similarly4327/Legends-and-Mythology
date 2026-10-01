import { Link } from 'react-router-dom';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { Icon } from '../components/Icon';
import { usePageTitle } from '../hooks/usePageTitle';
import common from '../components/Common.module.css';
import styles from './AboutPage.module.css';

export function AboutPage() {
  usePageTitle('Over dit bestiarium');
  return <div className={common.paperPage}><SiteHeader /><main id="main" tabIndex={-1} className={styles.main}>
    <Link to="/" className={common.textLink}><Icon name="arrow-left" /> De studeerkamer</Link>
    <header><span className={common.eyebrow}>Een notitie van de onderzoeker</span><h1>Oude verhalen.<br /><em>Nieuwe nieuwsgierigheid.</em></h1><p>Legends & Mythology is een digitaal bestiarium: een verzameling geïllustreerde veldverslagen over wezens die mensen al generaties lang bezighouden.</p></header>
    <section><h2>Een boek voor elke stemming.</h2><p>Het lichte boek draait om verwondering. Het bruine boek neemt je mee op avontuur. Het zwarte boek verkent de onrust en de vragen achter donkere folklore. Kies samen wat bij het moment en de lezer past.</p></section>
    <section><h2>Samen kijken, langzaam lezen.</h2><p>Neem de tijd voor een illustratie. Lees een stukje, volg een spoor en praat over de vragen in de kantlijn. De leeftijd bij een veldverslag is onze redactionele indicatie; gevoeligheid voor spanning verschilt per kind.</p><p>Het zwarte boek begint met een leesmoment voor ouder en kind. De verhalen bouwen hun spanning langzaam op en laten ruimte om te stoppen of samen verder te lezen.</p></section>
    <section><h2>Folklore en onze verbeelding.</h2><p>Een legende heeft zelden maar één versie. We vermelden de gebruikte bronnen en maken onderscheid tussen overgeleverde motieven en eigen vertelbewerkingen. De verhalenkaart toont culturele context. Veldnotities en anatomische schetsen zijn speelse verbeelding.</p><p>Bij elk veldverslag vind je bronnotities. Externe bronnen zijn soms wetenschappelijk of oorspronkelijk van toon en kunnen meer spanning bevatten dan onze bewerking.</p></section>
    <section><h2>Negen deuren naar een verhaal.</h2><p>Ontmoet Pegasus, Fenix en Baku in het lichte boek; Draak, Cycloop en Manticore in het spannende boek; Kuchisake-onna, Wendigo en Baba Yaga in het zwarte boek. Elk veldverslag bevat een volledig eigen verhaal, een atlas en notities over de overlevering.</p></section>
    <Link to="/" className={common.button}>Kies een boek <Icon name="arrow-right" /></Link>
  </main><SiteFooter /></div>;
}
