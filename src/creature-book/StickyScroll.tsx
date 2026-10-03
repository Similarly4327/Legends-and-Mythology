import { useEffect, useRef, useState } from 'react';
import type { DiscoveryStep } from '../creatures/types';
import { Icon } from './Icon';
import { Ornament } from './Ornament';

interface Props { image: string; imageAlt: string; title: string; eyebrow: string; steps: DiscoveryStep[]; variant?: 'anatomy' | 'map' }

export function StickyScroll({ image, imageAlt, title, eyebrow, steps, variant = 'anatomy' }: Props) {
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
  const focus = steps[active]?.focus;
  const goToStep = (index: number) => {
    const element = blocks.current[index];
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const target = window.innerHeight * (window.innerWidth < 760 ? 0.68 : 0.52);
    window.scrollTo({ top: window.scrollY + rect.top + rect.height / 2 - target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <section className={`discovery ${variant}`} aria-label={title}>
    <div className="discovery-visual">
      <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><Ornament /></div>
      <div className="illustration-frame">
        <img src={image} alt={imageAlt} />
        {variant === 'anatomy' && <Ornament compass />}
        {focus && <div className="focus-marker" data-edge={focus.x > 60 ? 'right' : 'left'} style={{ left: `${focus.x}%`, top: `${focus.y}%` }}><span /> <small>{steps[active].label}</small></div>}
      </div>
      <div className="visual-caption"><Icon name={variant === 'map' ? 'map' : 'feather'} size={17} /><span>{steps[active]?.label}</span><span className="folio">{String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span></div>
    </div>
    <div className="discovery-steps">{steps.map((step, index) => <article key={index} ref={el => { blocks.current[index] = el; }} className={`discovery-step ${active === index ? 'is-active' : ''}`}>
      <span className="eyebrow">ONTDEKKING {String(index + 1).padStart(2, '0')}</span><h2>{step.title}</h2><p>{step.text}</p>
      <div className="step-dots" aria-label={`Stap ${index + 1} van ${steps.length}`}>{steps.map((_, dot) => <button key={dot} className={dot === index ? 'active' : ''} aria-label={`Ga naar stap ${dot + 1}`} aria-current={dot === index ? 'step' : undefined} onClick={() => goToStep(dot)} />)}</div>
    </article>)}</div>
  </section>;
}
