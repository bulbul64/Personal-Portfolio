import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { config } from '../components/config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ✅ unused generic 'K' removed from type alias
type GroupByResult<T> = Record<string, T[]>;

export function groupBy<T, K extends keyof T>(array: T[], key: K): GroupByResult<T> {
  return array.reduce((acc, item) => {
    const keyValue = String(item[key]);
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);
    return acc;
  }, {} as GroupByResult<T>);
}

export function absoluteUrl(path: string) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:3000${path}`
    : `https://${config.appUrl}${path}`;
}
