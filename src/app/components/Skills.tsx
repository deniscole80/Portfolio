import { Cloud, Container, Database, GitBranch, Network, Server, Shield, Workflow, Settings, Monitor } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const coreCompetencies = [
  { name: 'Cloud Architecture', detail: 'AWS, Azure', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { name: 'Infrastructure as Code', detail: 'Terraform, CloudFormation', icon: Server, color: 'from-purple-500 to-pink-500' },
  { name: 'CI/CD Pipeline Engineering', detail: 'GitHub Actions, Jenkins', icon: Workflow, color: 'from-green-500 to-emerald-500' },
  { name: 'Docker & Containers', detail: 'Docker, Container orchestration', icon: Container, color: 'from-orange-500 to-red-500' },
  { name: 'Linux Server Admin', detail: 'Ubuntu Server, System Management', icon: Settings, color: 'from-yellow-500 to-orange-500' },
  { name: 'Cloud Security & IAM', detail: 'Security hardening, Access control', icon: Shield, color: 'from-red-500 to-pink-500' },
  { name: 'High Availability Design', detail: 'Failover, Load balancing', icon: Network, color: 'from-indigo-500 to-purple-500' },
  { name: 'Monitoring & Observability', detail: 'Logging, Alerting, Metrics', icon: Monitor, color: 'from-teal-500 to-cyan-500' },
  { name: 'Database Management', detail: 'MySQL, MongoDB, Optimization', icon: Database, color: 'from-pink-500 to-rose-500' },
  { name: 'Mobile App CI/CD', detail: 'Android & iOS Deployment', icon: GitBranch, color: 'from-cyan-500 to-blue-500' }
];

const cloudTools = [
  { category: 'Cloud Providers', items: ['AWS', 'Azure', 'GCP', 'DigitalOcean'] },
  {
    category: 'DevOps & Automation',
    items: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'GitHub Actions',
      'Jenkins',
      'GitLab CI',
      'Argo CD',
      'Helm',
      'Vault',
      'Nginx',
      'Linux (Ubuntu)'
    ]
  },
  { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  {
    category: 'Monitoring & Operations',
    items: [
      'Prometheus',
      'Grafana',
      'Loki',
      'Tempo',
      'ELK Stack',
      'Datadog',
      'New Relic',
      'PagerDuty',
      'Sentry',
      'Systemd',
      'Server Monitoring',
      'Backup Automation'
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">Core Competencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building and managing modern cloud infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {coreCompetencies.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="relative group"
              >
                <Card className="p-6 h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.detail}</p>
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
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">Cloud Toolstack</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 pb-3 border-b-2 border-blue-300">
                    {tool.category}
                  </h4>
                  <ul className="space-y-3">
                    {tool.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="text-gray-700 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
