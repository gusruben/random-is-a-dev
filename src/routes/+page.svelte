<script lang="ts">
	import '@fontsource/pixelify-sans';
	import '@fontsource/space-mono';

	let rolling = false;

	function rollDie() {
		if (rolling) return;
		rolling = true;
		setTimeout(() => (rolling = false), 2000);
	}
</script>

<div
	class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
            flex-col items-center gap-10 text-background-300"
>
	<p class="mx-0 whitespace-nowrap text-9xl"><span class="text-primary">random</span>.is-a.dev</p>
	<a href="/go" class="bg-primary px-4 py-3 font-mono text-3xl text-white"
		>Explore a random developer's site</a
	>
</div>

<p class="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-lg text-background-300">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	Built with
	<span class={'die' + (rolling ? ' rolling' : '')} on:click={rollDie}><span>🎲</span></span>
	by
	<a href="https://github.com/gusruben" class="text-primary underline">gus</a>
</p>

<style>
	:global(body) {
		background-color: #18181b;
	}

	.die {
		cursor: pointer;
	}
	.die > span {
		cursor: pointer;
		display: inline-block;
		transition: transform 0.1s ease-out;
	}
	.die:hover > span {
		cursor: pointer;
		transform: translateY(-0.1rem) rotate(15deg);
	}
	.die.rolling > span {
		animation: die-roll-height 2s;
	}

	@keyframes die-roll-height {
		0% {
			transform: translateY(0rem) rotate(0deg);
		}
		4% {
			transform: translateY(-1.26rem) rotate(15deg);
		}
		7% {
			transform: translateY(-1.64rem) rotate(30deg);
		}
		11% {
			transform: translateY(-1.72rem) rotate(40deg);
		}
		15% {
			transform: translateY(-1.68rem) rotate(60deg);
		}
		17% {
			transform: translateY(-1.44rem) rotate(75deg);
		}
		19% {
			transform: translateY(-1.02rem) rotate(80deg);
		}
		22% {
			transform: translateY(-0.02rem) rotate(60deg);
		}
		25% {
			transform: translateY(-0.92rem) rotate(30deg);
		}
		28% {
			transform: translateY(-1.28rem) rotate(15deg);
		}
		33% {
			transform: translateY(-1.38rem) rotate(0deg);
		}
		38% {
			transform: translateY(-1.26rem) rotate(-15deg);
		}
		41% {
			transform: translateY(-0.96rem) rotate(-30deg);
		}
		44% {
			transform: translateY(0rem) rotate(-80deg);
		}
		47% {
			transform: translateY(-0.46rem) rotate(-60deg);
		}
		50% {
			transform: translateY(-0.68rem) rotate(-30deg);
		}
		55% {
			transform: translateY(-0.8rem) rotate(-15deg);
		}
		60% {
			transform: translateY(-0.68rem) rotate(0deg);
		}
		64% {
			transform: translateY(-0.42rem) rotate(15deg);
		}
		67% {
			transform: translateY(-0.02rem) rotate(30deg);
		}
		69% {
			transform: translateY(-0.16rem) rotate(40deg);
		}
		72% {
			transform: translateY(-0.2rem) rotate(30deg);
		}
		76% {
			transform: translateY(-0.22rem) rotate(15deg);
		}
		80% {
			transform: translateY(-0.2rem) rotate(0deg);
		}
		84% {
			transform: translateY(-0.2rem) rotate(-15deg);
		}
		86% {
			transform: translateY(0rem) rotate(0deg);
		}
		89% {
			transform: translateY(-0.08rem) rotate(5deg);
		}
		93% {
			transform: translateY(-0.14rem) rotate(-5deg);
		}
		97% {
			transform: translateY(-0.1rem) rotate(0deg);
		}
		100% {
			transform: translateY(0rem) rotate(0deg);
		}
	}
</style>
