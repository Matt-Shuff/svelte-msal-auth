<script>
    import { msal_obj } from "$lib/redirect";
    import { onMount } from "svelte";
    import { fetch_with_auth } from "$lib/fetch"

    async function get_random_int(){
        const response = await fetch_with_auth("http://localhost:5000");
        const text = await response.text();


        document.getElementById("random_int").innerText = text;
    }

    onMount(() => { });
</script>

<h1 class="text-3xl">my really cool website</h1>

<p id="greeting" class="text-xl"></p>

<div>

    <button onclick="localStorage.clear(); location.reload(); console.log('clear clicked')">Clear Local Storage</button>
</div>

<div>
    <button on:click={get_random_int}>Get Random</button>
    <p id="random_int"></p>
</div>
