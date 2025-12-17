import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { ArticlesPage } from './components/pages/ArticlesPage';
import { ArticleDetailPage } from './components/pages/ArticleDetailPage';
import { InfosPage } from './components/pages/InfosPage';
import { UserPage } from './components/pages/UserPage';
import { HelpCenterPage } from './components/pages/HelpCenterPage';
import { AboutPage } from './components/pages/AboutPage';
import { FormationPage } from './components/pages/FormationPage';
import { LoginPage } from './components/pages/LoginPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="/infos" element={<InfosPage />} />
          <Route path="/formation" element={<FormationPage />} />
          <Route path="/utilisateur" element={<UserPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/centre-aide" element={<HelpCenterPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}