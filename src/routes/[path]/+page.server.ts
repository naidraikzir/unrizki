import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
	return [
    { path: '404' }
  ];
};

export const prerender = true;
