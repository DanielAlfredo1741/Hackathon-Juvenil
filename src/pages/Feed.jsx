import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, PlayCircle } from 'lucide-react';
import './Feed.css';

export default function Feed() {
   return (
      <div className="container view-container feed-page-layout">
         {/* LEFT SIDEBAR - TENDÊNCIAS */}
         <aside className="feed-left-sidebar">
            <div className="sidebar-section bg-white card-rounded">
               <h3 className="section-title">TENDÊNCIAS</h3>

               <div className="trend-item">
                  <span className="trend-meta">#AngolaVence</span>
                  <h4>A Revolução Digital em Luanda</h4>
                  <span className="trend-stats">12.4K INTERAÇÕES</span>
               </div>

               <div className="trend-item">
                  <span className="trend-meta">VozDoPovo</span>
                  <h4>Manifesto da Juventude</h4>
                  <span className="trend-stats">8.1K INTERAÇÕES</span>
               </div>

               <div className="trend-item">
                  <span className="trend-meta">EducaçãoLive</span>
                  <h4>Grafite como Protesto</h4>
                  <span className="trend-stats">3.2K INTERAÇÕES</span>
               </div>
            </div>

            <div className="promo-banner red-gradient">
               <h2 style={{ fontSize: '1.2rem', lineHeight: '1.3', marginBottom: '12px' }}>Obter Informações</h2>
               <p>Obtenha todas as informações necessárias sobre como tratar o seu Bilhete de Identidade, Passaporte e outras documentações vitais.</p>
               <button className="btn-white-fill">SABER MAIS</button>
               {/* abstract megaphone graphic simulation */}
               <div className="abstract-graphic"></div>
            </div>
         </aside>

         {/* MAIN FEED */}
         <main className="feed-main-content">
            <div className="create-post-prompt mb-24 bg-white card-rounded">
               <div className="avatar-small dummy-user-1"></div>
               <div className="prompt-input">O que está a acontecer em Luanda?</div>
            </div>

            <div className="post-item bg-white card-rounded">
               <div className="post-header">
                  <div className="post-author">
                     <div className="avatar-small dummy-user-2"></div>
                     <div>
                        <h4>Mauro Silva</h4>
                        <span className="post-time">HÁ 2 HORAS • LUANDA</span>
                     </div>
                  </div>
                  <button className="icon-btn"><MoreHorizontal size={20} /></button>
               </div>

               <p className="post-text">
                  A energia das ruas de Luanda nunca esteve tão vibrante. Estamos a construir o futuro que nos prometeram, um pixel de cada vez. 🇦🇴
               </p>

               <div className="post-media-container">
                  <span className="media-badge">DOCUMENTÁRIO</span>
                  <div className="media-market-luanda"></div>
               </div>

               <div className="post-actions-row">
                  <div className="action-group">
                     <button className="action-btn"><Heart size={18} /> 2.4K</button>
                     <button className="action-btn"><MessageCircle size={18} /> 158</button>
                     <button className="action-btn"><Share2 size={18} /></button>
                  </div>
                  <span className="views-count">O 25.1K FORAM VISTOS</span>
               </div>
            </div>

            {/* Editorial Featured Post */}
            <div className="editorial-post card-rounded">
               <div className="post-header" style={{ marginBottom: '16px' }}>
                  <div className="post-author text-white">
                     <div className="avatar-small l-logo">L</div>
                     <div>
                        <h4 style={{ color: 'white' }}>LupaNgola Editorial</h4>
                        <span className="post-time" style={{ color: 'rgba(255,255,255,0.7)' }}>DESTAQUE • MANIFESTO</span>
                     </div>
                  </div>
               </div>
               <h2>"O SILÊNCIO NÃO É UMA OPÇÃO PARA A GERAÇÃO Z"</h2>
               <p>
                  Não somos apenas o amanhã. Somos o agora. A nossa voz é a única ferramenta capaz de derrubar as barreiras da desigualdade.
               </p>
               <div className="editorial-actions">
                  <button className="btn-primary" style={{ width: 'auto' }}>LER ARTIGO</button>
                  <button className="btn-outline-white">PARTILHAR</button>
               </div>
               {/* Background pattern */}
               <div className="question-mark-bg">?</div>
            </div>

            {/* Video Post */}
            <div className="post-item bg-white card-rounded">
               <div className="post-header">
                  <div className="post-author">
                     <div className="avatar-small dummy-user-3"></div>
                     <div>
                        <h4>Kianda Digital</h4>
                        <span className="post-time">HÁ 3 HORAS • ESTÚDIO</span>
                     </div>
                  </div>
                  <button className="icon-btn"><MoreHorizontal size={20} /></button>
               </div>

               <div className="post-media-container video-post">
                  <div className="video-player">
                     <PlayCircle size={48} color="white" />
                  </div>
                  <div className="video-overlay-info">
                     <h4>Novos ritmos da periferia: A evolução do Kuduro em 2024</h4>
                     <div className="video-actions-vert">
                        <div className="vert-action"><Heart size={20} /></div>
                        <div className="vert-action"><Share2 size={20} /></div>
                     </div>
                  </div>
               </div>
            </div>
         </main>

         {/* RIGHT SIDEBAR */}
         <aside className="feed-right-sidebar">
            <div className="sidebar-section bg-white card-rounded mb-24">
               <h3 className="section-title">NOTÍCIAS DE ANGOLA</h3>

               <div className="suggested-user" style={{ alignItems: 'flex-start' }}>
                  <div className="s-user-info">
                     <h4 style={{ marginBottom: '4px', lineHeight: '1.3' }}>Nova parceria impulsiona startups em Luanda</h4>
                     <span style={{ fontSize: '0.7rem' }}>Jornal de Angola • Há 1h</span>
                  </div>
                  <button className="btn-text text-red" style={{ marginLeft: '8px' }}>LER</button>
               </div>

               <div className="suggested-user" style={{ alignItems: 'flex-start' }}>
                  <div className="s-user-info">
                     <h4 style={{ marginBottom: '4px', lineHeight: '1.3' }}>Crescimento do e-commerce atinge recorde nacional</h4>
                     <span style={{ fontSize: '0.7rem' }}>MenosFios • Há 3h</span>
                  </div>
                  <button className="btn-text text-red" style={{ marginLeft: '8px' }}>LER</button>
               </div>
            </div>

            <div className="live-card">
               <div className="live-indicator">
                  <span className="pulse-dot"></span> LUPA LIVE
               </div>
               <h4 className="live-title">Discussão: O impacto da IA na arte Angolana</h4>
               <div className="live-participants">
                  <div className="avatar-micro dummy-user-1"></div>
                  <div className="avatar-micro dummy-user-2 offset-1"></div>
                  <div className="avatar-micro offset-2 more-av">+42</div>
               </div>
               <button className="btn-primary btn-chat">ENTRAR NO CHAT</button>
            </div>
         </aside>
      </div>
   );
}
