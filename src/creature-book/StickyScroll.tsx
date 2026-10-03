import { useEffect, useRef, useState } from 'react';
import type { DiscoveryStep } from '../creatures/types';
import { Icon } from './Icon';
import { Ornament } from './Ornament';

interface Point { x: number; y: number }
interface Props { image: string; imageAlt: string; title: string; intro: string; steps: DiscoveryStep[]; question: string; points: Record<string, Point>; variant?: 'anatomy' | 'map' }

export function StickyScroll({ image, imageAlt, title, intro, steps, question, points, variant = 'anatomy' }: Props) {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const elements = blocks.current.filter((el): el is HTMLElement => !!el);
    let scheduled = 0;
    const update = () => {
      scheduled = 0;
      const target = window.innerHeight * (window.innerWidth < 760 ? 0.68 : 0.52);
      let nearest = 0;
      let distance = Infinity;
      elements.forEach((el, index) => { const rect = el.getBoundingClientRect(); const d = Math.abs(rect.top + rect.height / 2 - target); if (d < distance) { nearest = index; distance = d; } });
      setActive(nearest);
    };
    const schedule = () => { if (!scheduled) scheduled = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(scheduled); };
  }, [steps]);
  const goToStep = (index: number) => {
    const element = blocks.current[index];
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const target = window.innerHeight * (window.innerWidth < 760 ? 0.68 : 0.52);
    window.scrollTo({ top: window.scrollY + rect.top + rect.height / 2 - target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const goToFact = (id: string) => {
    const index = steps.findIndex(step => step.id === id);
    if (index >= 0) goToStep(index);
  };
  return <section className={`discovery ${variant}`} aria-label={title}>
    <div className="discovery-visual">
      <div className="section-heading"><h1>{title}</h1><p className="discovery-intro">{intro}</p><Ornament /></div>
      <div className="illustration-frame">
        <img src={image} alt={imageAlt} />
        {variant === 'anatomy' && <Ornament compass />}
        {steps.map((step, index) => {
          const point = points[step.id];
          return point ? <button key={step.id} className="illustration-point" style={{ left: `${point.x}%`, top: `${point.y}%` }} data-active={active === index} aria-label={`Bekijk ${step.title}`} aria-controls={`${variant}-${step.id}`} onClick={() => goToFact(step.id)} /> : null;
        })}
      </div>
      <div className="visual-caption"><Icon name={variant === 'map' ? 'map' : 'feather'} size={17} /><span>{steps[active]?.title}</span><span className="folio">{String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span></div>
    </div>
    <div className="discovery-steps">{steps.map((step, index) => <article key={step.id} id={`${variant}-${step.id}`} ref={el => { blocks.current[index] = el; }} className={`discovery-step ${active === index ? 'is-active' : ''}`}>
      <h2>{step.title}</h2><p>{step.text}</p>
      <div className="step-dots" aria-label={`Ontdekkingspunt ${index + 1} van ${steps.length}`}>{steps.map((point, dot) => <button key={point.id} className={dot === index ? 'active' : ''} aria-label={`Bekijk ${point.title}`} aria-current={dot === index ? 'step' : undefined} onClick={() => goToStep(dot)} />)}</div>
    </article>)}</div>
    <p className="discovery-question"><Icon name="spark" size={18} />{question}</p>
  </section>;
}
