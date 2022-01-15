<script>
  import MyComponent from "./components/MyComponent.svelte";
  import Counter from "./components/Counter.svelte";
  import InputForm from "./components/InputForm.svelte";
  import Module, { capitalize } from "./components/Module.svelte";
  import IfElse from "./components/IfElse.svelte";
  import Each from "./components/Each.svelte";

  let name = "name";
  const onNameChange = (e) => {
    name = e.detail;
  };
</script>

<h1>Hello Svelte</h1>
<hr />

<!-- Component -->
<MyComponent />
<hr />

<!-- Reactivity Variables(local state) -->
<Counter />
<hr />

<!-- Reactivity Properties(props) -->
name: {name}
<InputForm {name} on:change={onNameChange} />
<!-- <InputForm name={name} on:change={onNameChange} /> -->
<hr />

<!-- Module -->
<Module />
name: {capitalize(name)}
<hr />

<!-- If, Else -->
<IfElse />
<hr />

<!-- Each -->
<Each />
<hr />
