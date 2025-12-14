import { Phone, MessageCircle, Mail, Clock, MapPin, AlertTriangle, Heart, Scale, Shield } from 'lucide-react';

export function HelpCenterPage() {
  const emergencyContacts = [
    {
      icon: Phone,
      title: 'Ligne d\'urgence 24/7',
      value: '+509 1234 5678',
      description: 'Disponible jour et nuit pour les situations critiques',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: MessageCircle,
      title: 'Chat en direct',
      value: 'Démarrer une conversation',
      description: 'Assistance immédiate avec un conseiller',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'aide@cybersensia.ht',
      description: 'Réponse sous 24h maximum',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const resources = [
    {
      icon: Shield,
      title: 'Assistance juridique',
      description: 'Consultations gratuites avec nos avocats partenaires spécialisés en droit numérique',
      action: 'Prendre rendez-vous',
    },
    {
      icon: Heart,
      title: 'Soutien psychologique',
      description: 'Accompagnement par des professionnels formés aux traumatismes liés aux violences en ligne',
      action: 'Parler à un psychologue',
    },
    {
      icon: Scale,
      title: 'Démarches légales',
      description: 'Aide pour porter plainte et engager des poursuites contre les agresseurs',
      action: 'En savoir plus',
    },
  ];

  const faqs = [
    {
      question: 'Mes informations resteront-elles confidentielles ?',
      answer: 'Absolument. Toutes vos communications avec Cybersensia sont cryptées et protégées. Nous ne partageons jamais vos informations sans votre consentement explicite.',
    },
    {
      question: 'Que dois-je faire immédiatement en cas de cyberviolence ?',
      answer: 'Conservez toutes les preuves (captures d\'écran, messages), bloquez l\'agresseur, et contactez-nous immédiatement. Ne répondez pas aux menaces et ne supprimez rien.',
    },
    {
      question: 'Puis-je signaler anonymement ?',
      answer: 'Oui, vous pouvez faire un signalement anonyme. Cependant, pour que nous puissions vous aider efficacement et engager des poursuites, nous recommandons de fournir vos coordonnées.',
    },
    {
      question: 'Combien de temps prend le traitement d\'un signalement ?',
      answer: 'Les cas urgents sont traités immédiatement. Pour les autres situations, nous vous contactons sous 24-48h pour évaluer la situation et vous proposer un plan d\'action.',
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            Centre d'Aide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Vous n'êtes pas seul(e). Notre équipe est là pour vous écouter, vous soutenir et vous aider à trouver des solutions.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="mb-12 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-xl text-white">Situation d'urgence ?</h3>
              <p className="text-gray-300">
                Si vous êtes en danger immédiat, contactez la police (114) ou appelez notre ligne d'urgence 24/7
              </p>
            </div>
            <a
              href="tel:+50912345678"
              className="flex-shrink-0 rounded-lg bg-red-500 px-6 py-3 text-white transition-colors hover:bg-red-600"
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
              >
                <div className={`bg-gradient-to-r ${contact.color} p-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg text-white">{contact.title}</h3>
                  <p className="mb-2 text-xl text-cyan-400">{contact.value}</p>
                  <p className="text-sm text-gray-400">{contact.description}</p>
                  <button className="mt-4 w-full rounded-lg border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-cyan-400 transition-all hover:bg-cyan-500/20">
                    Utiliser ce moyen
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Resources */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Ressources d'aide</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-cyan-500/50"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl text-white">{resource.title}</h3>
                  <p className="mb-4 text-sm text-gray-400">{resource.description}</p>
                  <button className="text-sm text-cyan-400 transition-colors hover:text-cyan-300">
                    {resource.action} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Hours & Location */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 text-2xl text-white">Horaires</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Ligne d'urgence</span>
                <span className="text-cyan-400">24/7</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Chat en direct</span>
                <span className="text-white">8h - 22h</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Bureau</span>
                <span className="text-white">Lun-Ven 9h-17h</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Email</span>
                <span className="text-white">Réponse sous 24h</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-4 text-2xl text-white">Nos bureaux</h3>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-sm text-gray-400">Siège principal</p>
                <p className="text-white">123 Rue de la République</p>
                <p className="text-white">Port-au-Prince, Haïti</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-gray-400">Antenne régionale</p>
                <p className="text-white">Cap-Haïtien</p>
                <p className="text-white">Les Cayes</p>
              </div>
              <button className="mt-4 w-full rounded-lg border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-cyan-400 transition-all hover:bg-cyan-500/20">
                Voir sur la carte
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl text-white">Questions fréquentes</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
              >
                <summary className="cursor-pointer p-6 text-lg text-white transition-colors group-hover:text-cyan-400">
                  {faq.question}
                </summary>
                <div className="border-t border-gray-800 p-6 text-gray-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Support Message */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center">
          <Heart className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
          <h3 className="mb-2 text-2xl text-white">Vous êtes courageux(se)</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            Demander de l'aide est un signe de force, pas de faiblesse. Chaque jour, nous aidons des personnes comme vous 
            à reprendre le contrôle de leur vie numérique. Vous n'êtes pas seul(e) dans cette épreuve.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600"
            >
              Parler à quelqu'un maintenant
            </a>
            <a
              href="/articles"
              className="rounded-lg border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-colors hover:bg-cyan-500/20"
            >
              Lire des témoignages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
