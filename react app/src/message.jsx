import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlinePencilSquare, HiOutlineMagnifyingGlass, HiOutlineCamera, HiHome, HiPlusCircle, HiFilm, HiUser } from 'react-icons/hi2';

const Message = () => {
  const navigate = useNavigate();
  const messageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '100%',
    maxWidth: '375px',
    margin: '20px auto',
    padding: '10px',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height:'100vh',
  };

  return (
    <div style={messageStyle}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff' }} aria-label="Back to home">
            <HiOutlineArrowLeft size={24} />
          </button>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>loremipsum</span>
        </div>
        <HiOutlinePencilSquare size={24} />
      </div>

      {/* Search Bar */}
      <div style={{ background: '#262626', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <HiOutlineMagnifyingGlass color="#888" size={20} />
        <input type="text" placeholder="Search" style={{ background: 'transparent', border: 'none', color: '#fff', marginLeft: '10px', width: '100%' }} />
      </div>

      {/* Messages List */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {['User1', 'User2', 'User3', 'User4', 'User5'].map((user) => (
          <div key={user} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#333' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>{user}</div>
              <div style={{ fontSize: '0.8rem', color: '#888' }}>Sent you a message • 2h</div>
            </div>
            <HiOutlineCamera size={24} color="#888" />
          </div>
        ))}

      {/* Bottom Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiHome size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineMagnifyingGlass size={24} color="#888" />
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
    </div>
  );
};

export default Message;