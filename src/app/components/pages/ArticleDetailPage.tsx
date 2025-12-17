import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FadeInUp, AnimatedButton, StaggerContainer, StaggerItem } from '../AnimatedCard';
import { motion } from 'motion/react';

export function ArticleDetailPage() {
  const { id } = useParams();

  // Mock article data - in real app, fetch by id
  const articles = [
    {
      id: 1,
      title: 'Comment reconnaître le cyberharcèlement',
      category: 'Prévention',
      date: '10 Décembre 2024',
      author: 'Marie Duclair',
      authorRole: 'Experte en cybersécurité',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <h2>Introduction</h2>
        <p>Le cyberharcèlement est devenu l'une des formes les plus répandues de violence en ligne. Il peut avoir des conséquences dévastatrices sur la santé mentale et le bien-être des victimes. Dans cet article, nous allons explorer les signes distinctifs du cyberharcèlement et comment y faire face.</p>

        <h2>Qu'est-ce que le cyberharcèlement ?</h2>
        <p>Le cyberharcèlement désigne l'utilisation des technologies numériques pour intimider, menacer, humilier ou cibler une personne de manière répétée. Cela peut inclure :</p>
        <ul>
          <li>Messages menaçants ou insultants</li>
          <li>Diffusion de rumeurs en ligne</li>
          <li>Publication de photos ou vidéos embarrassantes</li>
          <li>Création de faux profils pour nuire à la réputation</li>
          <li>Exclusion intentionnelle de groupes en ligne</li>
        </ul>

        <h2>Les signes d'alerte</h2>
        <p>Il est important de reconnaître les signes du cyberharcèlement :</p>
        <ol>
          <li><strong>Fréquence et répétition</strong> - Les messages ou actions se répètent dans le temps</li>
          <li><strong>Intention de nuire</strong> - Le comportement vise clairement à blesser ou intimider</li>
          <li><strong>Déséquilibre de pouvoir</strong> - L'agresseur a un avantage (nombre, anonymat, etc.)</li>
          <li><strong>Impact émotionnel</strong> - La victime ressent de la détresse, de l'anxiété ou de la peur</li>
        </ol>

        <h2>Que faire si vous êtes victime ?</h2>
        <p>Si vous pensez être victime de cyberharcèlement, voici les étapes à suivre :</p>
        <ul>
          <li><strong>Ne répondez pas</strong> - Évitez d'engager avec l'agresseur</li>
          <li><strong>Conservez les preuves</strong> - Prenez des captures d'écran de tous les messages</li>
          <li><strong>Bloquez l'agresseur</strong> - Utilisez les fonctions de blocage disponibles</li>
          <li><strong>Signalez</strong> - Utilisez les outils de signalement des plateformes</li>
          <li><strong>Parlez-en</strong> - Contactez des personnes de confiance ou des professionnels</li>
        </ul>

        <h2>Ressources d'aide</h2>
        <p>Cybersensia offre un soutien 24/7 pour les victimes de cyberharcèlement. N'hésitez pas à nous contacter via notre centre d'aide. Vous n'êtes pas seul(e), et nous sommes là pour vous aider.</p>

        <h2>Prévention</h2>
        <p>La meilleure défense contre le cyberharcèlement est la prévention :</p>
        <ul>
          <li>Protégez votre vie privée en ligne</li>
          <li>Réfléchissez avant de partager</li>
          <li>Utilisez des mots de passe forts</li>
          <li>Sensibilisez votre entourage</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Le cyberharcèlement est un problème sérieux qui nécessite une action collective. En reconnaissant les signes et en sachant comment réagir, nous pouvons tous contribuer à créer un environnement numérique plus sûr.</p>
      `,
    },
    {
      id: 2,
      title: 'Vos droits en matière de protection numérique',
      category: 'Loi',
      date: '8 Décembre 2024',
      author: 'Pierre Augustin',
      authorRole: 'Avocat spécialisé en droit numérique',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <h2>Le cadre légal haïtien</h2>
        <p>Haïti a progressivement renforcé son cadre légal pour protéger les citoyens contre les cyberviolences. Connaître vos droits est essentiel pour vous défendre efficacement.</p>

        <h2>Vos droits fondamentaux</h2>
        <p>En tant que citoyen haïtien, vous avez le droit à :</p>
        <ul>
          <li>La protection de vos données personnelles</li>
          <li>La confidentialité de vos communications</li>
          <li>La protection contre le harcèlement en ligne</li>
          <li>Le recours en justice en cas d'abus</li>
        </ul>

        <h2>Comment porter plainte</h2>
        <p>Les étapes pour déposer une plainte officielle pour cyberviolence en Haïti...</p>
      `,
    },
    {
      id: 3,
      title: 'Témoignage: Surmonter la cyberviolence',
      category: 'Témoignage',
      date: '5 Décembre 2024',
      author: 'Sarah Voltaire',
      authorRole: 'Survivante et militante',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <h2>Mon histoire</h2>
        <p>Il y a deux ans, j'ai été victime d'une campagne de cyberharcèlement intense. Voici comment j'ai traversé cette épreuve et retrouvé ma force.</p>

        <h2>Les premiers signes</h2>
        <p>Tout a commencé par quelques commentaires négatifs sur mes réseaux sociaux...</p>
      `,
    },
  ];

  const article = articles.find(a => a.id === parseInt(id || '1')) || articles[0];

  const relatedArticles = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button */}
        <FadeInUp>
          <Link to="/articles">
            <AnimatedButton className="mb-8 flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300">
              <ArrowLeft className="h-5 w-5" />
              Retour aux articles
            </AnimatedButton>
          </Link>
        </FadeInUp>

        <div className="mx-auto max-w-4xl">
          {/* Article Header */}
          <FadeInUp delay={0.1}>
            <div className="mb-8">
              <span className="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-400">
                {article.category}
              </span>
              
              <h1 className="mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-3xl text-transparent md:text-5xl">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <span>•</span>
                <span>Par {article.author}</span>
              </div>
            </div>
          </FadeInUp>

          {/* Featured Image */}
          <FadeInUp delay={0.2}>
            <motion.div 
              className="mb-12 overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </FadeInUp>

          {/* Article Actions */}
          <FadeInUp delay={0.3}>
            <div className="mb-8 flex items-center justify-between border-b border-t border-gray-800 py-4">
              <div className="flex gap-2">
                <AnimatedButton className="flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                  <Bookmark className="h-4 w-4" />
                  Sauvegarder
                </AnimatedButton>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Partager:</span>
                <AnimatedButton className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                  <Facebook className="h-4 w-4" />
                </AnimatedButton>
                <AnimatedButton className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                  <Twitter className="h-4 w-4" />
                </AnimatedButton>
                <AnimatedButton className="rounded-lg border border-gray-800 bg-gray-900/50 p-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                  <Linkedin className="h-4 w-4" />
                </AnimatedButton>
              </div>
            </div>
          </FadeInUp>

          {/* Article Content */}
          <FadeInUp delay={0.4}>
            <div 
              className="prose prose-invert prose-cyan max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#d1d5db',
              }}
            />
          </FadeInUp>

          {/* Author Info */}
          <FadeInUp delay={0.5}>
            <motion.div 
              className="my-12 rounded-2xl border border-gray-800 bg-gray-900/50 p-6"
              whileHover={{ borderColor: 'rgba(6, 182, 212, 0.5)' }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-2xl text-white">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <h3 className="mb-1 text-lg text-white">{article.author}</h3>
                  <p className="text-sm text-gray-400">{article.authorRole}</p>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <FadeInUp delay={0.6}>
              <div className="mt-16">
                <h2 className="mb-6 text-2xl text-white">Articles similaires</h2>
                <StaggerContainer className="grid gap-6 md:grid-cols-3">
                  {relatedArticles.map((related) => (
                    <StaggerItem key={related.id}>
                      <Link to={`/articles/${related.id}`}>
                        <motion.article
                          className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50"
                          whileHover={{ y: -5 }}
                        >
                          <div className="relative aspect-video overflow-hidden">
                            <ImageWithFallback
                              src={related.image}
                              alt={related.title}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="mb-2 text-white transition-colors group-hover:text-cyan-400">
                              {related.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{related.readTime}</span>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeInUp>
          )}

          {/* CTA */}
          <FadeInUp delay={0.7}>
            <motion.div 
              className="mt-12 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-8 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="mb-2 text-xl text-white">Besoin d'aide ?</h3>
              <p className="mb-6 text-gray-300">
                Si vous êtes victime de cyberviolence, notre équipe est là pour vous soutenir.
              </p>
              <Link to="/centre-aide">
                <AnimatedButton className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-white transition-colors hover:bg-cyan-600">
                  Obtenir de l'aide maintenant
                  <ChevronRight className="h-5 w-5" />
                </AnimatedButton>
              </Link>
            </motion.div>
          </FadeInUp>
        </div>
      </div>

      <style>{`
        .prose h2 {
          color: #06b6d4;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          color: #14b8a6;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        .prose ul, .prose ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #fff;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
