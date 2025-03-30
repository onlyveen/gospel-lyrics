import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongDetails from './components/SongDetails';
import Layout from './components/Layout';
import { SidebarProvider } from './utils/SidebarContext';
import HomePage from './components/HomePage'; // New Homepage Component

function App() {
  return (
    <Router>
      <SidebarProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<SongDetails />} />
          </Routes>
        </Layout>
      </SidebarProvider>
    </Router>
  );
}

export default App;
