<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";

  let count = 0;

  // DOM에 마운트되면 호출
  onMount(() => {
    console.log("onMount - count:", count);
    return () => {
      console.log("onUnmount - count:", count);
    };
  });

  // 상태가 업데이트 되면, 컴포넌트가 업데이트 되기 전 호출
  beforeUpdate(() => {
    console.log("beforeUpdate - count:", count);
  });

  // 컴포넌트가 업데이트 된 후 호출
  afterUpdate(() => {
    console.log("afterUpdate - count:", count);
  });

  // Unmount 전 호출
  onDestroy(() => {
    console.log("onDestroy - count:", count);
  });
</script>

<button on:click={() => count++}>{count}</button>
