import { env } from '$env/dynamic/public'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  console.log(env.PUBLIC_API_KEY) // public
}