<script>
	import { invalidateAll } from '$app/navigation';
  import { applyAction } from '$app/forms';

async function handleSubmit(event) {
  const data = new FormData(this);
  const response = await fetch(this.action, {
    method : 'POST',
    body: data
  })
  const result = await response.json();
  console.log(result);
  if(result.type === 'success') {
    await invalidateAll();
  }
  applyAction(result);
}

</script>

<form class="p-16 m-16" action="?/login" 


on:submit|preventDefault={handleSubmit}>
  <!-- content -->
  <input name="email" type="email">
  <input name="password" type="password">
  <button>Log In</button>
</form>