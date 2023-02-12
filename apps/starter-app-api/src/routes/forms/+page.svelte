<script lang="ts">
  import type { ActionData } from './$types';
  import { enhance } from '$app/forms';
  export let form: ActionData;
 
  $: console.log(form);
</script>

<form use:enhance>
  <input type="text" name="name" placeholder="Name" aria-label="Name" required />
  <select name="role" aria-label="Role" required>
    <option value="frontend-engineer">Frontend Engineer</option>
    <option value="backend-engineer">Backend Engineer</option>
    <option value="fullstack-engineer">Fullstack Engineer</option>
    <option value="architect">Architect</option>
  </select>
  <input type="email" name="email" placeholder="Email" required />
 
  <button type="submit">Submit</button>
</form>