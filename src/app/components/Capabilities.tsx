import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

const capabilities = [
  'Multi-environment architecture (Dev / Staging / Production)',
  'High availability configuration',
  'Secure VPC and subnet architecture',
  'Cloud firewall configuration',
  'SSL/TLS configuration',
  'Automated deployment workflows',
  'Cost optimization strategies',
  'Disaster recovery planning'
];

const valuePropositions = [
  {
    title: 'Deploy Faster',
    description: 'Streamlined CI/CD pipelines that reduce deployment time by up to 60%',
    gradient: 'from-yellow-400 via-orange-500 to-red-500'
  },
  {
    title: 'Scale Reliably',
    description: 'Auto-scaling infrastructure that grows with your business needs',
    gradient: 'from-green-400 via-emerald-500 to-teal-500'
  },
  {
    title: 'Secure Sensitive Data',
    description: 'Enterprise-grade security with IAM policies and encrypted architectures',
    gradient: 'from-blue-400 via-indigo-500 to-purple-500'
  },
  {
    title: 'Reduce Operational Risk',
    description: 'Zero-downtime deployments with automated rollback mechanisms',
    gradient: 'from-purple-400 via-pink-500 to-rose-500'
  },
  {
    title: 'Optimize Cloud Costs',
    description: 'Smart resource allocation reducing infrastructure costs by 40%',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500'
  },
  {
    title: 'Maintain Production Stability',
    description: 'Comprehensive monitoring and alerting for 99.9% uptime',
    gradient: 'from-pink-400 via-rose-500 to-red-500'
  }
];

export function Capabilities() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">Value Proposition</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I build resilient cloud infrastructure that enables startups and enterprises to succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {valuePropositions.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="p-6 h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${value.gradient}`}></div>
                <div className="relative z-10 pl-4">
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
                <motion.div
                  className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${value.gradient} rounded-full blur-3xl opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Infrastructure Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Infrastructure Capabilities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.03, x: 5 }}
              >
                <Card className="p-5 bg-gradient-to-br from-white to-cyan-50 hover:shadow-lg transition-all duration-300 border-2 border-cyan-200 hover:border-cyan-400">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-gray-700 font-medium">{capability}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl mb-4">Ready to Transform Your Infrastructure?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you build scalable, secure, and cost-effective cloud solutions.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Let's Talk Cloud ☁️
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
