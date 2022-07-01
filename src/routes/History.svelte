<script>
	import Nav from '$lib/Navbar.svelte'
	let Tittle = 'History' 
	import Countup from '$lib/countup.svelte'
</script>
<h1 class="font-semibold text-6xl mb-2 ">{Tittle}</h1>
<Nav></Nav>


<div class="card h-26 my-5 text-xl">
	<h2 class="font-light text-2xl mb-1">We have been dating for</h2>
	<span><Countup></Countup> </span>Days!
</div>
<a href="/iframeMiro">
<div class="card h-80 mt-10">
	<div class="card-img">
		<img src="https://i.ibb.co/Wkgc0yM/IMG-20220618-WA0017.jpg" alt="">
	</div>
	<div class="card-name">
		<h1 class="font-medium text-2xl">Board</h1>
		<p class="text-1xl mt-1">This is our Board of Miro</p>
	</div>
</div>
</a>
<style>
.card{
	padding: 1em;
	 width: 100%;
	border-radius: 1.5rem;
	  box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
	 overflow: hidden;
	 position: relative;
}
.card span{

}
.card-img{
		width: 100%;
		top: -19rem;
		left: 0;
		position: absolute;
		margin: 0;
		padding: 0;

	}
	.card-img img{
		width: 100%;
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