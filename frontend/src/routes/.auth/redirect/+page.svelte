<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        goto('/content');
    });
</script>

<p>Redirecting...</p>
