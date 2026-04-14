import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Zap, Search } from 'lucide-react';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-wrapper">
      {/* LANDING NAVIGATION */}
      <nav className="landing-nav container">
        <div className="logo" style={{ fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px', color: 'var(--text-dark)' }}>
           LupaNgola
        </div>
        <div className="landing-nav-links">
           <a href="#sobre">Quem Somos</a>
           <a href="#como-funciona">Como Funciona</a>
        </div>
        <div className="landing-nav-actions">
           <Link to="/login" className="btn-text" style={{marginRight: '16px'}}>Entrar</Link>
           <Link to="/register" className="btn-primary" style={{width: 'auto'}}>CRIAR CONTA</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section text-center">
        <div className="container">
          <span className="badge">PLATAFORMA NACIONAL</span>
          <h1 className="hero-heading">
            A Verdade em <br /> Suas <span className="text-red">Mãos.</span>
          </h1>
          <p className="hero-description mx-auto">
            A LupaNgola é o movimento digital que une a juventude angolana no combate 
            feroz à desinformação. Informa-te, verifica e partilha o que é real.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary" style={{width: '200px'}}>COMEÇAR AGORA</Link>
            <Link to="/login" className="btn-outline-dark" style={{width: '200px', display: 'flex', justifyContent: 'center'}}>JÁ TENHO CONTA</Link>
          </div>
        </div>
      </header>

      {/* QUEM SOMOS SECTION */}
      <section id="sobre" className="about-section container">
        <div className="about-grid">
           <div className="about-text">
             <div className="red-bar" style={{width: '4px', height: '40px', backgroundColor: 'var(--primary-red)'}}></div>
             <h2 style={{fontSize: '2.5rem', marginBottom: '24px'}}>Quem Somos</h2>
             <p>A <strong>LupaNgola</strong> não é apenas uma rede social. É um mecanismo de defesa coletivo e uma comunidade unida por Angola.</p>
             <p>Acreditamos que, quando informada de forma correta e sem ruído, uma Nação é inquebrável. O nosso foco principal é ajudar e educar a "Geração Z" na verificação ativa de factos (<em>Fact-Checking</em>), promoção de pensamento crítico e na documentação cívica diária nas ruas de Luanda e além, combatendo assim as "Fake News".</p>
           </div>
           <div className="about-visual">
              <div className="graphic-placeholder">
                 <ShieldCheck size={120} color="rgba(255,255,255,0.1)" style={{position: 'absolute', right: '-20px', bottom: '-20px'}} />
                 <h3>A nossa voz <br/><span style={{color: 'var(--primary-red)'}}>não</span> tem preço.</h3>
              </div>
           </div>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section id="como-funciona" className="how-section">
        <div className="container text-center">
          <h2 style={{fontSize: '2.5rem', marginBottom: '16px'}}>Como Funciona</h2>
          <p className="hero-description mx-auto" style={{marginBottom: '64px'}}>Três passos simples para integrar o movimento e causar impacto real.</p>
          
          <div className="steps-grid">
             <div className="step-card">
                <div className="step-icon"><Users size={32} /></div>
                <h3>1. Regista-te</h3>
                <p>Cria a tua conta e junta-te a milhares de jovens e especialistas angolanos focados no bem comum.</p>
             </div>
             
             <div className="step-card">
                <div className="step-icon"><Search size={32} /></div>
                <h3>2. Analisa & Verifica</h3>
                <p>Recebeste um rascunho suspeito no WhatsApp? Passa no nosso Scanner Digital para descobrir se a informação é Verdadeira, Duvidosa ou Falsa.</p>
             </div>

             <div className="step-card">
                <div className="step-icon"><Zap size={32} /></div>
                <h3>3. Amplifica</h3>
                <p>Usa o Manifesto Criativo para construir publicações poderosas ou partilha de forma orgânica no nosso feed global.</p>
             </div>
           </div>
        </div>
      </section>

      {/* OBTER INFORMAÇÕES SECTION */}
      <section className="info-section">
        <div className="container text-center">
          <div className="info-content mx-auto">
            <h2 className="info-title">Obter Informações</h2>
            <p className="info-desc">
              Obtenha todas as informações necessárias sobre como tratar o seu Bilhete de Identidade, Passaporte e outras documentações vitais.
            </p>
            {/* Como não há um link fornecido ainda, usaremos um botão href como placeholder ou redirecionamento*/}
            <button className="btn-primary" style={{width: 'auto', padding: '12px 32px', fontSize: '1rem'}}>
              SABER MAIS
            </button>
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <footer className="landing-footer text-center">
        <div className="container">
           <h2 style={{color: 'white', marginBottom: '24px'}}>Pronto para construir a nova geração?</h2>
           <Link to="/register" className="btn-primary" style={{width: 'auto', padding: '16px 40px', fontSize: '1.1rem'}}>CRIAR CONTA</Link>
           <p style={{marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem'}}>© 2024 LupaNgola Platform. The Kinetic Editorial. A Manifest for Angolan Youth.</p>
        </div>
      </footer>
    </div>
  );
}
