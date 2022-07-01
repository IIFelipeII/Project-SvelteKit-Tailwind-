<script context="module">
	// API quote 
	export async function load({ fetch }){
		const res = await  fetch('https://raw.githubusercontent.com/IIFelipeII/Project-SvelteKit-Tailwind-/main/src/routes/api/places.json')
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
import Nav from '$lib/Navbar.svelte'


let Tittle = 'Home' 
let searchTerm = "";


</script>


<h1 class="font-semibold text-6xl mb-2 ">{Tittle}</h1>
<section class="mb-20">

	<Nav></Nav>
	

	<div class="card_quote mt-5">
		<div class="p-3">
			<h2 class="text-2xl">Loved you yesterday, love you still, always have, always will.</h2>
			<p class="text-lg mt-2">– Elaine Davis</p>
		</div>
	</div>

	<input class="w-full  search  text-lg p-4 my-4" bind:value={searchTerm} placeholder="Search place">
 
<div class="grid gap-4  grid-cols-2">
	{#each guides as item}
	<div class="card hover:shadow-2xl">
		<a href="{item.link}" class="">
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
</section>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600;800;900&family=Shadows+Into+Light+Two&display=swap');
.card_quote {
	padding: 1em;
       width: 100%;
		 min-height: 10em;
		border-radius: 1.5rem;
 		 box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
		 overflow: hidden;
		 position: relative;
		 h2{
			font-family: 'Shadows Into Light Two';
		 }
}
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
			width: 100%;
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

.search{
	background-color: #EBEDF2;	border-radius: 1.5rem;
	box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
}
 </style>