<script>
  const items = [
    { id: "n", name: "Naver" },
    { id: "l", name: "Line" },
    { id: "t", name: "Toss" },
    { id: "a", name: "AFS" },
  ];
</script>

<ul>
  <!-- {#each items as item} -->
  <!-- {#each items as item (item.id)} -->
  {#each items as item, index (item.id)}
    <li>{index}: {item.name}({item.id})</li>
  {/each}
</ul>
