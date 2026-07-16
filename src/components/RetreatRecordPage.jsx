import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowLeft, Camera, Leaf } from 'lucide-react';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/SEOHead';

export default function RetreatRecordPage({ title, subtitle, year, category, heroImage, heroVideo, heroOverlay = true, intro, introSections, location, groupSize, gallery = [], reflections = [], showIntroHeading = true, activities, journeyVideo }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead title={title} description={`${category} — ${title}`} />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {heroVideo ? (
          <div className="absolute inset-0 w-full h-full">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {heroOverlay && <div className="absolute inset-0 bg-stone-900/50" />}
          </div>
        ) : (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }}>
            {heroOverlay && <div className="absolute inset-0 bg-stone-900/50" />}
          </div>
        )}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {category && <p className="text-amber-200/80 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">{category}</p>}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">{title}</h1>
          {subtitle && <p className="text-white/80 mt-3 md:mt-4 tracking-wider text-lg md:text-2xl font-light">{subtitle}</p>}
        </motion.div>
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-6 md:pt-8">
        <Link to={createPageUrl('Programs')} className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-700 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> 返回旅程篇章
        </Link>
      </div>

      {/* Intro & Quick Facts */}
      <section className="py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {showIntroHeading && <h2 className="text-2xl font-light text-stone-800 mb-6 tracking-wide">旅程簡介</h2>}
            {introSections ? (
              <div className="space-y-10 md:space-y-12">
                {introSections.map((section, i) => {
                  const isImageRight = section.imagePosition !== 'left';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${section.image ? (section.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse') : 'justify-center'}`}
                    >
                      {section.image && (
                        <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-md order-1 md:order-none">
                          <img src={section.image} alt={section.venue} className="w-full h-full object-cover aspect-[4/3]" />
                        </div>
                      )}
                      <div className={`md:w-1/2 ${section.image ? '' : 'w-full'} order-2 md:order-none`}>
                        <p className="font-medium text-emerald-800 text-lg md:text-xl mb-3 md:mb-4 tracking-wide">{section.venue}</p>
                        <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg whitespace-pre-line">{section.content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <p className="text-stone-600 font-light leading-relaxed text-lg whitespace-pre-line">{intro}</p>
            )}
          </motion.div>

          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-10 md:mt-12">
            <div className="text-center p-3 md:p-6 bg-white rounded-xl shadow-sm">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-xs md:text-sm text-stone-600">{year}</p>
            </div>
            <div className="text-center p-3 md:p-6 bg-white rounded-xl shadow-sm">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-xs md:text-sm text-stone-600">{location}</p>
            </div>
            <div className="text-center p-3 md:p-6 bg-white rounded-xl shadow-sm">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-stone-400 mx-auto mb-2" />
              <p className="text-xs md:text-sm text-stone-600">{groupSize}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities (staggered gallery with captions) */}
      {activities && activities.length > 0 && (
        <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <Camera className="w-5 h-5 md:w-6 md:h-6 text-stone-400 mx-auto mb-2 md:mb-3" />
              <h2 className="text-xl md:text-2xl font-light text-stone-800 tracking-wide">旅程紀實</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-6">
              {activities.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`overflow-hidden rounded-2xl shadow-sm bg-stone-50 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl md:text-2xl">{act.emoji}</span>
                      <h3 className="text-base md:text-lg font-medium text-stone-700">{act.title}</h3>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base whitespace-pre-line">{act.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {(journeyVideo || gallery.length > 0) && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Camera className="w-6 h-6 text-stone-400 mx-auto mb-3" />
              <h2 className="text-2xl font-light text-stone-800 tracking-wide">旅程紀實</h2>
            </div>
            {journeyVideo ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <video
                  src={journeyVideo}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[80vh] object-cover"
                />
              </motion.div>
            ) : (
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
            )}
          </div>
        </section>
      )}

      {/* Reflections */}
      {reflections.length > 0 && (
        <section className="py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-emerald-600/60 mx-auto mb-2 md:mb-3" />
              <h2 className="text-xl md:text-2xl font-light text-stone-800 tracking-wide">旅程回顧</h2>
            </div>
            <div className="space-y-10 md:space-y-16">
              {reflections.map((item, i) => {
                const images = item.images || [];
                const isReverse = i % 2 === 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`flex flex-col md:flex-row items-center gap-5 md:gap-8 bg-white rounded-2xl md:rounded-3xl shadow-sm p-5 md:p-10 ${isReverse ? 'md:flex-row-reverse' : ''}`}
                  >
                    {images.length > 0 && (
                      <div className={`md:w-1/2 w-full grid ${images.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 md:gap-3`}>
                        {images.map((img, j) => (
                          <div key={j} className="overflow-hidden rounded-2xl aspect-[3/4]">
                            <img src={img} alt={`${item.author || '參加者'} ${j + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className={`md:w-1/2 ${images.length === 0 ? 'w-full' : ''}`}>
                      {item.author && (
                        <p className="text-emerald-700 font-medium tracking-wider mb-3 md:mb-4 text-sm">— {item.author}</p>
                      )}
                      {item.title && <h3 className="text-base md:text-lg font-medium text-stone-700 mb-3">{item.title}</h3>}
                      <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}