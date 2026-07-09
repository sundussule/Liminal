import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiHome, HiMagnifyingGlass, HiPlusCircle, HiFilm, HiUser, HiHeart, HiChatBubbleLeft, HiPaperAirplane, HiBookmark } from 'react-icons/hi2';
import PostCard from './PostCard'; // Make sure this path is correct

const Home = () => {
  const navigate = useNavigate();

  const iconButtonStyle = {
    background: 'none', border: 'none', cursor: 'pointer', padding: '0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', width: '24px', height: '24px'
  };

  return (
    <div className="device-frame" style={{ display: 'flex', flexDirection: 'column', background: '#000', color: '#fff', height: '100vh' }}>
      <header style={{ padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'cursive', margin: 0 }}>Liminal</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button style={iconButtonStyle}><HiHeart size={24} /></button>
          <button onClick={() => navigate('/message')} style={iconButtonStyle}><HiChatBubbleLeft size={24} /></button>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid #262626', overflowX: 'auto', alignItems: 'center' }}>
        {/* Your Story Button remains unchanged */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flexShrink: 0, cursor: 'pointer' }}>
          <div style={{ position: 'relative', width: 60, height: 60, borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#0095f6', borderRadius: '50%', border: '2px solid #000', display: 'flex' }}>
              <HiPlusCircle size={20} color="#fff" />
            </div>
          </div>
          <span style={{ fontSize: '10px' }}>Your story</span>
        </div>
        {[1, 2, 3, 4].map((i) => (<div key={i} style={{ minWidth: 60, width: 60, height: 60, borderRadius: '50%', border: '2px solid #e1306c', flexShrink: 0 }} />))}
      </div>

      {/* 3. Updated Feed Area using PostCard */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <PostCard username="strawberry" likes="1,000" caption="🍓" />
        <PostCard username="blueberry" likes="2,500" caption="🫐" />
        <PostCard username="cherry" likes="5,200" caption="🍒" />
      </div>

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