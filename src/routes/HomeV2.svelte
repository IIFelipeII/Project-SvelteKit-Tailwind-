<script context="module">
	// API quote 
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
// API quote Start
	export let guides
	const indx = Math.floor(Math.random()*guides.length);
	const quote=guides[indx].text;
	const auth=guides[indx].author;
	if(auth==null)
	{
		author = "Anonymous";
	}	
// API quote end
import Nav from '$lib/Navbar.svelte'
// import Tittle from '$lib/tittle.svelte'
import Quoteapi  from '$lib/Quoteapi.svelte'

let Tittle = 'Home' 
let searchTerm = "";

import Places from './places.svelte';

</script>


<h1 class="font-semibold text-6xl mb-2 ">{Tittle}</h1>
<section class="">
<!-- <Api></Api> -->
	<Nav></Nav>
	<div class="card h-60 mt-5">
		<div class="p-3">
			<h2 class="text-2xl">{quote}</h2>
			<p class="text-lg mt-2">{auth}</p>
		</div>
	</div>

	<!-- <div class="card h-20 my-4">
		<span>1 a2 days</span>
	</div> -->
	<input class="w-full  search  text-lg p-4 my-4" bind:value={searchTerm} placeholder="Search place">
 <div class="parent">
	<div class="div1"></div>
	<div class="div2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADXCAMAAADMbFYxAAAAilBMVEX/AAD/////u7v/o6P/t7f/p6f/wsL/v7//s7P/sLD/8fH/n5//oaH/2dn/1NT/39//qqr/VFT/ZWX/y8v/LS3/mZn/xsb/5+f/goL/h4f/QUH/+Pj/T0//bGz/Jib/7+//e3v/j4//Xl7/OTn/k5P/amr/dHT/Ghr/R0f/ISH/ERH/Njb/UFD/X18FaMQxAAAGsklEQVR4nO3diWKqOhAG4OBSW1qkanuoWrtabe257/96F3FDSEKWmUmI53+AZj5FCiFkWGSV+WuWDCeTyTDNYru/JEycpcUISfY6t/tLzLSCSf9p9MLOM1ssO6ldPaWkneViVhnhZfR0PzH9VE2sSXfMJJlNB7bfcXw1rSrL2Xz1E4O/qmuNe1LnIb/LoUExuyTLT5Uhvnq6h7SWdX79rFLFPlOTzz6ZbtRHGF1rcTWsw4UGtMhLV++jn3cfdIdYaBw/ytYb7TKKrNTPVenKaISHG2DrrVEZRUZqn3wyMh/iFtB6Z17GNs/N3236126IOyBrz66Mbcav0hHiL/shOgDWVPaPTj1LyRCPICPMGo+eJusUpI48a9HPdvgDNcTUypqsoerI88Yd4glwhI38NCi1vgPWkWddP8pSsC91l3dDawzzSy2nWxmiDz7CTHIpLrYOwevIMz4bAuD0W89E33qPUUd+2Xj63GOzK7HG9HWtkKeM8xx+tCnaCPyToNCqdONmmN1BNkEc4UPHqnPrpp9BPsIV6gjf6tZv1EIY60Ud5BE+Va3Y1PwKB30EHpZjtbi58iicw7hu1Z598DTjZivwdaHD1G4FqlaAm1VvUp2cqVjx/sG7SCKzzl1XB5y5xBrGKfiUv2Ir/C2W69yJrJnryhCSCaxKj1Fall++teu6LpTc8qyx66qQEnOs/7kuCikfdSvK9JIXGdasIZ6YdvmtWnHnCdxmULEizel5kZdza8hf6/GLZaH/Wrf5LFvDPQnvMixZMaeDfcj4ZA31kumU+Gi1WPnRktwerdV1heHl5WBNXFdCkGRvDWeaVJz3vRVyUYSvWe+sYc2TipIW1jDnI6q5K6yhTZTyMyqsrqsgytYa+rXwIcPcGt4EOD/d3BrK89amLHJr+BeIu/zkVtc1kCViIT7E4Sdlf1yXQJY/DGndoYfps6XrEsjyzsxeimljVizUR1b1fDD8BXm+ZMZCfrhxnh92CZMSu2yYxiuY//IvXuaSjmHgF588zpr9ui6BLA/sMmYRt3lmKO95eZkxw3vByre8sfCfvR7yyEJa4C/PNbuUqXDGJuzVdQlkyS5qzpTg7Tk/Msut+O/x+ZGn3Ir9eqYv6eXWSzk5ZdtnzRcyC1M8V39zXQVJVoV14LoMknQKa2gvDPIz363luoRb2O/9urUb14UQpL+3XsJBHB/W1Ib//Gp0XD8c/rP1wWm9v+tS0FN6twFmdzd/816yhn52isvvIr25rgY1i7P3rsJe5ZSdvzsY8hKRw84wB2vId7FZxYq4wZrrrKKqNdxT8bxmDXbN9GnThdL+EmGu/llHPGuY7+kMudYgZ4rL+0Ke7fMT3nL4TSSyhncUJ0JrcOfix0hsDezF9VEkswb1k91EcmtI18VZgzWgF7prG0zX9/gMZbuUXk3G2bs1jKnx6jbsfGsQ/3keOS7uXsvtx/Kogj20276YjUsV7Y3ebiyfKtzzvs1YAVXcy6C9WBFV0qPCshmSswipst4j7cSKqdKeMm3Eytp8SfvntA8r7Wgm74vUtq1i5M3bGvpdtQvb0KeuqbdXm7BNLfkae7a1B9vYfbC5F19bsM2NFhX6DrYDq9BTUqWfZBuwKg0llXpn+n8/C9U7swVYJapq/1e/sWpU5b6+PmM502hWVo+xqlSN3tS+YpWpOn24/cSqU7X6q/uI1aDq9ZL3b18rHaqe1TussCUogNUzrB5V1+oVVpOqbfUIq0vVt3qD1aYaWD3B6lNNrF5gDahGVg+wJlQzq/NlBkZUQ6tj7L1Z0YZWp1hDqrHVIdaUam51hjWmWlgdYc2pNlYnWAuqldUB1oZqZyXHWlEtrcRYO6qtlRRb7SFObY2uW0O1t5JhrakAViKsPRXCSoIFoIJYCbAQVBgrOhaECmRFxsJQoawR5lahQFQwKyIWigpnRcOCUQGtSNhruAIBrShYQCqoFQELSYW1gmNBqcBWYCwsFdoKigWmglsBsdBUeCvYHr/191dtA28FwsJTMawgWAQqihUAi0HFsVpjUahIVkssDhXLaoVFoqJZLbBYVDyrMRaNimg13Iccj4ppNcJ2EOvBtBpgMam4Vm0sKhXZqonFpWJbtbDIVHSrBhabim9VxqJTCayKWHwqhVUJS0AlsSpsazagKIPE2ogloRJZG7A0VCqrFEtEJbNKsFRUOqsQS0YltAqwdFRKKxdLSCW1cvr0UFJprTXsFenotNYKlpZKbT3DElPJrSUsNZXeesSSUx1Y91h6qgtrgXVAdWLNsS6obqxR7GTU/wGB/GVExPkTjwAAAABJRU5ErkJggg==" alt="" srcset=""></div>
	<div class="div3"> </div>
	<div class="div4"> </div>
	<div class="div5"> </div>
	<div class="div6"> </div>
	<div class="div7"> </div>
	<div class="div8"> </div>
	<div class="div9"> </div>
	<div class="div10"> </div>
	<div class="div11"> </div>
	</div>  </section>
 <style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600;800;900&family=Shadows+Into+Light+Two&display=swap');

	.card h2{
		font-family: 'Shadows Into Light Two', cursive;

	}
	.parent {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 1.2em;

}
.parent>*{
  border-radius: 1.5rem;
  box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
  /* background-color: rgba(48, 48, 48, 0.849); */


}
.parent img{
  border-radius: 1.5rem;
  width: 100%;
}
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 3 / 1 / 4 / 2; }
.div4 { grid-area: 2 / 2 / 4 / 3; }
.div5 { grid-area: 4 / 1 / 5 / 2; }
.div6 { grid-area: 4 / 2 / 5 / 3; }
.div7 { grid-area: 5 / 1 / 6 / 2; }
.div8 { grid-area: 5 / 2 / 6 / 3; }
.div9 { grid-area: 6 / 1 / 7 / 2; }
.div10 { grid-area: 6 / 2 / 7 / 3; }
/* .div11 { grid-area: 7 / 1 / 8 / 3; } */
.card{
	padding: 1em;
	 width: 100%;
	border-radius: 1.5rem;
	  box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
	 overflow: hidden;
	 position: relative;
}

.search{
	background-color: #EBEDF2;	border-radius: 1.5rem;
	box-shadow: 0px 0px 28px rgba(213, 210, 214, 0.753);
}
 </style>