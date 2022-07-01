<script context="module">
	// API quote 
	export async function load({ fetch }){
		const res = await  fetch('src/routes/api/places.json')
		const guides = await res.json()
		if (res.ok){
			return{
				props:{
					guides
				}
			}
		}
		return{
			status: res.status,
			error: new Error('Could not fetch the guies')
		}
	}

	
</script>

<script>
// API quote Start
	export let guides
	
// API quote end
// import Api from '$lib/Pharashe.svelte'
// import Tittle from '$lib/tittle.svelte'
// import Quoteapi  from '$lib/Quoteapi.svelte'
 



</script>

<div class="grid gap-4  grid-cols-2">
	{#each guides as item}
	<div class="card hover:shadow-2xl">
		<a href="" class="">
		<div class="card-img">
			<img src="{item.image}" alt="">
		</div>
		<div class="card-name">
			<h1 class="font-medium text-xl">{item.place}</h1>
			<p class=" mt-1">{item.date}</p>
		</div>
	</a>
	</div>

	{/each}
</div>
<style lang="scss">
	.card{
		padding: 1em;
       width: 100%;
		 min-height: 23em;
		border-radius: 1.5rem;
 		 box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
		 overflow: hidden;
		 position: relative;
	}
	.card-img{
		width: 105%;
		// height: 100%;
		top: 0rem;
		left: 0;
		position: absolute;
		margin: 0;
		padding: 0;
		img{
			top: -2rem;
			// position: absolute;
		}
	
	}
	.card-name{
		z-index: 1;
		background: #EBEDF2;
		position: absolute;
		padding: 1rem;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 35%;
		box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
	}

</style>

<!-- <script>
import {onMount} from 'svelte';
let promise = fetchData();
async function fetchData(){
	
	const response = await fetch ('src/routes/api/places.json');
	return await response.json(); 
}

onMount(()=>{
	promise = fetchData();
});
</script>
<h1>Poki</h1>

{#await promise}
	Loading...
{:then result} 
	{JSON.stringify(result)}
{/await}  -->
<!-- <h2>{$json}</h2> -->
