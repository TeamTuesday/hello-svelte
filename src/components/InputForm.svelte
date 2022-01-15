<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name = 0;
  const onChange = (e) => dispatch("change", e.target.value);
</script>

<div>
  <input bind:value={name} on:input={onChange} />
</div>
