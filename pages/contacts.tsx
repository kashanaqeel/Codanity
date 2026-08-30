import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Phone, Mail, MapPin, Loader, Globe } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendContactForm } from "@/lib/api";
import { motion } from "framer-motion";
import { Button, PageHero, Section } from "@/components";
import { useAnimation } from "@/hooks";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-ink shadow-soft transition-all duration-200 focus:border-brand/40 focus:outline-none focus:ring-2 focus:ring-brand/20";

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+447379335426 — UK", "+923204464408 — Pakistan"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["codanityco@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Offices",
    lines: ["200 Eton Road IG1 2UN London, UK (HQ)", "Johar Town, Lahore — Pakistan"],
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["codanityco.com"],
    href: "https://codanityco.com/",
  },
];

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  const { fadeInUp } = useAnimation();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Codanity</title>
        <meta name="description" content="Get in touch with Codanity." />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        className="!top-4 sm:!top-6"
        toastClassName="!mx-4 !max-w-[calc(100vw-2rem)]"
      />

      <PageHero
        badge="Let's Connect"
        title={
          <>
            Get in <span className="gradient-text">touch</span>
          </>
        }
        subtitle="Have a project in mind or a question for our team? Send us a message and we'll get back to you soon."
      />

      <Section background="bg-surface-subtle" padding="SECTION" maxWidth="LARGE" animate={false}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <motion.div className="space-y-4" {...fadeInUp(0.05)}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="card-surface flex gap-4 p-5"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                >
                  <div className="rounded-xl bg-brand-muted p-3 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                    {item.lines.map((line) =>
                      item.href ? (
                        <a
                          key={line}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block text-sm text-brand hover:text-brand-dark"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="mt-1 break-words text-sm text-ink-secondary">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="card-surface p-6 sm:p-8"
            {...fadeInUp(0.12)}
          >
            <h2 className="font-display text-2xl font-bold text-ink">Send a message</h2>
            <p className="mt-2 text-sm text-ink-secondary">
              Tell us about your project, timeline, and goals. We typically respond within 1–2 business days.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name <span className="text-red-500">*</span>
                </label>
                <input id="name" type="text" {...register("name")} className={inputClass} />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="email" type="email" {...register("email")} className={inputClass} />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-ink">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input id="subject" type="text" {...register("subject")} className={inputClass} />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea id="message" rows={5} {...register("message")} className={inputClass} />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </Section>
    </>
  );
}
