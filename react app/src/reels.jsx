import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineHeart, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlinePaperAirplane, HiOutlineEllipsisVertical, HiOutlineCamera, HiHome, HiMagnifyingGlass, HiPlusCircle, HiUser } from 'react-icons/hi2';

const Reels = () => {
  const navigate = useNavigate();
  const reelStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '100vw',
    maxWidth: '100%',
    margin: '20px auto',
    position: 'relative',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    display:'flex',
    flexDirection:'column',
    height:'100vh',
  };

  return (
    <div style={reelStyle}>
      {/* Top Header */}
      <div style={{ position: 'absolute', top: 15, left: 15, display: 'flex', gap: '20px', fontWeight: 'bold' }}>
        <span>Reels</span>
        <HiOutlineCamera size={24} />
      </div>

      {/* Main Content (The Reel) */}
      <div style={{ width: '100%', height: '100%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#444' }}>Reel Content</span>
      </div>

      {/* Right Side Actions */}
      <div style={{ position: 'absolute', right: 10, bottom: 80, display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}><HiOutlineHeart size={30} /><span style={{ fontSize: '0.7rem' }}>12K</span></div>
        <div style={{ textAlign: 'center' }}><HiOutlineChatBubbleOvalLeftEllipsis size={30} /><span style={{ fontSize: '0.7rem' }}>450</span></div>
        <HiOutlinePaperAirplane size={30} />
        <HiOutlineEllipsisVertical size={30} />
      </div>

      {/* Bottom Info Section */}
      <div style={{ position: 'absolute', bottom: 20, left: 15, width: '70%' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>@username</div>
        <p style={{ fontSize: '0.8rem', margin: '0 0 10px 0' }}>This is the caption for the reel #reels #explore</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
          <span>♪ Original Audio - Username</span>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333', background: '#000' }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiHome size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiMagnifyingGlass size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiPlusCircle size={24} color="#888" />
        </button>
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiOutlineCamera size={24} color="#fff" />
        </button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HiUser size={24} color="#888" />
        </button>
      </nav>
    </div>
  );
};

export default Reels;