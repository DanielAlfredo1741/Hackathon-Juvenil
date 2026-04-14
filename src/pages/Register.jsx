import React from 'react';
import { Mail, Facebook, Eye, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-left">
        <div className="left-content">
          <span className="badge">NOVA GERAÇÃO</span>
          <h1 className="hero-title">
            Assume o Teu <br />
            <span className="text-red">Poder.</span>
          </h1>
          <p className="hero-subtitle">
            Cria a tua conta e junta-te a milhares de jovens a construir um ecossistema livre de desinformação. O futuro começa com um clique.
          </p>
          <div className="editorial-line">
            <span className="line"></span>
            <span className="gold-text">LUPANGOLA DIGITAL</span>
          </div>
        </div>
        <div className="hero-image-overlay register-hero"></div>
      </div>
      
      <div className="register-right">
        <div className="register-form-container">
          <Link to="/" className="back-home-link">← Voltar ao Início</Link>
          <h2>Criar Conta</h2>
          <p className="signup-prompt">Junta-te a nós hoje. Já tens conta? <Link to="/login" className="link-red">Entrar aqui</Link></p>

          <form className="form">
            <div className="input-group">
              <label>NOME COMPLETO</label>
              <input type="text" placeholder="Como te devemos chamar?" className="input-field" />
            </div>

            <div className="input-group">
              <label>E-MAIL</label>
              <input type="email" placeholder="teu@email.com" className="input-field" />
            </div>

            <div className="input-group">
              <label>PALAVRA-PASSE</label>
              <div className="password-wrapper">
                <input type="password" placeholder="••••••••" className="input-field" />
                <Eye size={20} className="eye-icon" />
              </div>
            </div>

            <div className="input-group">
              <label>CONFIRMAR PALAVRA-PASSE</label>
              <div className="password-wrapper">
                <input type="password" placeholder="••••••••" className="input-field" />
                <Eye size={20} className="eye-icon" />
              </div>
            </div>

            <div className="terms-agreement">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Concordo com os <strong>Termos de Serviço</strong> e <strong>Política de Privacidade</strong>.</label>
            </div>

            <Link to="/feed" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
              CRIAR CONTA LUPANGOLA
            </Link>
          </form>

          <div className="divider" style={{marginTop: '32px'}}>
            <span>OU REGISTAR COM</span>
          </div>

          <div className="social-login">
            <button className="btn-social">
               <span>Google</span>
            </button>
            <button className="btn-social">
               <Facebook size={18} /> <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
