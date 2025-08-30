// Animation constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.4,
} as const;

export const ANIMATION_DELAY = {
  SMALL: 0.1,
  MEDIUM: 0.2,
  LARGE: 0.3,
} as const;

// Color constants
export const COLORS = {
  PRIMARY: '#5128a0',
  PRIMARY_DARK: '#3e217e',
  PRIMARY_LIGHT: '#5128a0',
  GRAY: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  BLUE: {
    50: '#eff6ff',
    100: '#dbeafe',
    800: '#1e40af',
  },
  GREEN: {
    100: '#dcfce7',
    800: '#166534',
  },
  PURPLE: {
    100: '#f3e8ff',
    800: '#6b21a8',
  },
} as const;

// Project type colors mapping
export const PROJECT_TYPE_COLORS = {
  Professional: 'bg-blue-100 text-blue-800',
  Personal: 'bg-green-100 text-green-800',
  Freelance: 'bg-purple-100 text-purple-800',
} as const;

// Layout constants
export const LAYOUT = {
  MAX_WIDTH: {
    SMALL: 'max-w-4xl',
    MEDIUM: 'max-w-6xl',
    LARGE: 'max-w-7xl',
  },
  PADDING: {
    SECTION: 'py-16 lg:py-24',
    CONTAINER: 'px-4',
  },
} as const;
