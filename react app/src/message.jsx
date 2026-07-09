import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlinePencilSquare, HiOutlineMagnifyingGlass, HiOutlineCamera, HiHome, HiPlusCircle, HiFilm, HiUser } from 'react-icons/hi2';

const Message = () => {
  const navigate = useNavigate();

  // Updated styles for responsiveness
  const messageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    boxSizing: 'border-box', // Ensures padding doesn't increase total width
  };

  return (
    <div style={messageStyle}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff' }}>
            <HiOutlineArrowLeft size={24} />
          </button>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>loremipsum</span>
        </div>
        <HiOutlinePencilSquare size={24} />
      </div>

      {/* Search Bar */}
      <div style={{ background: '#262626', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <HiOutlineMagnifyingGlass color="#888" size={20} />
        <input type="text" placeholder="Search" style={{ background: 'transparent', border: 'none', color: '#fff', marginLeft: '10px', width: '100%', outline: 'none' }} />
      </div>

      {/* Messages List - This will now fill the available space and scroll */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {['User1', 'User2', 'User3', 'User4', 'User5'].map((user) => (
          <div key={user} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#333', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>{user}</div>
              <div style={{ fontSize: '0.8rem', color: '#888' }}>Sent you a message • 2h</div>
            </div>
            <HiOutlineCamera size={24} color="#888" />
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333', marginTop: 'auto' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
          <HiHome size={24} />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
          <HiOutlineMagnifyingGlass size={24} />
        </button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
          <HiPlusCircle size={24} />
        </button>
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
          <HiFilm size={24} />
        </button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
          <HiUser size={24} />
        </button>
      </nav>
    </div>
  );
};

export default Message;