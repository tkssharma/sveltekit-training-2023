import {env} from '$env/dynamic/private';
import type { PageServerLoad } from '../app/$types';

export const load: PageServerLoad =() => {
  console.log(env.SECRET_API_KEY);
}