<script lang="ts">
    import { frameBuffer, linePoints, zoom, canHaveBorder, userWantsBordered } from '../store';
    import { clearBuffer } from '../helpers/clearBuffer';
    import { MIN_ZOOM, MAX_ZOOM } from '../consts';

    function handleClear() {
        $linePoints = [];
        $frameBuffer = clearBuffer();
    }
</script>

<div class="container">
    <div class="item">
        <button type="button" on:click={handleClear}>Wyczyść</button>
    </div>
    <div class="item">
        <label for="zoom">Powiększenie:</label>
        <input type="range" min={MIN_ZOOM} max={MAX_ZOOM} bind:value={$zoom} class="slider" id="zoom" />
    </div>
    <div class="item">
        <label for="border">Pokaż siatkę</label>
        <input type="checkbox" id="border" disabled={!$canHaveBorder} bind:checked={$userWantsBordered} />
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        flex-direction: column;
        margin: 0 8px;
    }

    .item > label {
        display: block;
    }

    .item > input {
        display: block;
        cursor: pointer;
    }

    button {
        background: #ff3e00;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 2px;
        cursor: pointer;
    }
</style>