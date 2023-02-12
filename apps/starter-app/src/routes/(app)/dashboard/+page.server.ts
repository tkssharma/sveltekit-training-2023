

export const load = async ({ locals }) => {
  console.log(locals);
  return {
    user: locals.user
  }
}