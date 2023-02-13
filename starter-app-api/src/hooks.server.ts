import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {

  if (event.url.pathname.startsWith('/admin')) {
    // Check if the user is authenticated
    // If not, redirect to the login page

    const authToken = event.cookies.get('authToken');

    if (!authToken) {
      throw redirect(302, '/login');
    }

    // Validate the auth token
    const user = validateAuthToken(authToken);

    if (!user) {
      throw redirect(302, '/login');
    }

    // Store the user profile data in the locals object
    event.locals.userId = user.id;

    return await resolve(event);
  }

})