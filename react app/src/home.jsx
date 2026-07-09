import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHome, HiMagnifyingGlass, HiPlusCircle, HiFilm, HiUser, HiHeart, HiChatBubbleLeft, HiPaperAirplane, HiBookmark } from 'react-icons/hi2';

const Home = () => {
  const navigate = useNavigate();

  // Shared style for uniform header buttons
  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: '24px',
    height: '24px'
  };

  return (
    <div className="device-frame" style={{ display: 'flex', flexDirection: 'column', background: '#000', color: '#fff', height: '100vh' }}>
      
      {/* 1. Header */}
      <header style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0 }}>Liminal</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={iconButtonStyle}>
            <HiHeart size={24} />
          </button>
          <button onClick={() => navigate('/message')} style={iconButtonStyle}>
            <HiChatBubbleLeft size={24} />
          </button>
        </div>
      </header>

      {/* 2. Stories Row */}
      <div style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid #262626', overflowX: 'auto' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #e1306c', flexShrink: 0 }} />
        ))}
      </div>

      {/* 3. Feed Area */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#333' }} />
            <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>username</span>
          </div>
          <div style={{ width: '100%', height: '300px', background: '#1a1a1a' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <HiHeart size={24} />
              <HiChatBubbleLeft size={24} />
              <HiPaperAirplane size={24} />
            </div>
            <HiBookmark size={24} />
          </div>
          <p style={{ margin: 0, fontWeight: 'bold' }}>10,547 Likes</p>
          <p style={{ margin: '5px 0' }}><strong>username</strong> Lorem ipsum dolor sit amet...</p>
        </div>
      </div>

      {/* 4. Bottom Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #262626' }}>
        {[
          { icon: HiHome, path: '/home' },
          { icon: HiMagnifyingGlass, path: '/explore' },
          { icon: HiPlusCircle, path: '/post' },
          { icon: HiFilm, path: '/reels' },
          { icon: HiUser, path: '/profile' }
        ].map((item, idx) => (
          <button key={idx} onClick={() => navigate(item.path)} style={iconButtonStyle}>
            <item.icon size={24} />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Home;