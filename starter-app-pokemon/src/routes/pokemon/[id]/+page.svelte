
<script>
	import { pokemon } from "../../../pokestore";

    export let data;
    console.log(data)
</script>
<svelte:head>
</svelte:head>



<div class="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-10">
  <img class="h-40 w-40 m-8 " src={data.pokemon.sprites.back_default} alt={data.pokemon.name}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.pokemon.name}</div>
    <p class="text-white-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    {#each data.pokemon.abilities as item}
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.ability.name}</span>
    {/each}
  </div>
</div>