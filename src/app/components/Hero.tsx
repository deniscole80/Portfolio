import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -1000],
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: 0
          }}
        >
          <Sparkles className="w-4 h-4 text-white" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-white shadow-2xl overflow-hidden"
          >
            <ImageWithFallback
              src="/olushina_image.jpg"
              alt="Oladepo Olushina"
              className="h-full w-full object-cover"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 text-white drop-shadow-lg"
          >
            Hi, I'm{" "}
            <span className="font-bold text-yellow-300">Oladepo Olushina</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-2xl md:text-4xl text-white mb-2">Cloud & DevOps Engineer</p>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Cloud Architecture | Infrastructure Automation | Mobile & Web Deployment
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            <span className="font-semibold text-yellow-300">7+ years</span> of experience designing, deploying, and scaling secure cloud infrastructure 
            across <span className="font-semibold">AWS</span> and <span className="font-semibold">Azure</span>. Specialized in CI/CD automation, 
            containerized workloads, and high-availability system design for fintech, edtech, and healthtech platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-6 text-lg shadow-xl"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-xl"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: "https://github.com/deniscole80" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/oladepo/" },
              { icon: Mail, href: "mailto:oladepo.olushina@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors shadow-lg"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center cursor-pointer"
             onClick={() => scrollToSection('about')}>
          <ArrowDown className="w-4 h-4 text-white mt-2" />
        </div>
      </motion.div>
    </section>
  );
}