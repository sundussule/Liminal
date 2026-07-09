import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineChevronDown, HiOutlinePhoto, HiOutlineFilm, HiOutlineDocumentDuplicate, HiOutlineCamera, HiHome, HiMagnifyingGlass, HiPlusCircle, HiUser } from 'react-icons/hi2';

const Post = () => {
  const navigate = useNavigate();
  const pageStyle = {
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
    <div style={pageStyle}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <HiOutlineArrowLeft size={24} />
        <span style={{ fontWeight: 'bold' }}>New Post</span>
        <span style={{ color: '#0095f6', fontWeight: 'bold' }}>Next</span>
      </div>

      {/* Main Preview Area */}
      <div style={{ width: '100%', height: '300px', background: '#262626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <span style={{ color: '#888' }}>Select Media</span>
      </div>

      {/* Media Type Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #333' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>Recents</span> <HiOutlineChevronDown size={16} />
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <HiOutlineDocumentDuplicate size={24} />
          <HiOutlineCamera size={24} />
        </div>
      </div>

      {/* Media Grid (Selection Area) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', flex: 1, overflowY: 'auto' }}>
        {[...Array(16)].map((_, i) => (
          <div key={i} style={{ width: '100%', aspectRatio: '1/1', background: '#333' }} />
        ))}
      </div>

      {/* Posting Modes */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333' }}>
        <div style={{ textAlign: 'center' }}>
          <HiOutlinePhoto size={24} />
          <p style={{ fontSize: '0.6rem', margin: '5px 0 0' }}>Post</p>
        </div>
        <div style={{ textAlign: 'center', color: '#0095f6' }}>
          <HiOutlineFilm size={24} />
          <p style={{ fontSize: '0.6rem', margin: '5px 0 0' }}>Reel</p>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiHome size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiMagnifyingGlass size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiPlusCircle size={24} color="#fff" />
        </button>
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineFilm size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiUser size={24} color="#888" />
        </button>
      </nav>
    </div>
  );
};

export default Post;