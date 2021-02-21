<script lang="ts">
	import Screen from './Screen.svelte';
	import Controls from './Controls.svelte';
	import Console from './Console.svelte';
</script>

<main>
	<h1>Algorytm blabla</h1>
	<div class="screen">
		<Screen />
	</div>
	<Controls />
	<Console />
</main>

<style>
	:root {
		--border: 1px solid black;
		--animation: all 500ms ease-in-out;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.screen {
		margin: 0 auto;
		width: 600px;
		height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>