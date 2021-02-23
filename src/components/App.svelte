<script lang="ts">
    import { tick } from 'svelte';
    import Screen from './Screen.svelte';
    import Controls from './Controls.svelte';
    import Console from './Console.svelte';
    import type { IAlgorithm } from '../types';
    import { frameBuffer, linePoints } from '../store';

    export let algorithm: IAlgorithm;

    linePoints.subscribe(async (value) => {
        if (algorithm && value.length === 2) {
            await tick();
            $frameBuffer = algorithm.draw($linePoints[0], $linePoints[1]);
        }
    });
</script>

<main>
    <h1>{algorithm.name}</h1>
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
        padding: 0 0.6em;
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
