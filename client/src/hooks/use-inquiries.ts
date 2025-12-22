import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.create.input.parse(data);
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to send inquiry');
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "We have received your message and will get back to you shortly.",
        variant: "default", 
      });
    },
    onError: (error) => {
      toast({
        title: "Error Sending Inquiry",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });
}
