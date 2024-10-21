<script lang="ts">
  import { onMount } from 'svelte';
  import { contactService } from '$lib/contactService';
  import type { Contact } from '$lib/contactService';

  let contacts: Contact[] = [];
  let currentPage = 1;
  const contactsPerPage = 10;

  onMount(async () => {
    contacts = await contactService.getContacts(currentPage, contactsPerPage);
  });

  const handleClick = (id: string) => {
    window.location.href = `/contato/${id}`;
  };
</script>

<ul>
  {#each contacts as contact}
    <li on:click={() => handleClick(contact.id)}>{contact.name}</li>
  {/each}
</ul>
