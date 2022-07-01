<!-- <script lang="ts">
	import { onMount } from "svelte";
	let promise: Promise<any>;

	onMount(async() =>{
		// const response = await  fetch ("https://pokeapi.co/api/v2/pokemon")
		const response = await  fetch ("https://jsonplaceholder.typicode.com/users/")

		promise = response.json();
	});

</script>


{#await promise}
	<div>Waiting...</div>
{:then results}
	{#if results !== undefined}
		{#each results.results as item }
			<h3>Name: {item.name}</h3>
		{/each}
		<div>{JSON.stringify}(results, null, 2)</div>
	{/if}
{:catch error}
	<div>error</div>
{/await} -->