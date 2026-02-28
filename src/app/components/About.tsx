import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Award, TrendingUp, Shield, Zap } from 'lucide-react';

const highlights = [
  { icon: Award, label: '7+ Years', description: 'Experience' },
  { icon: TrendingUp, label: 'Scalable', description: 'Solutions' },
  { icon: Shield, label: 'Secure', description: 'Infrastructure' },
  { icon: Zap, label: 'Fast', description: 'Deployment' }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjEzNDM3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cloud Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30"></div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-50"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                I'm a passionate <span className="font-semibold text-blue-600">Cloud & DevOps Engineer</span> with <span className="font-semibold text-orange-600">7+ years</span> of 
                experience building resilient cloud infrastructure that enables startups and enterprises to thrive.
              </p>
              <p>
                My expertise spans designing secure, scalable cloud architectures across <span className="font-semibold">AWS</span> and <span className="font-semibold">Azure</span>, 
                implementing CI/CD automation, managing containerized workloads, and optimizing cloud costs while maintaining 
                production stability.
              </p>
              <p>
                I've successfully delivered cloud solutions for <span className="font-semibold text-green-600">fintech</span>, <span className="font-semibold text-purple-600">edtech</span>, 
                and <span className="font-semibold text-pink-600">healthtech</span> platforms, specializing in high-availability system design, 
                cloud security hardening, and zero-downtime deployment strategies.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{item.label}</p>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
