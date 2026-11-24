import type { Cost } from '../schemas/catalog';

export const COST_LABEL: Record<Cost, string> = {
  free: 'Grátis',
  freemium: 'Grátis com plano pago',
  paid: 'Pago',
};

export const COST_SHORT: Record<Cost, string> = {
  free: 'Grátis',
  freemium: 'Freemium',
  paid: 'Pago',
};
