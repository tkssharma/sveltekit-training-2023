<nav>
	<a href="/">Home</a>
	<a href="/shop" data-sveltekit-prefetch>Shop</a>
	<a href="/movies" data-sveltekit-prefetch>Movies</a>
  <a href="/posts" data-sveltekit-prefetch>posts</a>
</nav>
<slot />

<style>
	nav {
		display: flex;
	}
	nav a {
		margin-right: 1rem;
	}
</style>
