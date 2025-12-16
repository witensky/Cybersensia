import { BookOpen, Video, Users, Award, Clock, Calendar, CheckCircle, Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FormationPage() {
  const courses = [
    {
      id: 1,
      title: 'Protection numérique pour débutants',
      level: 'Débutant',
      duration: '2 heures',
      students: 1250,
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 5,
      certificate: true,
    },
    {
      id: 2,
      title: 'Comprendre et prévenir le cyberharcèlement',
      level: 'Intermédiaire',
      duration: '3 heures',
      students: 890,
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 7,
      certificate: true,
    },
    {
      id: 3,
      title: 'Droits numériques et cadre légal haïtien',
      level: 'Avancé',
      duration: '4 heures',
      students: 560,
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 6,
      certificate: true,
    },
    {
      id: 4,
      title: 'Sécurité en ligne pour les jeunes',
      level: 'Débutant',
      duration: '2.5 heures',
      students: 2100,
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 4,
      certificate: false,
    },
    {
      id: 5,
      title: 'Répondre aux violences sexuelles en ligne',
      level: 'Intermédiaire',
      duration: '3.5 heures',
      students: 720,
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 8,
      certificate: true,
    },
    {
      id: 6,
      title: 'Éducation numérique pour parents',
      level: 'Débutant',
      duration: '2 heures',
      students: 1450,
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      modules: 5,
      certificate: false,
    },
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'Les nouveaux risques de la cyberviolence en 2025',
      date: '20 Janvier 2025',
      time: '18h00 - 19h30',
      speaker: 'Dr. Marie Duclair',
      attendees: 145,
      status: 'Places disponibles',
    },
    {
      id: 2,
      title: 'Atelier pratique: Sécuriser vos réseaux sociaux',
      date: '25 Janvier 2025',
      time: '15h00 - 17h00',
      speaker: 'Pierre Augustin',
      attendees: 89,
      status: 'Inscription ouverte',
    },
    {
      id: 3,
      title: 'Session Q&A: Que faire en cas de sextorsion',
      date: '28 Janvier 2025',
      time: '19h00 - 20h30',
      speaker: 'Sarah Voltaire',
      attendees: 203,
      status: 'Places limitées',
    },
  ];

  const workshops = [
    {
      icon: Users,
      title: 'Ateliers en présentiel',
      description: 'Sessions interactives dans nos bureaux à Port-au-Prince',
      frequency: 'Tous les samedis',
    },
    {
      icon: Video,
      title: 'Formations en ligne',
      description: 'Cours accessibles 24/7 à votre rythme',
      frequency: 'Accès illimité',
    },
    {
      icon: Calendar,
      title: 'Webinaires mensuels',
      description: 'Conférences avec des experts internationaux',
      frequency: 'Dernier jeudi du mois',
    },
  ];

  const stats = [
    { value: '5000+', label: 'Personnes formées' },
    { value: '120+', label: 'Sessions organisées' },
    { value: '15+', label: 'Modules disponibles' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            Formation & Sensibilisation
          </h1>
          <p className="text-lg text-gray-400">
            Apprenez à vous protéger et à protéger vos proches dans l'espace numérique
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-3xl text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Types */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Nos formats de formation</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-cyan-500/50"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl text-white">{workshop.title}</h3>
                  <p className="mb-3 text-sm text-gray-400">{workshop.description}</p>
                  <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                    {workshop.frequency}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl text-white">Nos cours en ligne</h2>
              <p className="text-gray-400">Formations accessibles à votre rythme</p>
            </div>
            <button className="hidden rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 sm:block">
              Tous les cours
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50 hover:bg-gray-900"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-cyan-500/90 px-3 py-1 text-xs text-white">
                    {course.level}
                  </div>
                  {course.certificate && (
                    <div className="absolute right-3 top-3 rounded-full bg-green-500/90 px-3 py-1 text-xs text-white">
                      Certificat
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl text-white transition-colors group-hover:text-cyan-400">
                    {course.title}
                  </h3>

                  <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} étudiants</span>
                    </div>
                  </div>

                  <button className="w-full rounded-lg bg-cyan-500/10 py-2 text-cyan-400 transition-colors hover:bg-cyan-500/20">
                    Commencer le cours
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Webinaires à venir</h2>
          <div className="space-y-4">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
              >
                <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl text-white">{webinar.title}</h3>
                    <div className="mb-3 flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-cyan-400" />
                        <span>{webinar.attendees} inscrits</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">Animé par {webinar.speaker}</p>
                  </div>

                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      {webinar.status}
                    </span>
                    <button className="rounded-lg bg-cyan-500 px-6 py-2 text-white transition-colors hover:bg-cyan-600">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <Award className="mb-4 h-12 w-12 text-cyan-400" />
            <h3 className="mb-4 text-2xl text-white">Certification officielle</h3>
            <p className="mb-4 text-gray-300">
              À la fin de certains cours, obtenez une certification reconnue par nos partenaires institutionnels.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Reconnaissance nationale et internationale</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Valorisable sur CV et LinkedIn</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Valable 2 ans</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <BookOpen className="mb-4 h-12 w-12 text-cyan-400" />
            <h3 className="mb-4 text-2xl text-white">Formations sur mesure</h3>
            <p className="mb-4 text-gray-300">
              Nous proposons des formations adaptées aux besoins de votre organisation, école ou entreprise.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Contenu personnalisé</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Sessions en présentiel ou en ligne</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Tarifs de groupe avantageux</span>
              </li>
            </ul>
            <button className="rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-2 text-cyan-400 transition-colors hover:bg-cyan-500/20">
              Demander un devis
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="mb-2 text-2xl text-white">Prêt à commencer votre formation ?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            Tous nos cours sont gratuits et accessibles à tous. Inscrivez-vous dès maintenant et rejoignez notre communauté 
            de plus de 5000 personnes formées à la protection numérique.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600">
              Créer un compte
            </button>
            <button className="rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-colors hover:bg-cyan-500/20">
              Explorer les cours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
