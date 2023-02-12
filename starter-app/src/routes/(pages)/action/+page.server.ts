import { invalid, redirect } from "@sveltejs/kit";
import { detach_before_dev } from "svelte/internal";



export const actions = {

  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    // do we have this email and password correct 
    //const encodeData = jwt.sign('userId', process.env.SECRET);
    cookies.set('sessionId', "value");
    return invalid(400, { email, invalid: true, required: true });
    //return { success: true }
    //throw redirect(303, '/login')

  },
  register: async ({ request }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
  }
}