import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineMagnifyingGlass, HiOutlinePlus, HiOutlineHeart, HiOutlineHome, HiSquares2X2, HiOutlineFilm, HiOutlineUserCircle, HiChevronDown, HiOutlineCog } from 'react-icons/hi2';

const Profile = () => {
  const navigate = useNavigate();
  const profileStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '375px',
    height: '667px',
    margin: '20px auto',
    padding: '10px',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={profileStyle}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ fontWeight: 'bold' }}>Cupcakeii</span>
        <button onClick={() => navigate('/settings')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }} aria-label="Open settings">
          <HiOutlineCog size={22} />
        </button>
      </div>

      {/* Stats Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid #ed4956' }} />
        <div style={{ display: 'flex', gap: '20px' }}>
          {[{ n: '125', l: 'Posts' }, { n: '20K', l: 'Followers' }, { n: '22', l: 'Following' }].map(item => (
            <div key={item.l} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold' }}>{item.n}</div>
              <div style={{ fontSize: '0.8rem' }}>{item.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
        <strong>Cupcake</strong><br />
        <p style={{ margin: '5px 0' }}>🤍</p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
        {['Following', 'Message', 'Contact'].map(btn => (
          <button key={btn} style={{ flex: 1, padding: '8px', background: '#333', border: 'none', color: '#fff', borderRadius: '5px', fontSize: '0.8rem' }}>
            {btn} <HiChevronDown size={12} />
          </button>
        ))}
      </div>

      {/* Highlights */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: 50, height: 50, borderRadius: '50%', background: '#333' }} />)}
      </div>

      {/* Grid Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #333', padding: '10px 0' }}>
        <HiSquares2X2 size={24} />
        <HiOutlineFilm size={24} />
        <HiOutlineUserCircle size={24} />
      </div>

      {/* Photo Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', flex: 1 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <div key={i} style={{ background: '#333' }} />)}
      </div>

      {/* Bottom Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineHome size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineMagnifyingGlass size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlinePlus size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineFilm size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineUser size={24} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Profile;