<script>
  import '../app.css';
  import Header from '$lib/navbar.svelte';
  import Footer from '$lib/footer.svelte';

</script>

<div class="app">
  <Header />
  <slot />
  <Footer/>


</div>



<style>
	.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
