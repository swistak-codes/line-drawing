<script lang="ts">
    import { frameBuffer, zoom, isBordered, isEditable, linePoints } from '../store';

    function handleClick(x, y) {
        if (!$isEditable) {
            return;
        }
        $linePoints = [...$linePoints, [x, y]];
        $frameBuffer[x][y] = 'red';
    }
</script>

<div class="grid">
    {#each $frameBuffer as columns, x}
        <div class="column"
             class:column--bordered={$isBordered}
             class:column--no-borders-inside={!$isBordered}
        >
            {#each columns as cell, y}
                <div style="width: {$zoom}px; height: {$zoom}px; background: {cell};"
                     class="cell"
                     class:cell--bordered={$isBordered}
                     class:cell--clickable={$isEditable}
                     on:click={() => handleClick(x, y)}
                     role="button"
                ></div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .grid {
        display: flex;
    }

    .column {
        display: flex;
        flex-direction: column;
        transition: var(--animation);
    }

    .column--bordered {
        border-top: var(--border);
        border-left: var(--border);
    }

    .column--bordered:last-of-type {
        border-right: var(--border);
    }

    .column--no-borders-inside {
        border-top: var(--border);
        border-bottom: var(--border);
    }

    .column--no-borders-inside:first-of-type {
        border-left: var(--border);
    }

    .column--no-borders-inside:last-of-type {
        border-right: var(--border);
    }

    .cell {
        transition: var(--animation);
    }

    .cell--bordered {
        border-bottom: var(--border);
    }

    .cell--clickable {
        cursor: pointer;
    }

    .cell--clickable:hover {
        background: dodgerblue !important;
    }
</style>