import { ValidExpType } from '@/types';
import { PROJECT_TYPE_COLORS } from '@/constants';
import { formatDate, formatDateRange } from './date';

export const getProjectTypeColor = (type: ValidExpType): string => {
  return PROJECT_TYPE_COLORS[type] || 'bg-gray-100 text-gray-800';
};

export const truncateTechStack = (techStack: string[], maxDisplay: number = 4): {
  display: string[];
  remaining: number;
} => {
  const display = techStack.slice(0, maxDisplay);
  const remaining = Math.max(0, techStack.length - maxDisplay);
  
  return { display, remaining };
};
