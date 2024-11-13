import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Phone, Mail, MapPin, Loader } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendContactForm } from '@/lib/api';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#5128a0]">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Phone className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">Mon-Fri from 9am to 10pm</p>
                <p className="mt-1 text-[#5128a0]">+923204464408</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Mail className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">Our friendly team is here to help.</p>
                <p className="mt-1 text-[#5128a0]">codanityco@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <MapPin className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Office</h3>
                <p className="mt-1 text-gray-600">Johar Town Lahore, Pakistan.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name  <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0]"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0]"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject  <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0]"
                  />
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message  <span className='text-red-600'>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0]"
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium rounded-md text-white bg-[#5128a0] hover:bg-[#3e217e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5128a0] transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader className="h-5 w-5 mr-2 animate-spin" /> : <Send className="h-5 w-5 mr-2" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
