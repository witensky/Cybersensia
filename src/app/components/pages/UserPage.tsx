import { useState } from 'react';
import { User, Lock, Bell, Shield, Eye, EyeOff, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { FadeInUp, AnimatedButton, AnimatedCard } from '../AnimatedCard';
import { motion } from 'motion/react';

export function UserPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const reports = [
    {
      id: 1,
      date: '10 Dec 2024',
      type: 'Cyberharcèlement',
      status: 'En cours',
      statusColor: 'text-yellow-400 bg-yellow-400/10',
    },
    {
      id: 2,
      date: '5 Dec 2024',
      type: 'Sextorsion',
      status: 'Résolu',
      statusColor: 'text-green-400 bg-green-400/10',
    },
    {
      id: 3,
      date: '28 Nov 2024',
      type: 'Diffusion de contenus',
      status: 'En cours',
      statusColor: 'text-yellow-400 bg-yellow-400/10',
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            Mon Espace Personnel
          </h1>
          <p className="text-lg text-gray-400">
            Gérez votre profil et vos signalements en toute sécurité
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              {/* Profile Avatar */}
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h2 className="mb-1 text-xl text-white">Utilisateur Anonyme</h2>
                <p className="text-sm text-gray-400">Membre depuis Nov 2024</p>
              </div>

              {/* Navigation Tabs */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                    activeTab === 'profile'
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-cyan-400'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profil</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                    activeTab === 'reports'
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-cyan-400'
                  }`}
                >
                  <Shield className="h-5 w-5" />
                  <span>Mes signalements</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                    activeTab === 'privacy'
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-cyan-400'
                  }`}
                >
                  <Lock className="h-5 w-5" />
                  <span>Confidentialité</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                    activeTab === 'notifications'
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-cyan-400'
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </button>
              </nav>

              {/* Security Badge */}
              <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-green-400">Compte sécurisé</span>
                </div>
                <p className="text-xs text-gray-400">
                  Toutes vos données sont chiffrées et protégées
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="mb-6 text-2xl text-white">Informations du profil</h2>
                
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-gray-400">Prénom</label>
                      <input
                        type="text"
                        defaultValue="Anonyme"
                        className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm text-gray-400">Nom</label>
                      <input
                        type="text"
                        defaultValue="Utilisateur"
                        className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <Mail className="mr-2 inline h-4 w-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="utilisateur@example.com"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <Phone className="mr-2 inline h-4 w-4" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+509 XXXX XXXX"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <MapPin className="mr-2 inline h-4 w-4" />
                      Localisation
                    </label>
                    <input
                      type="text"
                      defaultValue="Port-au-Prince, Haïti"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <Calendar className="mr-2 inline h-4 w-4" />
                      Date de naissance
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <button className="w-full rounded-lg bg-cyan-500 py-3 text-white transition-colors hover:bg-cyan-600">
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="mb-6 text-2xl text-white">Historique des signalements</h2>
                
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-cyan-500/50"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="mb-1 text-lg text-white">{report.type}</h3>
                          <p className="text-sm text-gray-400">Signalement #{report.id} • {report.date}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs ${report.statusColor}`}>
                          {report.status}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                          Voir détails
                        </button>
                        <button className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                          Ajouter une information
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-red-500 to-red-600 py-3 text-white transition-all hover:from-red-600 hover:to-red-700">
                  Nouveau signalement
                </button>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="mb-6 text-2xl text-white">Paramètres de confidentialité</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Mot de passe actuel</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Nouveau mot de passe</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-400">Confirmer le mot de passe</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <button className="w-full rounded-lg bg-cyan-500 py-3 text-white transition-colors hover:bg-cyan-600">
                    Modifier le mot de passe
                  </button>

                  <div className="mt-8 space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                    <h3 className="mb-4 text-lg text-white">Sécurité avancée</h3>
                    
                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Authentification à deux facteurs</p>
                        <p className="text-sm text-gray-400">Protégez votre compte avec une couche de sécurité supplémentaire</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Alertes de connexion</p>
                        <p className="text-sm text-gray-400">Recevez une notification à chaque nouvelle connexion</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
                <h2 className="mb-6 text-2xl text-white">Préférences de notifications</h2>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Notifications par email</p>
                        <p className="text-sm text-gray-400">Recevoir les mises à jour importantes par email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Notifications SMS</p>
                        <p className="text-sm text-gray-400">Alertes urgentes par message texte</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Nouveaux articles</p>
                        <p className="text-sm text-gray-400">Être informé des nouvelles publications</p>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between">
                      <div>
                        <p className="text-white">Événements et formations</p>
                        <p className="text-sm text-gray-400">Invitations aux webinaires et sessions de sensibilisation</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </label>
                  </div>

                  <button className="w-full rounded-lg bg-cyan-500 py-3 text-white transition-colors hover:bg-cyan-600">
                    Sauvegarder les préférences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}