export const load = ({ params, fetch }) => {

  const fetchPosts = async (id) => {
    const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    post: fetchPosts(params.postId)
  }
}