import { useState } from "react";
import { cn } from "@/lib/utils/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();

      // Close panel after success
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full sm:w-[500px] bg-secondary z-50 shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Return
            </Button>
          </div>

          {/* Contact Information */}
          <div className="p-6 border-b border-muted">
            <h2 className="text-lg font-bold text-muted-foreground mb-4 uppercase tracking-wide">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:hello@portfolio.com"
                className="flex items-center text-xl text-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-3" />
                hello@portfolio.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-xl text-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-3" />
                (+1) 234 567 890
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 p-6 overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Your email"
                  className={cn(
                    "w-full h-12 text-lg border-primary/20 focus:border-primary rounded-lg",
                    errors.email && "border-destructive",
                  )}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Your full name"
                  className={cn(
                    "w-full h-12 text-lg border-primary/20 focus:border-primary rounded-lg",
                    errors.name && "border-destructive",
                  )}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  placeholder="How can I help you?"
                  rows={4}
                  className={cn(
                    "w-full text-lg border-primary/20 focus:border-primary rounded-lg resize-y min-h-[100px]",
                    errors.message && "border-destructive",
                  )}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-success text-sm">
                  Message sent successfully! Thank you for reaching out.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-destructive text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
