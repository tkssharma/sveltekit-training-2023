import { getPokemonById } from '../../../pokestore';

export const load = async ({ params, fetch }) => {
	const fetchPost = async (id) => {
		const data = await getPokemonById(id);
		console.log(data);
		return data;
	};
	return {
		pokemon: await fetchPost(params.id)
	};
};
