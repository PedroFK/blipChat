import { z } from 'zod';

const ContactSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Contact = z.infer<typeof ContactSchema>;

export const contactService = {
  getContacts: async (page: number, limit: number) => {
    const apiKey = localStorage.getItem('apiKey');
    const response = await fetch(`https://YOUR_BLIP_API_URL/contacts?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    const data = await response.json();
    return data.contacts.map((contact: any) => ContactSchema.parse(contact));
  },
};
