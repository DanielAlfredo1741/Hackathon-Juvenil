import React from 'react';
import { Camera, Clock, Music, Image as ImageIcon, Plus } from 'lucide-react';
import './Studio.css';

export default function Studio() {
  return (
    <div className="container view-container">
      <div className="studio-header">
         <h1 className="page-title">
            MANIFESTO<br/>
            <span className="text-red">CRIATIVO</span>
         </h1>
         <p className="page-subtitle">
            Partilha a tua visão. Transforma a realidade de Angola através do<br/>movimento digital.
         </p>
      </div>

      <div className="studio-layout">
         <div className="studio-preview">
            <div className="preview-image-container">
               {/* Tool actions top right */}
               <div className="preview-tools">
                  <button className="tool-btn"><Camera size={18} color="white" /></button>
                  <button className="tool-btn"><Clock size={18} color="white" /></button>
               </div>
               
               {/* Music Tag bottom left */}
               <div className="music-tag">
                  <Music size={14} className="music-icon" />
                  KIZOMBA FUTURISTA - MIX #04
               </div>
            </div>
         </div>
         
         <div className="studio-controls">
            <div className="control-group">
               <label className="section-label">FORMATO DO CONTEÚDO</label>
               <div className="format-tabs">
                  <button className="format-tab active">VÍDEO</button>
                  <button className="format-tab">FOTO</button>
                  <button className="format-tab">TEXTO</button>
               </div>
            </div>

            <div className="control-group">
               <label className="section-label">MANIFESTO</label>
               <div className="manifesto-editor">
                  <textarea 
                    className="editor-textarea" 
                    placeholder="Escreve a tua legenda aqui..."
                  ></textarea>
                  <div className="tags-container">
                    <span className="hashtag gold-bg">#ANGOLAVENCE</span>
                    <span className="hashtag gold-bg">#LUANDACITY</span>
                    <button className="btn-add-tag"><Plus size={12}/> ADICIONAR TAG</button>
                  </div>
               </div>
            </div>

            <div className="media-buttons">
               <button className="media-btn">
                  <ImageIcon size={20} />
                  <span>GALERIA</span>
               </button>
               <button className="media-btn">
                  <Music size={20} />
                  <span>MÚSICA</span>
               </button>
            </div>

            <button className="btn-primary btn-publish">
               PUBLICAR AGORA
            </button>
         </div>
      </div>
    </div>
  );
}
