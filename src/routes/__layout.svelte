<script>
	import Nav from '$lib/Navbar.svelte';
	import "../app.css";
</script>
<body>
<main >
<slot></slot>
</main>
</body>
<!-- <Nav/> -->

<style>
  html{
    scroll-behavior: smooth;
  }
	body{
	background: #EBEDF2;
    color: #242526;
	/* background: rgb(78,55,158); */
    /* background: linear-gradient(167deg, rgba(78,55,158,1) 0%, rgba(136,61,242,1) 29%, rgba(215,98,217,1) 100%); */
 	 background-repeat: no-repeat;
	 background-size: cover;
	}
	main {
  width: 100%;
  min-height: 100vh;
  /* color: white; */
  padding: 1.5em; 
  }
  @media (min-width: 768px) { 
    main{
      margin: 0 auto;
      width: 50%;
    }
  }
</style>