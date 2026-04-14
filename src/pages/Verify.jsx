import React from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, Share2, Upload } from 'lucide-react';
import './Verify.css';

export default function Verify() {
  return (
    <div className="container view-container">
      <div className="verify-header">
        <div className="verify-title-section">
          <h1 className="page-title">
            VERIFICAR<br/>
            <span className="text-red">INFORMAÇÃO</span>
          </h1>
          <p className="page-subtitle">
            A nossa missão é combater a desinformação. Insira o link ou o
            texto da notícia para validar a sua veracidade através do sistema LupaNgola.
          </p>
        </div>
        
        <div className="scanner-section">
          <label className="scanner-label">SCANNER DIGITAL</label>
          <div className="scanner-input-wrapper">
            <input 
              type="text" 
              placeholder="Cole o link, texto ou carregue uma imagem..." 
              className="scanner-input"
            />
            <div className="scanner-actions">
               <label className="upload-btn" title="Carregar Imagem para Verificar IA">
                 <input type="file" accept="image/*" style={{display: 'none'}} />
                 <Upload size={20} />
               </label>
               <button className="scanner-btn"><Search size={20} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="status-cards">
        <div className="status-card circle-layout green">
          <div className="percent-text green-text">85%</div>
          <div className="status-text">
            <strong>VERDADEIRO</strong>
            <span>PROBABILIDADE</span>
          </div>
        </div>
        <div className="status-card circle-layout yellow">
          <div className="percent-text yellow-text">12%</div>
          <div className="status-text">
            <strong>DUVIDOSO</strong>
            <span>INCERTEZA DETETADA</span>
          </div>
        </div>
        <div className="status-card circle-layout red">
          <div className="percent-text red-text">3%</div>
          <div className="status-text">
            <strong>FALSO / IA</strong>
            <span>MANIPULAÇÃO DETETADA</span>
          </div>
        </div>
      </div>

      <div className="section-title-wrapper">
        <div className="red-bar"></div>
        <h2>ÚLTIMAS VERIFICAÇÕES</h2>
      </div>

      <div className="verifications-grid">
        <div className="verification-main-card">
          <div className="verification-image">
            {/* Fallback pattern */}
            <div className="badge-overlay badge-false"><XCircle size={14}/> FALSO</div>
          </div>
          <div className="verification-content">
            <span className="category">ECONOMIA • HÁ 2 HORAS</span>
            <h3>Rumores sobre desvalorização do Kwanza em 50% até ao final do mês.</h3>
            <p>Partilha viral em grupos de WhatsApp exige que o BNA prepare uma desvalorização massiva...</p>
            <div className="verification-footer">
               <div className="verifier-info">
                 <div className="avatar micro">JC</div>
                 <span>Verificado por João Carlos</span>
               </div>
               <button className="btn-text">VER ANÁLISE COMPLETA</button>
            </div>
          </div>
        </div>

        <div className="verification-side-cards">
           <div className="side-card">
             <span className="badge-small green-bg">SAÚDE</span>
             <h4>Campanha de vacinação nacional confirmada para Junho.</h4>
             <div className="status-inline green-text"><CheckCircle size={14}/> VERDADEIRO</div>
             <p>O ministério da saúde confirmou a campanha...</p>
             <button className="btn-outline">PARTILHAR <Share2 size={14}/></button>
           </div>
           
           <div className="side-card">
             <span className="badge-small yellow-bg">TECNOLOGIA</span>
             <h4>Implementação do 5G em todas as províncias este ano.</h4>
             <div className="status-inline yellow-text"><AlertTriangle size={14}/> DUVIDOSO</div>
             <p>Existem de facto planos da Unitel, mas prazos...</p>
             <button className="btn-outline">PARTILHAR <Share2 size={14}/></button>
           </div>
        </div>
      </div>
      
      <div className="banner-join">
        <div className="banner-content">
          <h3>SEJA UM VERIFICADOR</h3>
          <p>Ajuda na linha da frente e combate a desinformação...</p>
          <button className="btn-primary" style={{width: 'auto', marginTop: '16px'}}>INSCREVA-SE</button>
        </div>
      </div>

    </div>
  );
}
