import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Eye, CheckSquare, Users, Zap, Award, CheckCircle, Volume2, Heart, MessageCircle, ArrowRight, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="container view-container">
      <div className="profile-header-card">
        <div className="profile-avatar-large">
           <div className="avatar-dummy"></div>
        </div>
        <div className="profile-info">
           <div className="name-row">
             <h1>Kieza Manuel</h1>
             <span className="badge-verified">VERIFICADO</span>
           </div>
           <p className="bio">
             Activista Digital & Contadora de Histórias. Focada em transparência governamental e o empoderamento da juventude em Luanda.
           </p>
           <div className="profile-actions">
             <button className="btn-primary" style={{width: 'auto'}}>EDITAR PERFIL</button>
             <button className="btn-outline-dark" style={{width: 'auto'}}>PARTILHAR IMPACTO</button>
             <Link to="/" className="btn-outline-dark" style={{width: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-red)', borderColor: 'var(--primary-red)', textDecoration: 'none'}}>
                <LogOut size={16}/> SAIR
             </Link>
           </div>
        </div>
      </div>

      <div className="stats-grid">
         <div className="stat-card">
            <Eye size={20} className="stat-icon red" />
            <h2>12.4K</h2>
            <span>ALCANCE DE IMPACTO</span>
         </div>
         <div className="stat-card">
            <CheckSquare size={20} className="stat-icon gold" />
            <h2>48</h2>
            <span>DENÚNCIAS VERIFICADAS</span>
         </div>
         <div className="stat-card">
            <Users size={20} className="stat-icon dark" />
            <h2>856</h2>
            <span>CONEXÕES ACTIVAS</span>
         </div>
         <div className="stat-card">
            <Zap size={20} className="stat-icon red" />
            <h2>92</h2>
            <span>PONTOS DE ACÇÃO</span>
         </div>
      </div>

      <div className="profile-content-layout">
         <aside className="profile-sidebar">
            <div className="sidebar-section">
               <h3 className="sidebar-title">CATEGORIAS</h3>
               <ul className="category-list">
                  <li className="active"><span className="dot"></span> Publicações</li>
                  <li><span className="dot invisible"></span> Media</li>
                  <li><span className="dot invisible"></span> Salvos</li>
               </ul>
            </div>
            
            <div className="sidebar-section bg-white card-rounded">
               <h3 className="small-title">MEDALHAS DE MÉRITO</h3>
               <div className="badges-list">
                  <div className="badge-item gold-bg"><Award size={18} color="#927116"/></div>
                  <div className="badge-item red-bg"><CheckCircle size={18} color="#D92635"/></div>
                  <div className="badge-item gray-bg"><Volume2 size={18} color="#475569"/></div>
               </div>
            </div>
         </aside>

         <div className="profile-main-feed">
            <div className="post-card picture-post">
               <div className="post-image-placeholder">
                  <div className="skyline-art"></div>
               </div>
               <div className="post-content-right">
                 <div className="post-meta">
                   <span className="category-badge bg-red text-white">JUSTIÇA SOCIAL</span>
                   <span className="date-text">12 Out 2024</span>
                 </div>
                 <h3>O Direito à Água na Periferia de Luanda</h3>
                 <p>Análise profunda sobre os novos projectos de infraestrutura e o seu impacto real nas comunidades do Cazenga.</p>
                 <div className="post-footer">
                   <div className="post-actions">
                     <span className="action-stat"><Heart size={16}/> 1.2K</span>
                     <span className="action-stat"><MessageCircle size={16}/> 84</span>
                   </div>
                   <ArrowRight size={20} className="arrow-btn" />
                 </div>
               </div>
            </div>

            <div className="post-card text-post">
               <div className="post-meta">
                  <span className="category-badge text-gold">MANIFESTO</span>
                  <span className="date-text">08 Out 2024</span>
               </div>
               <h3 className="quote-style">"A nossa voz não é apenas um eco, é a semente de uma nova Angola."</h3>
               <p>Reflexões sobre o papel da juventude na construção de uma democracia participativa e digital.</p>
               <a href="#" className="link-read-more">Ler Manifesto Completo</a>
            </div>
         </div>
      </div>
    </div>
  );
}
