import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMagnifyingGlass, HiHome, HiPlusCircle, HiFilm, HiUser } from 'react-icons/hi2';

const Explore = () => {
  const navigate = useNavigate();
  const searchPageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '100vw',
    maxWidth: '100%',
    height: '100vh',
    margin: '20px auto',
    padding: '10px',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    overflow:'hidden',
  };

  return (
    <div style={searchPageStyle}>
      {/* Search Bar */}
      <div style={{ background: '#262626', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <HiOutlineMagnifyingGlass color="#888" size={20} />
        <input type="text" placeholder="Search" style={{ background: 'transparent', border: 'none', color: '#fff', marginLeft: '10px', width: '100%' }} />
      </div>

      {/* Explore Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', flex: 1, overflowY: 'auto' }}>
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{ 
            width: '100%', 
            aspectRatio: '1/1', 
            background: '#333', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            {/* Logic to simulate larger "featured" tiles could go here */}
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiHome size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineMagnifyingGlass size={24} color="#fff" />
        </button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiPlusCircle size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiFilm size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiUser size={24} color="#888" />
        </button>
      </nav>
    </div>
  );
};

export default Explore;