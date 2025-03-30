import React from 'react';
import Sidebar from './Sidebar';
import "../styles/main.scss"

export default function Layout({ children }) {
  return (
    <div className="page">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
