import { z } from 'zod';

const MessageSchema = z.object({
  sender: z.string(),
  text: z.string(),
});

export type Message = z.infer<typeof MessageSchema>;

export const conversationService = {
  getConversation: async (contactId: string) => {
    const apiKey = localStorage.getItem('apiKey');
    const response = await fetch(`https://YOUR_BLIP_API_URL/conversations/${contactId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    const data = await response.json();
    return data.messages.map((message: any) => MessageSchema.parse(message));
  },
};
