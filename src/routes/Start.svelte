<script>
	import Countdown from "$lib/Coun.svelte";
	import Content  from "$lib/ContentPopUp.svelte";
	import Modal from 'svelte-simple-modal';
</script>


<section class="">
	<div class="img-start w-full">
		<img src="src/media/unnamed.jpg" alt="">
	</div>

<h1 class="text-5xl text-center py-10 font-semibold">Our Website is Coming Soon!</h1>

<div class="my-10">
	<p class="text-center">
		Soon we will celebrate our first six months of dating.
	</p>
<Countdown from="2022-06-31 22:30:00" dateFormat="YYYY-MM-DD H:m:s" zone="America/Bogota" let:remaining>
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
		 <h2>The time has come!</h2>
		 {/if}
	</div>
</Countdown>	
</div>


 

<div class="center">
	<div class="button hover:bg-violet-600   ">
		<!-- <Modal><Content /></Modal> -->
		<a href="/Home">Know our history <span class="text-sm tracking-widest">2022/12/31 ♡</span>  </a>

	</div>
</div>


</section>

<style>

	.button{
		font-size: 1.1rem;
		margin: 1rem;
		/* position: fixed; */
		/* bottom: 0; */
		padding: 1rem;
		background-color: #282140;
		border-radius: 2rem;
		text-align: center;
		width: 45%;
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