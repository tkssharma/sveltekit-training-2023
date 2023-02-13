import type { Handle } from "@sveltejs/kit";

const handle: Handle = async ({ event, resolve }) => {

  const { headers } = event.request;
  const cookies = event.cookies.get('AuthorizationToken');

  if (cookies) {
    // we will write a logic to validate token and get user data 
    const sessionUser = {
      id: '234e2e2',
      email: 'hello@gmail.com'
    }
    event.locals.user = sessionUser;
  }
  resolve(event);
}