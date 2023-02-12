<script>
	export let data;
  console.log(data)
</script>

<h1 class="text-2xl text-center mb-10 mt-10">Github Users</h1>

<div class="grid grid-cols-3 gap-4">
	{#each data.users as item}
		<a href={`/recipes/${item.id}`} class="relative text-center">
			<img class="rounded-lg shadow-md h-48 w-48" src={item.avatar_url} alt={item.login} />
			<p class="text-sm absolute z-20 top-0 mt-20 text-center inset-x-0 text-white">{item.login}</p>
		</a>
	{/each}
</div>
