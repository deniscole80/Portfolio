import { ExternalLink, Building2, DollarSign, GraduationCap, Wallet, Heart, BarChart3, Users, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'CAREBUD',
    industry: 'HealthTech / Workforce Management',
    role: 'Lead Cloud Architect',
    icon: Heart,
    description: 'Designed multi-role architecture supporting Admin, Regulator, and Workforce modules. Managed cloud security policies for sensitive health data with structured production rollout.',
    highlights: [
      'Multi-tenant secure architecture',
      'Sensitive data protection',
      'Role-based access control',
      'Structured delivery phases'
    ],
    image: '/carebud_screenshot.png',
    tags: ['AWS', 'Healthcare', 'Multi-tenant', 'RBAC', 'Security'],
    color: 'from-emerald-500 to-sky-500',
    url: 'https://care-bud.co.uk'
  },
  {
    title: 'EXAMTICE',
    industry: 'Education Technology',
    role: 'Cloud & Infrastructure Engineer',
    icon: GraduationCap,
    description: 'Architected scalable backend infrastructure with load-balanced application environment. Designed CI/CD for feature rollout without downtime and configured comprehensive monitoring.',
    highlights: [
      'Horizontal scalability setup',
      'Performance tuning for high traffic',
      'Secure student data isolation',
      'Load-balanced environment'
    ],
    image: '/examtice_screenshot.png',
    tags: ['Azure', 'Load Balancing', 'Monitoring', 'Database Optimization'],
    color: 'from-amber-400 to-blue-700',
    url: 'https://examtice.com'
  },
  {
    title: 'AFRIQUEPAY',
    industry: 'Payments / Fintech',
    role: 'DevOps & Cloud Engineer',
    icon: Wallet,
    description: 'Built production deployment pipelines with secure API gateway and SSL handling. Implemented transaction logging & audit infrastructure for financial compliance readiness.',
    highlights: [
      'Payment-grade infrastructure',
      'Encrypted database architecture',
      'Secure API deployment',
      'Compliance readiness'
    ],
    image: '/afriquepay_screenshot.png',
    tags: ['AWS', 'API Gateway', 'SSL/TLS', 'Compliance', 'Audit Logging'],
    color: 'from-teal-500 via-cyan-500 to-indigo-600',
    url: 'https://play.google.com/store/search?q=afriquepay&c=apps&hl=en'
  },
  {
    title: 'CHAISE',
    industry: 'Enterprise Platform',
    role: 'Cloud Infrastructure Engineer',
    icon: Building2,
    description: 'Designed modular deployment architecture with automated environment provisioning. Implemented containerized deployments using Docker and reduced deployment time significantly.',
    highlights: [
      'Containerized production stack',
      'Automated deployment lifecycle',
      'Improved operational efficiency',
      'Modular architecture'
    ],
    image: '/chaise_screenshot.png',
    tags: ['Docker', 'Automation', 'CI/CD', 'Monitoring'],
    color: 'from-amber-400 to-orange-500',
    url: 'https://chaise.app'
  },
  {
    title: 'WICARE',
    industry: 'Health & Care',
    role: 'Cloud Infrastructure Engineer',
    icon: Users,
    description: 'Designed infrastructure for workforce scheduling systems with secure authentication. Managed database optimization and configured CI/CD for continuous deployment.',
    highlights: [
      'Secure role-based scheduling',
      'Resilient backend infrastructure',
      'Production-grade workflow',
      'Database optimization'
    ],
    image: '/wicare_screenshot.png',
    tags: ['AWS', 'Healthcare', 'Authentication', 'Scheduling'],
    color: 'from-blue-500 to-indigo-700',
    url: 'https://site.wicarehealth.com/'
  },
  {
    title: 'PROFITALL',
    industry: 'Financial Services',
    role: 'Cloud Architect & DevOps Lead',
    icon: DollarSign,
    description: 'Designed production-grade fintech cloud infrastructure with secure VPC, IAM policies, and environment separation. Built CI/CD pipelines and implemented zero-downtime deployment with automated rollback.',
    highlights: [
      'Zero-downtime deployment strategy',
      'Automated rollback mechanism',
      'Secure financial data handling',
      'Production uptime optimization'
    ],
    image: '/profitall_screenshot.png',
    tags: ['AWS', 'CI/CD', 'Docker', 'Security', 'IAM'],
    color: 'from-indigo-600 to-violet-600',
    url: 'https://profitall.com'
  },
  {
    title: 'CLASSLYTICA',
    industry: 'Data Analytics / EdTech',
    role: 'Cloud Infrastructure Engineer',
    icon: BarChart3,
    description: 'Designed scalable data ingestion architecture with backend-driven pagination. Optimized database queries for performance and implemented comprehensive monitoring.',
    highlights: [
      'Optimized large dataset handling',
      'Performance-driven architecture',
      'Stable analytics environment',
      'Automated deployment'
    ],
    image: '/Classlytica_screenshot.png',
    tags: ['Azure', 'Data Processing', 'Analytics', 'Optimization'],
    color: 'from-blue-600 to-slate-700',
    url: 'https://classlytica.com'
  },
  {
    title: 'KAFFY KREATIVE AGENCY',
    industry: 'Creative Agency',
    role: 'Creative Strategy & Experience Design',
    icon: Sparkles,
    description:
      'A full-service creative agency born from the visionary leadership of Kaffy — Africa’s most celebrated movement coach and creative strategist.',
    highlights: [
      'Transformative experiences on and off the stage',
      'Storytelling, motion, and innovation for brand elevation',
      'Creative engine for impactful artistic expressions'
    ],
    image: '/kaffykreative_screenshot.png',
    tags: ['Creative Direction', 'Brand Strategy', 'Live Experiences', 'Talent'],
    color: 'from-stone-700 via-amber-400 to-amber-200',
    url: 'https://kaffykreativeagency.com/'
  }
];

const legacyProjects = [
  {
    title: 'PROFITALL',
    industry: 'Financial Services',
    role: 'Cloud Architect & DevOps Lead',
    icon: DollarSign,
    description: 'Designed production-grade fintech cloud infrastructure with secure VPC, IAM policies, and environment separation. Built CI/CD pipelines and implemented zero-downtime deployment with automated rollback.',
    highlights: [
      'Zero-downtime deployment strategy',
      'Automated rollback mechanism',
      'Secure financial data handling',
      'Production uptime optimization'
    ],
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzcyMjI5MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'CI/CD', 'Docker', 'Security', 'IAM'],
    color: 'from-green-500 to-emerald-600',
    url: 'https://profitall.com'
  },
  {
    title: 'EXAMTICE',
    industry: 'Education Technology',
    role: 'Cloud & Infrastructure Engineer',
    icon: GraduationCap,
    description: 'Architected scalable backend infrastructure with load-balanced application environment. Designed CI/CD for feature rollout without downtime and configured comprehensive monitoring.',
    highlights: [
      'Horizontal scalability setup',
      'Performance tuning for high traffic',
      'Secure student data isolation',
      'Load-balanced environment'
    ],
    image: 'https://images.unsplash.com/photo-1595877704598-910cd38569f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVyJTIwb3JjaGVzdHJhdGlvbnxlbnwxfHx8fDE3NzIyMjkxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Azure', 'Load Balancing', 'Monitoring', 'Database Optimization'],
    color: 'from-blue-500 to-indigo-600',
    url: 'https://examtice.com'
  },
  {
    title: 'AFRIQUEPAY',
    industry: 'Payments / Fintech',
    role: 'DevOps & Cloud Engineer',
    icon: Wallet,
    description: 'Built production deployment pipelines with secure API gateway and SSL handling. Implemented transaction logging & audit infrastructure for financial compliance readiness.',
    highlights: [
      'Payment-grade infrastructure',
      'Encrypted database architecture',
      'Secure API deployment',
      'Compliance readiness'
    ],
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjEzNDM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'API Gateway', 'SSL/TLS', 'Compliance', 'Audit Logging'],
    color: 'from-orange-500 to-red-600',
    url: 'https://play.google.com/store/search?q=afriquepay&c=apps&hl=en'
  },
  {
    title: 'CHAISE',
    industry: 'Enterprise Platform',
    role: 'Cloud Infrastructure Engineer',
    icon: Building2,
    description: 'Designed modular deployment architecture with automated environment provisioning. Implemented containerized deployments using Docker and reduced deployment time significantly.',
    highlights: [
      'Containerized production stack',
      'Automated deployment lifecycle',
      'Improved operational efficiency',
      'Modular architecture'
    ],
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzcyMjI5MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Docker', 'Automation', 'CI/CD', 'Monitoring'],
    color: 'from-purple-500 to-pink-600',
    url: 'https://chaise.app'
  },
  {
    title: 'WICARE',
    industry: 'Health & Care',
    role: 'Cloud Infrastructure Engineer',
    icon: Users,
    description: 'Designed infrastructure for workforce scheduling systems with secure authentication. Managed database optimization and configured CI/CD for continuous deployment.',
    highlights: [
      'Secure role-based scheduling',
      'Resilient backend infrastructure',
      'Production-grade workflow',
      'Database optimization'
    ],
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzcyMjI5MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'Healthcare', 'Authentication', 'Scheduling'],
    color: 'from-teal-500 to-green-600',
    url: 'https://site.wicarehealth.com/'
  },
  {
    title: 'CLASSLYTICA',
    industry: 'Data Analytics / EdTech',
    role: 'Cloud Infrastructure Engineer',
    icon: BarChart3,
    description: 'Designed scalable data ingestion architecture with backend-driven pagination. Optimized database queries for performance and implemented comprehensive monitoring.',
    highlights: [
      'Optimized large dataset handling',
      'Performance-driven architecture',
      'Stable analytics environment',
      'Automated deployment'
    ],
    image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjEzNDM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Azure', 'Data Processing', 'Analytics', 'Optimization'],
    color: 'from-cyan-500 to-blue-600',
    url: 'https://classlytica.com'
  },
  {
    title: 'WICARE',
    industry: 'Health & Care',
    role: 'Cloud Infrastructure Engineer',
    icon: Users,
    description: 'Designed infrastructure for workforce scheduling systems with secure authentication. Managed database optimization and configured CI/CD for continuous deployment.',
    highlights: [
      'Secure role-based scheduling',
      'Resilient backend infrastructure',
      'Production-grade workflow',
      'Database optimization'
    ],
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzcyMjI5MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'Healthcare', 'Authentication', 'Scheduling'],
    color: 'from-teal-500 to-green-600',
    url: 'https://site.wicarehealth.com/'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world cloud engineering solutions across fintech, edtech, and healthtech platforms
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isBranded =
              project.title === 'CAREBUD' ||
              project.title === 'EXAMTICE' ||
              project.title === 'AFRIQUEPAY' ||
              project.title === 'CHAISE' ||
              project.title === 'WICARE' ||
              project.title === 'PROFITALL' ||
              project.title === 'CLASSLYTICA' ||
              project.title === 'KAFFY KREATIVE AGENCY';
            const logoSrc =
              project.title === 'CAREBUD'
                ? '/carebud_logo.webp'
                : project.title === 'EXAMTICE'
                  ? '/examtice_logo.png'
                  : project.title === 'AFRIQUEPAY'
                    ? '/afriquepay_logo.png'
                    : project.title === 'CHAISE'
                      ? '/chaise_logo.webp'
                      : project.title === 'PROFITALL'
                        ? '/profitall_logo.png'
                        : project.title === 'CLASSLYTICA'
                          ? '/classlytica_logo.png'
                          : project.title === 'KAFFY KREATIVE AGENCY'
                            ? '/kaffykreative_logo.svg'
                  : null;
            const overlayClass =
              project.title === 'CAREBUD'
                ? 'bg-black/45'
                : project.title === 'EXAMTICE'
                  ? 'bg-gradient-to-br from-slate-900/10 via-blue-900/15 to-amber-400/20'
                  : project.title === 'AFRIQUEPAY'
                    ? 'bg-gradient-to-br from-slate-950/70 via-teal-900/55 to-indigo-900/60'
                    : project.title === 'CHAISE'
                      ? 'bg-gradient-to-br from-white/20 via-orange-200/30 to-amber-400/35'
                      : project.title === 'WICARE'
                        ? 'bg-gradient-to-br from-slate-950/70 via-blue-950/60 to-indigo-900/70'
                        : project.title === 'PROFITALL'
                          ? 'bg-gradient-to-br from-slate-950/70 via-indigo-900/60 to-violet-900/60'
                          : project.title === 'CLASSLYTICA'
                            ? 'bg-gradient-to-br from-slate-950/25 via-blue-900/30 to-slate-900/35'
                            : project.title === 'KAFFY KREATIVE AGENCY'
                              ? 'bg-gradient-to-br from-slate-950/70 via-stone-900/60 to-amber-900/40'
                    : `bg-gradient-to-br ${project.color}`;
            const badgeClass =
              project.title === 'CAREBUD'
                ? 'bg-emerald-100 text-emerald-700'
                : project.title === 'EXAMTICE'
                  ? 'bg-amber-100 text-amber-700'
                  : project.title === 'AFRIQUEPAY'
                    ? 'bg-teal-100 text-teal-700'
                    : project.title === 'CHAISE'
                      ? 'bg-orange-100 text-orange-700'
                      : project.title === 'WICARE'
                        ? 'bg-blue-100 text-blue-700'
                        : project.title === 'PROFITALL'
                          ? 'bg-indigo-100 text-indigo-700'
                          : project.title === 'CLASSLYTICA'
                            ? 'bg-blue-100 text-blue-700'
                            : project.title === 'KAFFY KREATIVE AGENCY'
                              ? 'bg-stone-200 text-stone-700'
                  : 'bg-purple-100 text-purple-700';
            const logoBgClass =
              project.title === 'KAFFY KREATIVE AGENCY' ||
              project.title === 'PROFITALL'
                ? 'bg-slate-900/90'
                : 'bg-white';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div
                      className={`absolute inset-0 ${overlayClass} opacity-60 group-hover:opacity-40 transition-opacity`}
                    ></div>
                    {!isBranded && (
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-gray-900" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      {isBranded ? (
                        <div className="inline-flex items-center gap-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                          {logoSrc && (
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-12 w-12 items-center justify-center rounded-full shadow ${logoBgClass}`}
                              >
                                <ImageWithFallback
                                  src={logoSrc}
                                  alt={`${project.title} logo`}
                                  className="h-8 w-8 object-contain"
                                />
                              </div>
                            </div>
                          )}
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {project.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {project.industry}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="text-3xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {project.industry}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <Badge variant="secondary" className={badgeClass}>
                        {project.role}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: hIndex * 0.1 }}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className={`bg-gradient-to-r ${project.color} text-white`}>
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className={`w-full bg-gradient-to-r ${project.color} text-white hover:opacity-90`}
                        asChild
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
