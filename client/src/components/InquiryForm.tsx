import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

export function InquiryForm() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-secondary font-display mb-2">Request a Quote</h3>
        <p className="text-muted-foreground mb-6">Fill out the form below and our team will get back to you within 24 hours.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@company.com" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Product Inquiry / Quote Request" {...field} className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-all resize-y" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Inquiry <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
