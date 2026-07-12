import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowLeft, Camera, Leaf } from 'lucide-react';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/SEOHead';

export default function RetreatRecordPage({ title, year, category, heroImage, intro, location, groupSize, gallery = [], reflections = [] }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead title={title} description={`${category} — ${title}`} />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }}>
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-amber-200/80 tracking-[0.3em] text-sm mb-4">{category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">{title}</h1>
          <p className="text-white/70 mt-4 tracking-wider">{year}</p>
        </motion.div>
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link to={createPageUrl('Programs')} className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-700 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> 返回旅程篇章
        </Link>
      </div>

      {/* Intro & Quick Facts */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-light text-stone-800 mb-6 tracking-wide">旅程簡介</h2>
            <p className="text-stone-600 font-light leading-relaxed text-lg">{intro}</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Calendar className="w-5 h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-sm text-stone-600">{year}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="w-5 h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-sm text-stone-600">{location}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users className="w-5 h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-sm text-stone-600">{groupSize}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Camera className="w-6 h-6 text-stone-400 mx-auto mb-3" />
              <h2 className="text-2xl font-light text-stone-800 tracking-wide">旅程紀實</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="overflow-hidden rounded-2xl aspect-[4/3] shadow-sm"
                >
                  <img src={img} alt={`旅程照片 ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reflections */}
      {reflections.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Leaf className="w-6 h-6 text-emerald-600/60 mx-auto mb-3" />
              <h2 className="text-2xl font-light text-stone-800 tracking-wide">旅程回顧</h2>
            </div>
            <div className="space-y-12">
              {reflections.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-lg font-medium text-stone-700 mb-3">{item.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}