import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Users, TrendingUp, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AnimatedShield3D } from '../AnimatedShield3D';
import { AnimatedCard, AnimatedButton, FadeInUp, StaggerContainer, StaggerItem, ScaleIn, SlideInLeft, SlideInRight } from '../AnimatedCard';
import { motion } from 'motion/react';

export function HomePage() {
  const stats = [
    { value: '85%', label: 'des jeunes victimes de cyberviolence' },
    { value: '1500+', label: 'cas traités en 2024' },
    { value: '24/7', label: "assistance d'urgence" },
    { value: '50+', label: 'partenaires engagés' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Comment reconnaître le cyberharcèlement',
      category: 'Prévention',
      excerpt: 'Les signes à surveiller et les actions à prendre pour se protéger du harcèlement en ligne.',
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Vos droits en matière de protection numérique',
      category: 'Loi',
      excerpt: 'Comprendre le cadre légal haïtien pour lutter contre les violences en ligne.',
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Témoignage: Surmonter la cyberviolence',
      category: 'Témoignage',
      excerpt: 'Une histoire de courage et de résilience face aux violences numériques.',
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const partners = [
    'Ministère de la Justice',
    'UNICEF Haïti',
    'Croix-Rouge',
    'Protection Civile',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Animation */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#0a0a0a]">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Text Content */}
            <FadeInUp className="text-center md:text-left">
              <motion.div 
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
              >
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Protéger. Sensibiliser. Agir.</span>
              </motion.div>
              
              <motion.h1 
                className="mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-4xl text-transparent md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Ensemble contre la cyberviolence en Haïti
              </motion.h1>
              
              <motion.p 
                className="mb-8 text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Cybersensia est votre allié dans la lutte contre la cyberviolence et les violences sexuelles en ligne. 
                Obtenez de l'aide, des informations et un soutien immédiat.
              </motion.p>

              <motion.div 
                className="flex flex-col items-center justify-center gap-4 md:justify-start sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/centre-aide">
                  <AnimatedButton className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 text-white transition-all hover:from-red-600 hover:to-red-700 sm:w-auto">
                    <AlertTriangle className="h-5 w-5" />
                    Signaler un abus
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </AnimatedButton>
                </Link>
                
                <Link to="/centre-aide">
                  <AnimatedButton className="group flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-500 bg-cyan-500/10 px-8 py-4 text-cyan-400 transition-all hover:bg-cyan-500/20 sm:w-auto">
                    <Phone className="h-5 w-5" />
                    Obtenir de l'aide
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </AnimatedButton>
                </Link>
              </motion.div>
            </FadeInUp>

            {/* Right: 3D Animated Shield */}
            <ScaleIn delay={0.3} className="hidden md:block">
              <AnimatedShield3D />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-800 bg-gray-900/50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-3xl text-transparent md:text-4xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="border-b border-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl text-white md:text-4xl">Derniers articles</h2>
              <p className="text-gray-400">Restez informés des dernières actualités</p>
            </div>
            <Link
              to="/articles"
              className="hidden items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300 sm:flex"
            >
              Voir tout
              <ChevronRight className="h-5 w-5" />
            </Link>
          </FadeInUp>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <StaggerItem key={article.id}>
                <AnimatedCard
                  className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50 hover:bg-gray-900"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute left-3 top-3 rounded-full bg-cyan-500/90 px-3 py-1 text-xs text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {article.category}
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-400">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-cyan-400">
                      Lire la suite
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="border-b border-gray-800 bg-gray-900/50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <SlideInLeft>
              <motion.div 
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-6 w-6 text-white" />
              </motion.div>
              <h2 className="mb-4 text-2xl text-white md:text-3xl">Notre Mission</h2>
              <p className="mb-4 text-gray-300">
                Cybersensia est une plateforme dédiée à la protection des victimes de cyberviolence et de violences sexuelles en ligne en Haïti. 
                Nous offrons un espace sûr pour signaler les abus, obtenir de l'aide et accéder à des ressources éducatives.
              </p>
              <p className="text-gray-300">
                Notre mission est de sensibiliser, protéger et accompagner les victimes tout en travaillant avec les autorités 
                pour faire respecter la loi et promouvoir un internet plus sûr.
              </p>
            </SlideInLeft>

            <SlideInRight>
              <motion.div 
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-green-500"
                whileHover={{ rotate: -360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-6 w-6 text-white" />
              </motion.div>
              <h2 className="mb-4 text-2xl text-white md:text-3xl">Notre Impact</h2>
              <StaggerContainer className="space-y-4">
                {[
                  { color: 'green', title: 'Protection active', desc: 'Plus de 1500 cas traités avec succès depuis notre lancement' },
                  { color: 'cyan', title: 'Sensibilisation', desc: 'Formation de plus de 5000 jeunes aux bonnes pratiques numériques' },
                  { color: 'purple', title: 'Accompagnement', desc: 'Assistance psychologique et juridique disponible 24/7' }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <motion.div 
                      className="rounded-lg border border-gray-800 bg-gray-900/50 p-4"
                      whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-${item.color}-400`}></div>
                        <span className={`text-${item.color}-400`}>{item.title}</span>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp className="mb-12 text-center">
            <h2 className="mb-2 text-2xl text-white md:text-3xl">Nos partenaires</h2>
            <p className="text-gray-400">Ensemble pour un internet plus sûr</p>
          </FadeInUp>

          <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="flex h-20 w-32 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/50 px-4 transition-all hover:border-cyan-500/50"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-center text-sm text-gray-400">{partner}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.4} className="mt-12">
            <motion.div 
              className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
              </motion.div>
              <h3 className="mb-2 text-xl text-white">Besoin d'aide immédiate ?</h3>
              <p className="mb-6 text-gray-300">
                Notre équipe est disponible 24/7 pour vous accompagner et vous soutenir
              </p>
              <Link to="/centre-aide">
                <AnimatedButton className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600">
                  Contactez-nous maintenant
                  <ChevronRight className="h-5 w-5" />
                </AnimatedButton>
              </Link>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
