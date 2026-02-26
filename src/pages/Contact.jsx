import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("訊息已送出！我們會盡快回覆您。");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "電子郵件",
      content: "taipei.circlelounge@gmail.com",
      link: "mailto:taipei.circlelounge@gmail.com"
    },

    {
      icon: MessageCircle,
      title: "LINE 官方帳號",
      content: "@467wrtjj",
      link: "https://line.me/ti/p/@467wrtjj"
    },
    {
      icon: Clock,
      title: "服務時間",
      content: "週一至週五 10:00-18:00",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">CONTACT US</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            聯繫我們
          </h1>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light text-stone-800 mb-4">
                與我們聯繫
              </h2>
              <p className="text-stone-500 font-light mb-12 leading-relaxed">
                有任何問題或想法，歡迎隨時與我們聯繫。
                無論是詢問行程細節、客製化需求，或只是想聊聊，
                我們都很樂意傾聽。
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-400 mb-1">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-stone-800 hover:text-emerald-700 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-stone-800">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>


            </motion.div>


          </div>
        </div>
      </section>
    </div>
  );
}