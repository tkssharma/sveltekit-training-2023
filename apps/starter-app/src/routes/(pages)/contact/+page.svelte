<script>
	import { enhance } from '$app/forms';
  import { applyAction } from '$app/forms';

export let form;
export let data;
</script>


<form method="POST" action="?/login" 
use:enhance = {(form, data, cancel) => {

   // `form` is the `<form>` element
    // `data` is its `FormData` object response from action
    // `cancel()` will prevent the submission

  return async ({result}) => {
    // action result response 
    if(result.type === 'error') {
      await applyAction(result);
    }
  }
}}>
  <input name="email" type="email">
  <input name="password" type="password">
  <button>Log In</button>
</form>

update the form property and invalidate all data on a successful response.
update the form property on a invalid response.
update $page.status on a successful or invalid response.
