<script>
	import Countdown from "$lib/Coun.svelte";
	import Content  from "$lib/ContentPopUp.svelte";
	import Modal from 'svelte-simple-modal';
	// import imghead from 'media/unnamed.jpg';

</script>


<section class="">
	<div class="img-start w-full">
		<img src="https://i.ibb.co/jw5KmH7/unnamed.jpg" alt="">
		<!-- <img src="src/media/unnamed.jpg" alt=""> -->
		<!-- <img src={imghead} alt="SvelteKit" /> -->
		
	</div>

<h1 class="text-5xl text-center py-10 font-semibold animate-pulse ">Our Website is Coming Soon!</h1>

<div class="my-10">
	<p class="text-center">
		Soon we will celebrate our first six months of dating.
	</p>

	<Countdown from="2022-06-31 04:30:00" dateFormat="YYYY-MM-DD H:m:s" zone="America/Bogota" let:remaining>
	<div class="counter">
		 {#if remaining.done === false}
		 <!-- <span>{remaining.months} months</span> -->
		 <div class="counter-box">
			<span>{remaining.days} </span>
			<p>days</p>
		</div>
		<p class="quote">:</p>
		<div class="counter-box">
			<span>{remaining.hours} </span>
			<p>hours</p>
		</div>
		<p class="quote">:</p>
		 <div class="counter-box">
			 <span>{remaining.minutes} </span>
			 <p>minutes</p>
		</div>
		<p class="quote">:</p>
		 <div class="counter-box">
			 <span>{remaining.seconds} </span>
			 <p>seconds</p>
		</div>
		
		 {:else}
		 <div class="center  anim">
			<div class="button hover:bg-violet-600   ">				
				<a href="/Welcome">💗Click hereee!💗 <span class="text-sm tracking-widest"></span>  </a>
			</div>
		</div>
		 {/if}
		 <div class="block"><p>a</p></div>
	</div>

</Countdown>	

</div>




<div class="center  " id="scroll">
	<div class="button hover:bg-violet-600  ">
		<Modal><Content /></Modal>
		<!-- <a href="/Home">Know our history <span class="text-sm tracking-widest">2022/12/31 ♡</span>  </a> -->
	</div>
</div>



</section>

<style>
	section{
			/* background: rgb(78,55,158);
    background: linear-gradient(167deg, rgba(78,55,158,1) 0%, rgba(136,61,242,1) 29%, rgba(215,98,217,1) 100%);
	 padding: 0;
	 margin: 0; */

	}
	.block{
		width: 100%;
		position: absolute;
		z-index: -1;
		height:20rem ;
		background-color: #282140;
	}
.anim{
	animation: fadein 50s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
	.button{
		color: whitesmoke;
		font-size: 1.1rem;
		margin: 1rem;
		/* position: fixed; */
		/* bottom: 0; */
		padding: 1rem;
		background-color: #282140;
		border-radius: 2rem;
		text-align: center;
		width: 75%;
		cursor: pointer;
	}
	.center{
		
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.counter{
	
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

	}
	.counter-box{
		padding: .7rem;
		border-radius: 1rem ;
	
	}
	.counter-box span{
		font-size: 2.9rem;
		font-weight: 800;
		text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.678);
	}
	.counter-box p{
		font-size: .8rem;
		font-weight: 500;
		letter-spacing:2.6px;
		text-transform: uppercase;
	}
	.quote{
		margin-top: -1.4rem;
		font-size: 2.4rem;
	}
	

.img-start img{
	margin-top: 2rem;
	object-fit: cover;
	width: 100%;
	border-radius: 1.5rem;
	box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.226);
	filter: grayscale(100%);

}
.img-start {
	height: 100%;
	border-radius: 1.5rem;
}
</style>