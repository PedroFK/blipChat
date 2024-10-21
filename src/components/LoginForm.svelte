<script lang="ts">
  import { onMount } from 'svelte';
  import { authService } from '$lib/authService';
  let apiKey = '';
  let error = '';

  const handleLogin = async () => {
    try {
      await authService.login(apiKey);
      window.location.href = '/';
    } catch (err) {
      error = 'Chave API inválida';
    }
  };
</script>

<form on:submit|preventDefault={handleLogin} class="space-y-4">
  <div>
    <label class="block text-sm font-medium">Chave API:</label>
    <input type="text" bind:value={apiKey} required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"/>
  </div>
  <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Login</button>
  {#if error}
    <p class="text-red-600">{error}</p>
  {/if}
</form>

