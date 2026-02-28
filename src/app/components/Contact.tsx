import { Mail, MapPin, Phone, Send, Zap, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const valueProps = [
  { icon: Zap, label: 'Deploy Faster', color: 'from-yellow-400 to-orange-500' },
  { icon: TrendingUp, label: 'Scale Reliably', color: 'from-green-400 to-emerald-500' },
  { icon: Shield, label: 'Secure Data', color: 'from-blue-400 to-indigo-500' },
  { icon: DollarSign, label: 'Optimize Costs', color: 'from-pink-400 to-purple-500' }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-white">Let's Build Something Great</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform your cloud infrastructure? Let's connect and discuss your project!
          </p>
        </motion.div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20 text-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${prop.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{prop.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'oladepo.olushina@gmail.com',
                  href: 'mailto:oladepo.olushina@gmail.com'
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+2348148666811',
                  href: 'tel:+2348148666811'
                },
                { icon: MapPin, label: 'Location', value: 'Available for Remote Work' }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Card className="p-5 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-100">{contact.label}</p>
                          {contact.href ? (
                            <a href={contact.href} className="text-white hover:text-yellow-300 transition-colors font-semibold">
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-white font-semibold">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <h4 className="text-xl text-white mb-4">Open to:</h4>
              <ul className="space-y-3 text-blue-100">
                {['Full-time opportunities', 'Contract projects', 'Consulting engagements', 'Speaking at events', 'Technical partnerships'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-yellow-300">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
