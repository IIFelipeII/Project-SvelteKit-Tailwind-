<script>
	import { getContext } from 'svelte';
	import Popup from './PopUp.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup, { message: "Wait a little more!!" });
 </script>
 
 <p><button on:click={showSurprise}>Know our history <span class="text-sm tracking-widest">2022/12/31 ♡</span>  </button></p>