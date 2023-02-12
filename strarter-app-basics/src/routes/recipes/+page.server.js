export async function load({ params }) {
	const url = `https://api.github.com/users`;

	const res = await fetch(url);

	const data = await res.json();

	return {
		users: data || []
	};
}
