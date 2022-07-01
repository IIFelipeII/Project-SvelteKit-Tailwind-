<!-- <script>
	import { pokemon } from "../store.js"; 
	console.log($pokemon)
import {onMount} from 'svelte';
let promise = fetchData();
async function fetchData(){
	const response = await fetch ('https://type.fit/api/quotes');
	return await response.json(); 
}
onMount(()=>{
	promise = fetchData();
})
</script>
<h1>Poki</h1>

{#await promise}
	Loading...
{:then result} 
	{JSON.stringify(result)}
{/await} -->
<!-- <h2>{$json}</h2> -->
<!-- 




	
Quote v2 -->
<!-- <script context="module">
	export async function load({ fetch }){
		const res = await  fetch('https://type.fit/api/quotes')
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

	export let guides
	const indx = Math.floor(Math.random()*guides.length);
	const quote=guides[indx].text;
	const auth=guides[indx].author;
	if(auth==null)
	{
		author = "Anonymous";
	}	
</script>
<div>
	<h2>{quote}</h2>
	<p>{auth}</p>
</div> -->