<script>
  let count1 = 0;
  let count2 = 0;
  const increase1 = () => count1++;
  const increase2 = () => count2++;

  $: sum = count1 + count2;
</script>

<div>
  {count1} + {count2} = {sum}<br />
  <button on:click={increase1}>increase1</button>
  <button on:click={increase2}>increase2</button>
</div>
