import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../blog/$types";



export const load: PageServerLoad = (event) => {
  const user = event.locals.user;
  if (user) {
    throw redirect(302, '/guarded')
  }
}

export const actions: Actions = {

  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());

    if (!formData.email || !formData.password) {
      return {
        data: formData,
        error: 'missing required field'
      }
    }
    const { email, password } = formData as { email: string, password: string }
    const error = null;
    // fetch 
    // token from cookies 
    // made api call 
    // data 
    // return {"name": "tarun"}

    
    if (error) {
      return {
        data: formData,
        error: 'username password in-correct'
      }
    }
    event.cookies.set('AuthorizationToken', `Bearer <wedwdewdwdwed>`, {
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });
    throw redirect(302, '/guarded');
  }
}