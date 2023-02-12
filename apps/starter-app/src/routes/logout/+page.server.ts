import { redirect } from "@sveltejs/kit"

export const actions = {
  default: async ({ cookies, locals, event }) => {
    cookies.set("access", null)
    throw redirect(303, "/")
  }
}