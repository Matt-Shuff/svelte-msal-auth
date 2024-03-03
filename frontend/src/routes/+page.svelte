<script>
    import { signIn, msal_obj, selectAccount } from "$lib/redirect";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        if (msal_obj.getActiveAccount() != null) {
            goto("/content");
        }
    });
</script>

<button on:click={signIn} class="text-3xl">Sign In</button>

<button onclick=" localStorage.clear(); location.reload(); console.log('clear clicked')">Clear Local Storage</button>