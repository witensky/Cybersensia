import { Shield, AlertCircle, Scale, Users, Lock, Eye, MessageSquare, FileText } from 'lucide-react';

export function InfosPage() {
  const infoBlocks = [
    {
      icon: AlertCircle,
      title: "Qu'est-ce que la cyberviolence ?",
      color: 'from-red-500 to-orange-500',
      content: [
        'La cyberviolence désigne toute forme de violence exercée via les technologies numériques.',
        'Elle inclut le harcèlement en ligne, les menaces, le cyberstalking, la diffusion non consensuelle de contenus intimes, et bien plus.',
        "Les impacts peuvent être dévastateurs : anxiété, dépression, isolement social et traumatismes psychologiques."
      ]
    },
    {
      icon: Eye,
      title: 'Les violences sexuelles en ligne',
      color: 'from-purple-500 to-pink-500',
      content: [
        'Le revenge porn, la sextorsion, le grooming et les agressions sexuelles facilitées par internet.',
        'Ces violences touchent particulièrement les femmes et les jeunes.',
        "Il est crucial de comprendre que vous n'êtes jamais responsable de ces actes criminels."
      ]
    },
    {
      icon: Scale,
      title: 'Droits et lois en Haïti',
      color: 'from-cyan-500 to-blue-500',
      content: [
        "Le Code pénal haïtien protège les victimes de violences sexuelles et de harcèlement.",
        "La loi sur les télécommunications encadre l'utilisation malveillante des technologies.",
        'Vous avez le droit de porter plainte et de demander réparation pour les préjudices subis.'
      ]
    },
  ];

  const preventionSteps = [
    {
      icon: Lock,
      title: 'Protégez vos données',
      description: 'Utilisez des mots de passe forts et activez la double authentification sur tous vos comptes.'
    },
    {
      icon: Eye,
      title: 'Contrôlez votre visibilité',
      description: 'Vérifiez régulièrement vos paramètres de confidentialité sur les réseaux sociaux.'
    },
    {
      icon: MessageSquare,
      title: 'Méfiez-vous des inconnus',
      description: 'Ne partagez pas d\'informations personnelles avec des personnes que vous ne connaissez pas.'
    },
    {
      icon: FileText,
      title: 'Conservez les preuves',
      description: 'Capturez et sauvegardez toute preuve de harcèlement ou de violence.'
    },
  ];

  const timeline = [
    { year: '2020', event: 'Lancement de Cybersensia', description: 'Création de la plateforme de signalement' },
    { year: '2021', event: 'Partenariat institutionnel', description: 'Collaboration avec le Ministère de la Justice' },
    { year: '2022', event: 'Extension des services', description: 'Ajout du support psychologique 24/7' },
    { year: '2023', event: 'Formation nationale', description: '5000 jeunes sensibilisés dans tout le pays' },
    { year: '2024', event: 'Reconnaissance internationale', description: 'Prix UNESCO pour l\'innovation sociale' },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            Informations & Éducation
          </h1>
          <p className="text-lg text-gray-400">
            Comprendre la cyberviolence pour mieux s'en protéger
          </p>
        </div>

        {/* Main Info Blocks */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {infoBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
              >
                <div className={`bg-gradient-to-r ${block.color} p-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl text-white">{block.title}</h3>
                  <div className="space-y-3">
                    {block.content.map((text, i) => (
                      <p key={i} className="text-sm text-gray-400 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prevention Steps */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Comment vous protéger</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {preventionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-cyan-500/50"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Illustrations & Schema */}
        <div className="mb-16 rounded-2xl border border-gray-800 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 p-8">
          <h2 className="mb-6 text-center text-2xl text-white md:text-3xl">
            Le cycle de la cyberviolence
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl">1️⃣</div>
              <h3 className="mb-2 text-lg text-cyan-400">Contact initial</h3>
              <p className="text-sm text-gray-400">
                L'agresseur établit un contact avec la victime, souvent en se faisant passer pour quelqu'un d'autre
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">2️⃣</div>
              <h3 className="mb-2 text-lg text-cyan-400">Manipulation</h3>
              <p className="text-sm text-gray-400">
                Création d'un lien de confiance pour obtenir des informations ou des contenus sensibles
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">3️⃣</div>
              <h3 className="mb-2 text-lg text-cyan-400">Violence</h3>
              <p className="text-sm text-gray-400">
                Chantage, menaces, diffusion de contenus ou harcèlement répété
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Notre parcours</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500 md:left-1/2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a0a] bg-cyan-500 md:left-1/2" />
                  
                  <div className={`ml-12 w-full md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                      <div className="mb-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                        {item.year}
                      </div>
                      <h3 className="mb-2 text-lg text-white">{item.event}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center">
          <Shield className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="mb-2 text-2xl text-white">Besoin de plus d'informations ?</h3>
          <p className="mb-6 text-gray-300">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/centre-aide"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600"
            >
              Contactez-nous
            </a>
            <a
              href="/articles"
              className="rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-colors hover:bg-cyan-500/20"
            >
              Lire nos articles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
