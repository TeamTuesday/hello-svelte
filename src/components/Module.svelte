<script context="module">
  export const capitalize = (str) => {
    return str.replace(/^[a-z]/, (c) => c.toUpperCase());
  };
</script>

<script>
  const msg = "hello";
</script>

<h1>message: {capitalize(msg)}!</h1>

<style>
  h1 {
    color: red;
  }
</style>
