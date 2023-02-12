import { redirect } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const access = event.cookies.get("access") === "true";
  event.locals.user = access ? { email: 'TKSSHARMA@gmail.com' } : null;

  if (!access && event.route.id?.startsWith("/(app)")) {
    throw redirect(303, "/")
  }
  const response = await resolve(event);
  return response;
}