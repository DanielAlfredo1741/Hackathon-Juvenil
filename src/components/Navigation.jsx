import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Bell, User, Home, PlusCircle, ShieldCheck, Users, Moon, Sun } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check initial preference
    const savedTheme = localStorage.getItem('ngola-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ngola-theme', newTheme);
  };

  return (
    <>
      <nav className="top-nav">
        <div className="nav-container container">
          <Link to="/feed" className="logo">
            <span style={{ fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px' }}>LupaNgola</span>
          </Link>

          <div className="nav-links">
            <NavLink to="/feed" className={({ isActive }) => isActive ? "active-link" : ""}>Noticias</NavLink>
            <NavLink to="/studio" className={({ isActive }) => isActive ? "active-link" : ""}>Postagem</NavLink>
            <NavLink to="/verify" className={({ isActive }) => isActive ? "active-link" : ""}>Verificar</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ""}>Perfil</NavLink>
          </div>

          <div className="nav-icons">
            <button className="icon-btn" onClick={toggleTheme} title="Alternar Modo Claro/Escuro">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="icon-btn"><Search size={20} /></button>
            <button className="icon-btn"><Bell size={20} /></button>
            <Link to="/profile" className="profile-btn">
              <div className="avatar-placeholder"><User size={16} /></div>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bottom-nav">
        <NavLink to="/feed" className={({ isActive }) => isActive ? "tab active-tab" : "tab"}>
          <Home size={22} className="tab-icon" />
          <span>FEED</span>
        </NavLink>
        <NavLink to="/studio" className={({ isActive }) => isActive ? "tab active-tab" : "tab"}>
          <div className="studio-icon-wrapper">
            <PlusCircle size={22} />
          </div>
          <span>STUDIO</span>
        </NavLink>
        <NavLink to="/verify" className={({ isActive }) => isActive ? "tab active-tab" : "tab"}>
          <ShieldCheck size={22} className="tab-icon" />
          <span>VERIFY</span>
        </NavLink>
        <NavLink to="/connect" className={({ isActive }) => isActive ? "tab active-tab" : "tab"}>
          <Users size={22} className="tab-icon" />
          <span>CONNECT</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "tab active-tab" : "tab"}>
          <User size={22} className="tab-icon" />
          <span>PROFILE</span>
        </NavLink>
      </nav>
    </>
  );
}
