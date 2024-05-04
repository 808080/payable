export const solutions = [
  {
    title: 'Payment products to meet every need.',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    title: 'Security built in its core',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    title: 'Payment products to meet every need.',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination.'
  },
  {
    title: 'Payment products to meet every need.',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    title: 'Security built in its core',
    description: 'Explore the endless payments possibilities with payabl. and level-up your business today.'
  }
];

export const features = [
  {
    icon: 'IconsLock',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    icon: 'IconsGear',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    icon: 'IconsMail',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    icon: 'IconsLock',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    icon: 'IconsGear',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  },
  {
    icon: 'IconsMail',
    title: 'gateway',
    description: 'Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless payments possibilities with payabl. and level-up your business today.'
  }
] as const;

export const themes = [
  { main: '#7CDDAE', secondary: '#7CDDAE', bg: '#082C34', text: '#fff' },
  { main: '#B0A3FF', secondary: '#fff', bg: '#B0A3FF', text: '#fff' },
  { main: '#F8B968', secondary: '#022128', bg: '#F8B968', text: '#022128' },
  { main: '#CD176E', secondary: '#fff', bg: '#CD176E', text: '#fff' }
] as const;
export const themesClasses = themes.map(t => `bg-[${t.main}]`);

export type ThemeColor = typeof themes[number];
export type HexColor = `#${string}`;