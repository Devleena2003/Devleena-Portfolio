// src/sections/Contact.tsx

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import profileImage from "../../../src/assets/profile.jpg"; 
const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // IMPORTANT: Make sure your .env file is set up correctly
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage("EmailJS is not configured. Check environment variables.");
      return;
    }

    setStatus('loading');
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ from_name: '', from_email: '', message: '' });
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setStatusMessage("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="text-center text-5xl mb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Contact</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Left Side: Contact Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-lg border border-slate-700 bg-slate-800/40 backdrop-blur-sm shadow-lg overflow-hidden"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img 
              src={profileImage} // IMPORTANT: Add your profile picture path here
              alt="Devleena" 
              className="w-24 h-24 rounded-full mb-4 border-2 border-purple-400" 
            />
            <h3 className="text-2xl font-bold text-white">Devleena Das</h3>
            <p className="text-slate-400">Software Engineer</p>
            
            <div className="space-y-4 mt-8 w-full">
              <a href="tel:+91798041XXXX" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors">
                <Phone size={20} className="text-purple-400" /> +91 798041XXXX
              </a>
              <a href="mailto:devleena2003@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors">
                <Mail size={20} className="text-purple-400" /> devleena2003@gmail.com
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors">
                <Linkedin size={20} className="text-purple-400" /> LinkedIn
              </a>
            </div>
          </div>
          {/* The gradient border at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="from_name" className="text-slate-300">Your Name</Label>
              <Input id="from_name" name="from_name" type="text" placeholder="John Doe" required value={formData.from_name} onChange={handleInputChange} className="mt-2 bg-slate-800 border-slate-700 focus:ring-purple-500" />
            </div>
            <div>
              <Label htmlFor="from_email" className="text-slate-300">Your Email</Label>
              <Input id="from_email" name="from_email" type="email" placeholder="john.doe@example.com" required value={formData.from_email} onChange={handleInputChange} className="mt-2 bg-slate-800 border-slate-700 focus:ring-purple-500" />
            </div>
            <div>
              <Label htmlFor="message" className="text-slate-300">Your Message</Label>
              <Textarea id="message" name="message" placeholder="Your feedback or message..." required rows={30} value={formData.message} onChange={handleInputChange} className="mt-2 bg-slate-800 border-slate-700 focus:ring-purple-500" />
            </div>
            <div className="flex flex-col items-start gap-4">
               <Button type="submit" disabled={status === 'loading'} className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center group bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
    {status === 'loading' ? (
        <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Sending...</span>
        </>
    ) : (
        <>
            <span>Send Message</span>
            <Send className="ml-2 h-4 w-4" />
        </>
    )}
</Button>          
              {status !== 'idle' && (
                <div className={`flex items-center gap-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {status === 'success' && <CheckCircle size={16} />}
                    {status === 'error' && <AlertTriangle size={16} />}
                    <span>{statusMessage}</span>
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;