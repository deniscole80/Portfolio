import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/deniscole80', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/oladepo/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:oladepo.olushina@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-slate-300 py-16 border-t-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <ImageWithFallback
                  src="/olushina_image.jpg"
                  alt="Oladepo Olushina"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl text-white">Oladepo Olushina</h3>
                <p className="text-sm text-blue-300">Cloud & DevOps Engineer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Building resilient cloud infrastructure that enables startups and enterprises to deploy faster, scale reliably, and secure sensitive data.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-sm text-slate-400">
              Available for remote work and consulting opportunities worldwide.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Oladepo Olushina. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
