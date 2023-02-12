export const load = ({ fetch }) => {

  const fetchPosts = async () => {
    console.log('fetch post client')
    const res = await fetch('/api/posts');
    const data = await res.json();
    return data.posts;
  }

  return {
    posts: fetchPosts()
  }
}