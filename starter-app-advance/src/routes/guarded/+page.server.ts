import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../blog/$types";


export const load: PageServerLoad = (event) => {
  const user = event.locals.user;

  if (!user) {
    return {
      status: 302,
      message: '',
      redirect: '/login'
    }
  }

  return {
    user: event.locals.user
  }
}