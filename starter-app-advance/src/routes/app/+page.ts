import { PUBLIC_API_KEY } from '$env/static/public'
import type { PageLoad } from './$types'
import { secret } from '$lib/server/secret'


export const load: PageLoad = () => {
  console.log(PUBLIC_API_KEY) // public
  console.log(secret);
}