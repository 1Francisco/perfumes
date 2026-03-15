"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">Contacto</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Hablemos</h1>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            ¿Tienes alguna pregunta, sugerencia o simplemente quieres hablar sobre perfumería?
            Nos encantaría saber de ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="font-serif text-2xl mb-8">Información</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted mb-1">Email</p>
                    <p className="font-medium">hola@etherial.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted mb-1">Ubicación</p>
                    <p className="font-medium">Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-muted mb-1">Horario</p>
                    <p className="font-medium">Lun – Vie: 9:00 – 18:00</p>
                    <p className="text-sm text-muted">Respondemos en 24 horas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-panel border border-border p-8">
              <h3 className="font-serif text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted hover:text-gold transition-colors">Instagram</a>
                <a href="#" className="text-sm text-muted hover:text-gold transition-colors">Pinterest</a>
                <a href="#" className="text-sm text-muted hover:text-gold transition-colors">TikTok</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-panel border border-border p-8 md:p-12">
              <h2 className="font-serif text-2xl mb-8">Envíanos un mensaje</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 bg-gold/10 border border-gold/20 p-4 mb-8"
                >
                  <CheckCircle size={20} className="text-gold-dark flex-shrink-0" />
                  <p className="text-sm">¡Mensaje enviado! Te responderemos pronto.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted block mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted block mb-2">Asunto</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-muted block mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                    placeholder="Cuéntanos más..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-black/80 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
