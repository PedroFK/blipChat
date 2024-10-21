<script lang="ts">
  export let params: { id: string };
  import Conversation from '$components/Conversation.svelte';
</script>

<main>
  <h1>Conversas com {params.id}</h1>
  <Conversation {id} />
</main>
