export async function load({ params }) {
	const fetchPost = async (id) => {
		const url = `https://api.github.com/users/${id}`;

		const res = await fetch(url);

		return await res.json();
	};

	return {
		user: fetchPost(params.id)
	};
}
