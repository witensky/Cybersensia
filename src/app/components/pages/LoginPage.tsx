import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Shield, User } from 'lucide-react';
import { FadeInUp, AnimatedButton, ScaleIn } from '../AnimatedCard';
import { motion } from 'motion/react';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted', { email, password });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-md">
          {/* Logo/Header */}
          <FadeInUp>
            <div className="mb-8 text-center">
              <motion.div
                className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <h1 className="mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-3xl text-transparent">
                {isLogin ? 'Connexion' : 'Inscription'}
              </h1>
              <p className="text-gray-400">
                {isLogin
                  ? 'Accédez à votre espace sécurisé'
                  : 'Créez votre compte en toute sécurité'}
              </p>
            </div>
          </FadeInUp>

          {/* Main Form Card */}
          <ScaleIn delay={0.2}>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              {/* Social Login Buttons */}
              <div className="mb-6 space-y-3">
                <AnimatedButton
                  onClick={() => handleSocialLogin('google')}
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-all hover:border-cyan-500/50 hover:bg-gray-800"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Continuer avec Google</span>
                </AnimatedButton>

                <AnimatedButton
                  onClick={() => handleSocialLogin('facebook')}
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-all hover:border-cyan-500/50 hover:bg-gray-800"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Continuer avec Facebook</span>
                </AnimatedButton>

                <AnimatedButton
                  onClick={() => handleSocialLogin('instagram')}
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white transition-all hover:border-cyan-500/50 hover:bg-gray-800"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FD5949"/>
                        <stop offset="50%" stopColor="#D6249F"/>
                        <stop offset="100%" stopColor="#285AEB"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Continuer avec Instagram</span>
                </AnimatedButton>
              </div>

              {/* Divider */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-800"></div>
                <span className="text-sm text-gray-500">ou</span>
                <div className="h-px flex-1 bg-gray-800"></div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <User className="mr-2 inline h-4 w-4" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    <Mail className="mr-2 inline h-4 w-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-cyan-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    <Lock className="mr-2 inline h-4 w-4" />
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 pr-12 text-white placeholder-gray-500 transition-colors focus:border-cyan-500 focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-cyan-400"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm text-gray-400">
                      <Lock className="mr-2 inline h-4 w-4" />
                      Confirmer le mot de passe
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-cyan-500 focus:outline-none"
                      required
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-400">
                      <input type="checkbox" className="rounded" />
                      Se souvenir de moi
                    </label>
                    <a href="#" className="text-cyan-400 transition-colors hover:text-cyan-300">
                      Mot de passe oublié?
                    </a>
                  </div>
                )}

                <AnimatedButton
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 py-3 text-white transition-all hover:from-cyan-600 hover:to-teal-600"
                >
                  {isLogin ? 'Se connecter' : "S'inscrire"}
                </AnimatedButton>
              </form>

              {/* Toggle Login/Signup */}
              <div className="mt-6 text-center text-sm text-gray-400">
                {isLogin ? "Vous n'avez pas de compte? " : 'Vous avez déjà un compte? '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  {isLogin ? "S'inscrire" : 'Se connecter'}
                </button>
              </div>

              {/* Security Notice */}
              <motion.div
                className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 flex-shrink-0 text-green-400" />
                  <div>
                    <p className="mb-1 text-sm text-green-400">Connexion 100% sécurisée</p>
                    <p className="text-xs text-gray-400">
                      Toutes vos données sont chiffrées et protégées. Votre anonymat est garanti.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScaleIn>

          {/* Help Link */}
          <FadeInUp delay={0.4}>
            <div className="mt-6 text-center">
              <Link
                to="/centre-aide"
                className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
              >
                Besoin d'aide pour vous connecter?
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
