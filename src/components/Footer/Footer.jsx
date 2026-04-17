import { siteConfig, footer } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Logo */}
        <a href="#hero" className="footer__logo" onClick={e => { e.preventDefault(); scrollTop(); }} aria-label="Back to top">
          <span className="footer__logo-bracket">&lt;</span>
          <span className="footer__logo-name">{siteConfig.name}</span>
          <span className="footer__logo-bracket">/&gt;</span>
        </a>

        {/* Credit */}
        <p className="footer__credit">
          {footer.text} · {footer.year}
          <br />
          Built with{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
          {' + '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
        </p>

        {/* Back to top */}
        <button className="footer__back-top" onClick={scrollTop} aria-label="Scroll back to top">
          ↑ top
        </button>
      </div>
    </footer>
  );
}
