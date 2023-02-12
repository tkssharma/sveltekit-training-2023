<script>
  export let data;

  const { posts } = data;
</script>

<div class="container m-16 p-16">
  <h1>Blog Posts</h1>

  {#each posts as post}
    <a href="/blog/{post.id}">
      <h2 class="p-4">{post.title}</h2>
    </a>
  {/each}
</div>


<style>
  a {
    text-decoration: underline;
    color: var(--color);
  }
  a:hover {
    color: var(--primary-color);
  }
</style>
