<script>
	export let data;
</script>


<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={data.user.avatar_url}  alt={data.user.id}>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.user.name}</div>
    <p class=" text-base text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.user.location}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.user.company}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.user.name}</span>
  </div>
</div>