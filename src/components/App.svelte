<script lang="ts">
	import Screen from './Screen.svelte';
	import Controls from './Controls.svelte';
</script>

<main>
	<div class="screen">
		<Screen />
	</div>
	<Controls />
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

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
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