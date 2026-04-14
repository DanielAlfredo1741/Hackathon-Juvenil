import React from 'react';
import { Mail, Facebook, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-content">
          <span className="badge">MANIFESTO DIGITAL</span>
          <h1 className="hero-title">
            O Futuro é <br />
            <span className="text-red">Cinético.</span>
          </h1>
          <p className="hero-subtitle">
            Junta-te à plataforma que amplifica a voz da juventude
            angolana. Informação, cultura e acção social num só lugar.
          </p>
          <div className="editorial-line">
            <span className="line"></span>
          </div>
        </div>
        {/* Placeholder for the boy image - will be set via CSS background or img tag */}
        <div className="hero-image-overlay"></div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Bem-vindo de volta.</h2>
          <p className="signup-prompt">Ainda não tens conta? <a href="#" className="link-red">Criar conta agora</a></p>

          <div className="social-login">
            <button className="btn-social">
              <span>Google</span>
            </button>
            <button className="btn-social">
              <Facebook size={18} /> <span>Facebook</span>
            </button>
          </div>

          <div className="divider">
            <span>OU USAR EMAIL</span>
          </div>

          <form className="form">
            <div className="input-group">
              <label>E-MAIL</label>
              <input type="email" placeholder="teu@email.com" className="input-field" />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>PALAVRA-PASSE</label>
                <a href="#" className="forgot-password">ESQUECESTE-TE?</a>
              </div>
              <div className="password-wrapper">
                <input type="password" placeholder="••••••••" className="input-field" />
                <Eye size={20} className="eye-icon" />
              </div>
            </div>

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar-me neste dispositivo</label>
            </div>

            <Link to="/feed" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
              ENTRAR NO EDITORIAL
            </Link>
          </form>

          <div className="security-badge">
            🛡️ ACESSO SEGURO & ENCRIPTADO
          </div>
        </div>
      </div>
    </div>
  );
}
