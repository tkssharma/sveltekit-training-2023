import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  return {
    userId: event.locals.userId,
  };
})