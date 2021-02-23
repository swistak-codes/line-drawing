import App from './components/App.svelte';
import * as algorithms from './algorithms';
import type { IAlgorithm } from './types';

const params = new URLSearchParams(window.location.search);

function getAlgorithm(): IAlgorithm {
    const algorithm = params.get('algorithm') || 'naive';
    return algorithms[algorithm];
}

const app = new App({
    target: document.body,
    props: {
        algorithm: getAlgorithm(),
    },
});

export default app;
