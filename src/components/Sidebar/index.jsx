import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // CSS dosyanızı bağlayın

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); // Sidebar'ın durumu

  // Sayfa yüklendiğinde animasyonu tetikle
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500); // 0.5 saniye sonra sidebar açılır
    return () => clearTimeout(timer); // Temizlik
  }, []);

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="sidebar-logo">
        <img src="./public/images/desmellLogo.svg" alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
