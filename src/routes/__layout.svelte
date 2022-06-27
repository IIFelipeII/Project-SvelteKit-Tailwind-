<script>
	import Nav from '$lib/Navbar.svelte';
	import "../app.css";
</script>
<main>
<slot></slot>
</main>
<!-- <Nav/> -->

<style>
	main {
  margin: 0;
  width: 100%;
	min-height: 100vh;
    color: white;
    padding: .8em;
	 background: rgb(78,55,158);
    background: linear-gradient(167deg, rgba(78,55,158,1) 0%, rgba(136,61,242,1) 29%, rgba(215,98,217,1) 100%);
 	 background-repeat: no-repeat;
	 background-size: cover;
    
  }
</style>