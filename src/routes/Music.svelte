<script>
	import Nav from "$lib/Navbar.svelte";
	let Tittle = 'Music' 
	import IframeSpotify from "./iframeSpotify.svelte";
</script>
<h1 class="font-semibold text-6xl mb-2 ">{Tittle}</h1>
<Nav></Nav>
<section class="mid">

<a href="/iframeSpotify">
<div class="card">
	<div class="card-img">
		<img class="" src="https://www.linkpicture.com/q/LPic62be2d99e95c6913093657.jpg" alt="">
	</div>
	<div class="card-name">
		<h1 class="font-medium text-2xl">Spotify Playlist</h1>
		<p class="text-1xl mt-1">This is our Playlist of Spotify,and all the songs, they sound like love </p>
	</div>
</div>
</a>

</section>
<!-- <div class="card mt-8 mb-4">
	<div class="card-img">
		<img src="" alt="">
	</div>
	<div class="card-name">
		<h1>Part</h1>
	</div>
</div> -->



<style lang="scss">
	.mid{
		/* top: 15vh;
		position: relative; */

	}
	.card{
		padding: 1em;
       width: 100%;
		 min-height: 20rem;
		border-radius: 1.5rem;
 		 box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
		 overflow: hidden;
		 position: relative;
	}
	.card-img{
		width: 100%;
		top: -19rem;
		left: 0;
		position: absolute;
		margin: 0;
		padding: 0;
		img{
				top: 17rem;
				position: absolute;
				width: 100%;
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