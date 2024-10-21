<script lang="ts">
  import { onMount } from 'svelte';
  import { conversationService } from '$lib/conversationService';
  import type { Message } from '$lib/conversationService';

  export let id: string;
  let messages: Message[] = [];

  onMount(async () => {
    messages = await conversationService.getConversation(id);
  });
</script>

<div>
  {#each messages as message}
    <p>{message.sender}: {message.text}</p>
  {/each}
</div>
