import React from 'react';
import { FileText, Plane, Fingerprint, CreditCard, ChevronRight } from 'lucide-react';
import './Information.css';

export default function Information() {
  return (
    <div className="container info-page-container">
      <div className="info-header">
        <h1 className="page-title">
          DOCUMENTOS<br/>
          <span className="text-red">VITAIS</span>
        </h1>
        <p className="page-subtitle">
          Consulte aqui todos os passos, requisitos e procedimentos oficiais para 
          tratar das suas documentações em Angola de forma rápida e segura.
        </p>
      </div>

      <div className="documents-grid">
        {/* BILHETE DE IDENTIDADE */}
        <div className="doc-card">
          <div className="doc-icon-wrapper red-bg">
            <Fingerprint size={32} color="white" />
          </div>
          <h2>Bilhete de Identidade (BI)</h2>
          <p className="doc-description">
            O documento nacional de identificação que comprova a identidade civil do 
            cidadão angolano, obrigatório para todos os cidadãos.
          </p>
          
          <div className="doc-section">
            <h3>Documentos Necessários (1ª Vez)</h3>
            <ul className="doc-list">
              <li>Cópia Integral do Assento de Nascimento ou Certidão de Nascimento narrativa completa.</li>
              <li>Presença física obrigatória (recolha de dados biométricos e fotografia).</li>
              <li>Atestado de Residência (dependendo do departamento).</li>
            </ul>
          </div>

          <div className="doc-section">
            <h3>Renovação ou 2ª Via</h3>
            <ul className="doc-list">
              <li>O Bilhete de Identidade caducado ou a expirar.</li>
              <li>Em caso de extravio/roubo: Necessária a Participação da Polícia.</li>
            </ul>
          </div>
          
          <div className="doc-footer">
             <span className="doc-agency">Entidade: Ministério da Justiça</span>
             <button className="btn-outline-small">Ver Agendamentos <ChevronRight size={14}/></button>
          </div>
        </div>

        {/* PASSAPORTE */}
        <div className="doc-card">
          <div className="doc-icon-wrapper dark-bg">
            <Plane size={32} color="white" />
          </div>
          <h2>Passaporte Ordinário</h2>
          <p className="doc-description">
            Documento eletrónico de viagem que permite o trânsito internacional do cidadão 
            e garante o seu retorno ao território nacional em segurança.
          </p>
          
          <div className="doc-section">
            <h3>Requisitos Básicos</h3>
            <ul className="doc-list">
              <li>Cópia do Bilhete de Identidade atualizado.</li>
              <li>Formulário oficial de requisição devidamente preenchido.</li>
              <li>Comprovativo de pagamento da taxa migratória estatutária.</li>
              <li>Declaração de serviço / Certificado de habilitações (opcional/consoante perfil do cidadão).</li>
            </ul>
          </div>

          <div className="doc-section">
            <h3>Onde tratar?</h3>
            <p className="doc-text">
              Nos balcões de atendimento do <strong>SME (Serviço de Migração e Estrangeiros)</strong>, Postos MIREX no exterior ou através de agendamento no portal SEPE.
            </p>
          </div>

          <div className="doc-footer">
             <span className="doc-agency">Entidade: SME Angola</span>
             <button className="btn-outline-small">Aceder ao Portal <ChevronRight size={14}/></button>
          </div>
        </div>
        
        {/* OUTROS DOCUMENTOS */}
        <div className="doc-card full-width">
           <div className="doc-icon-wrapper outline-bg">
             <FileText size={32} color="var(--text-dark)" />
           </div>
           <h2>Outras Documentações e Portais Fixos</h2>
           <div className="other-docs-grid">
              <div className="other-doc-item">
                <CreditCard size={24} className="other-icon"/>
                <div>
                  <h4>Registo de NIF (AGT)</h4>
                  <p>Número de Identificação Fiscal para cidadãos e empresas. Indispensável para a inserção formal na economia, aberturas bancárias e cumprimento de obrigações tributárias.</p>
                </div>
              </div>
              <div className="other-doc-item">
                <FileText size={24} className="other-icon"/>
                <div>
                  <h4>Registo Criminal</h4>
                  <p>Certificado oficial que atesta os antecedentes e não condenação judicial. Obrigatório no acesso a concursos, novos empregos, processos de visto e outras validações governamentais.</p>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
