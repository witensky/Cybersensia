import { Shield, Target, Heart, Users, Award, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Protection',
      description: 'Nous mettons la sécurité des victimes au cœur de notre action',
    },
    {
      icon: Heart,
      title: 'Empathie',
      description: 'Chaque personne est écoutée avec bienveillance et sans jugement',
    },
    {
      icon: Users,
      title: 'Solidarité',
      description: 'Ensemble, nous sommes plus forts face à la cyberviolence',
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'Transparence et confidentialité dans toutes nos actions',
    },
  ];

  const team = [
    {
      name: 'Dr. Marie Duclair',
      role: 'Directrice Exécutive',
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Jean-Baptiste Lafleur',
      role: 'Responsable Juridique',
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Voltaire',
      role: 'Psychologue Clinicienne',
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Pierre Augustin',
      role: 'Expert Cybersécurité',
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const partners = [
    {
      name: 'Ministère de la Justice',
      type: 'Partenaire institutionnel',
    },
    {
      name: 'UNICEF Haïti',
      type: 'Organisation internationale',
    },
    {
      name: 'Croix-Rouge Haïtienne',
      type: 'ONG humanitaire',
    },
    {
      name: 'Protection Civile',
      type: 'Service public',
    },
    {
      name: 'Association des Femmes Juristes',
      type: 'ONG locale',
    },
    {
      name: 'Coalition des Jeunes',
      type: 'Mouvement citoyen',
    },
  ];

  const achievements = [
    { value: '1500+', label: 'Cas traités avec succès' },
    { value: '5000+', label: 'Jeunes sensibilisés' },
    { value: '50+', label: 'Partenaires actifs' },
    { value: '24/7', label: 'Disponibilité assistance' },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            À propos de Cybersensia
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Une plateforme haïtienne engagée dans la lutte contre la cyberviolence et les violences sexuelles en ligne
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="mb-4 text-2xl text-white md:text-3xl">Notre Mission</h2>
            <p className="mb-4 text-gray-300">
              Cybersensia a été créée en 2020 avec une mission claire : protéger les Haïtiens, en particulier les jeunes 
              et les femmes, contre toutes les formes de violence numérique.
            </p>
            <p className="mb-4 text-gray-300">
              Nous offrons un espace sûr où les victimes peuvent signaler les abus, obtenir de l'aide juridique et 
              psychologique, et accéder à des ressources éducatives pour mieux se protéger en ligne.
            </p>
            <p className="text-gray-300">
              Notre approche holistique combine prévention, intervention d'urgence, accompagnement juridique et 
              sensibilisation communautaire.
            </p>
          </div>

          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-green-500">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="mb-4 text-2xl text-white md:text-3xl">Notre Vision</h2>
            <p className="mb-4 text-gray-300">
              Nous rêvons d'une Haïti où chaque personne peut utiliser internet en toute sécurité, sans craindre le 
              harcèlement, les menaces ou les violences.
            </p>
            <p className="mb-4 text-gray-300">
              Un pays où les agresseurs sont poursuivis et où les victimes reçoivent le soutien dont elles ont besoin 
              pour se reconstruire.
            </p>
            <p className="text-gray-300">
              À travers l'éducation, la sensibilisation et l'action collective, nous construisons un écosystème numérique 
              plus sûr et plus respectueux pour tous.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Nos Valeurs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-cyan-500/50"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg text-white">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8">
          <div className="mb-8 text-center">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
            <h2 className="text-3xl text-white">Notre Impact</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-3xl text-transparent md:text-4xl">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Notre Équipe</h2>
          <p className="mb-8 text-center text-gray-400">
            Des professionnels dévoués et passionnés par la protection des droits numériques
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="mb-1 text-lg text-white">{member.name}</h3>
                  <p className="text-sm text-cyan-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Nos Partenaires</h2>
          <p className="mb-8 text-center text-gray-400">
            Ensemble, nous construisons un internet plus sûr pour Haïti
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-cyan-500/50"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                  <Award className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white">{partner.name}</h3>
                  <p className="text-sm text-gray-400">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-16 rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
          <h2 className="mb-8 text-center text-3xl text-white">Reconnaissances</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center">
              <Award className="mx-auto mb-3 h-10 w-10 text-yellow-400" />
              <h3 className="mb-2 text-lg text-white">Prix UNESCO 2024</h3>
              <p className="text-sm text-gray-400">Innovation sociale et protection numérique</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center">
              <Award className="mx-auto mb-3 h-10 w-10 text-cyan-400" />
              <h3 className="mb-2 text-lg text-white">Certification ONU</h3>
              <p className="text-sm text-gray-400">Droits humains dans l'espace numérique</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center">
              <Award className="mx-auto mb-3 h-10 w-10 text-green-400" />
              <h3 className="mb-2 text-lg text-white">Prix national 2023</h3>
              <p className="text-sm text-gray-400">Meilleure initiative citoyenne</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center">
          <Users className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="mb-2 text-2xl text-white">Rejoignez notre mission</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            Que vous soyez bénévole, partenaire institutionnel ou simple citoyen, vous pouvez contribuer à notre combat 
            contre la cyberviolence
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/centre-aide"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600"
            >
              Devenir bénévole
            </a>
            <a
              href="/centre-aide"
              className="rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-colors hover:bg-cyan-500/20"
            >
              Faire un don
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
