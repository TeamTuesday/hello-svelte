<script>
  let open = false;
  const click = () => (open = !open);

  let value = 0;
</script>

<button on:click={click}>{open ? "close" : "open"}</button>
{#if open}
  <span>OK, I'm here!</span>
{/if}
<br />

<input type="number" bind:value />
{#if value > 6}
  Great
{:else if value > 3}
  Not bad
{:else}
  ...
{/if}
