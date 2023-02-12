import { redirect } from "@sveltejs/kit"

export const actions = {
  default: async ({ cookies }) => {
    cookies.set("access", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    throw redirect(303, "/")
  }
}