import type { Book } from './types';

export const books: readonly Book[] = [
  {
    id: 'wonder', volume: 'I', title: 'Verwonderlijke wezens',
    shortTitle: 'Verwonderlijke', nickname: 'Het lichte boek',
    description: 'Waar vleugels de hemel raken en het onmogelijke heel even mogelijk wordt. Ontdek de zachte, magische kant van oude verhalen.',
    invitation: 'Voor grote ogen en kleine dromers.', age: 'Samen lezen · 6+',
    mood: 'Verwondering & magie', emblem: 'pegasus',
  },
  {
    id: 'thrilling', volume: 'II', title: 'Spannende wezens',
    shortTitle: 'Spannende', nickname: 'Het bruine boek',
    description: 'Voorbij de bekende paden wachten draken, diepe wateren en een beetje gevaar. Verhalen voor wie nieuwsgierigheid net iets groter is dan angst.',
    invitation: 'Voor avonturiers met een dapper hart.', age: 'Samen lezen · 8+',
    mood: 'Avontuur & spanning', emblem: 'dragon',
  },
  {
    id: 'frightening', volume: 'III', title: 'Beangstigende wezens',
    shortTitle: 'Beangstigende', nickname: 'Het zwarte boek',
    description: 'Sommige verhalen werden fluisterend verteld. Verken de schaduwkant van folklore, met ruimte om stil te staan en samen verder te lezen.',
    invitation: 'Voor wie ook de schaduwen wil begrijpen.', age: 'Lees samen · 12+',
    mood: 'Mysterie & folklore', emblem: 'moon',
  },
];
