<script>
	// import Tittle from '../store.js'

	let current = 'foo';
</script>
<svelte:head>
  <title>♡ 12/31/2021 ♡</title>
</svelte:head>

<div class="tittl flex justify-between m-2 mb-12">
	<div>
		<!-- <Tittle></Tittle> -->
		<!-- <h1 class="font-semibold text-6xl mb-2 ">{Tittle}</h1> -->
		
		<a href="/Home"><h1 class=" font-light">12/31/2021 ♡</h1></a>
	</div>
	<ion-icon name="menu"></ion-icon>
 </div>



 <div class="flex justify-center ">
	<div class="fixed bottom-0 m-3   rounded-3xl  drop-shadow-2xl flex justify-between  text-center  navbar w-70">
	  <div class=" drop-shadow-xl navbar-group">
		 <a href="/Music"class="{current === 'radio' ? 'selected' : ''}"
		 on:click="{() => current = 'radio'}"><ion-icon name="radio"></ion-icon></a>
		 <p>Music</p>
	  </div>
	  <div class=" drop-shadow-xl navbar-group ">
		  <a href="/Home" class="{current === 'Home' ? 'selected' : ''}"
		  on:click="{() => current = 'Home'}"><ion-icon name="heart-circle"></ion-icon></a>
		  <p>Home</p>
	  </div>
	  <div class="  drop-shadow-xl navbar-group">
		<a href="/History" class="{current === 'History' ? 'selected' : ''}"
		on:click="{() => current = 'History'}"><ion-icon name="mail"></ion-icon></a>
		<p>History</p>
	 </div>
	</div>
 </div>

 <style>
.navbar{
	/* height: 5rem; */
	color: #231773;
	background-color: #EBEDF2;
	z-index: 2;
	font-size: 2.3rem;
	align-items: center;
	text-align: center;
	margin-bottom: 1.5rem;

}
.navbar ionicon{
	margin: 0;
	padding: 0;
}
.selected {
		color: #6E30F2;
}

.navbar p{
	font-size: .8rem;
	/* position: absolute; */
	/* margin: -1em; */
	/* left: 19px; */
	/* top: 45px; */
	/* right: 0px; */
	/* margin: -1rem; */
	/* margin-left: .2rem; */
	margin-top: -1em;
}
.navbar-group{

	padding: .3em;
	padding-inline: 1em;

	/* margin: 1rem; */


	/* display: flex; */
	/* flex-wrap: nowrap; */
	/* flex-direction: column; */
}
 </style>
