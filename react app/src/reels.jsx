import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HiOutlineHeart, 
  HiOutlineChatBubbleOvalLeftEllipsis, 
  HiOutlinePaperAirplane, 
  HiOutlineEllipsisVertical, 
  HiOutlineCamera, 
  HiHome, 
  HiMagnifyingGlass, 
  HiPlusCircle, 
  HiUser,
  HiFilm // Imported for the Reels button
} from 'react-icons/hi2';

const Reels = () => {
  const navigate = useNavigate();
  
  const reelStyle = {
    backgroundColor: '#000',
    color: '#fff',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    display:'flex',
    flexDirection:'column',
  };

  const actionButtonStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '4px', // Reduced gap for tighter grouping
    marginBottom: '20px'
  };

  return (
    <div style={reelStyle}>
      {/* Top Header - Fixed camera alignment */}
      <div style={{ position: 'absolute', top: 15, left: 15, display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 'bold', zIndex: 10 }}>
        <span style={{ fontSize: '1.2rem' }}>Reels</span>
        <HiOutlineCamera size={24} />
      </div>

      {/* Main Content */}
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#444' }}>Reel Content</span>
      </div>

      {/* Right Side Actions - Fixed layout */}
      <div style={{ position: 'absolute', right: 15, bottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={actionButtonStyle}><HiOutlineHeart size={30} /><span style={{ fontSize: '0.75rem' }}>12K</span></div>
        <div style={actionButtonStyle}><HiOutlineChatBubbleOvalLeftEllipsis size={30} /><span style={{ fontSize: '0.75rem' }}>450</span></div>
        <div style={actionButtonStyle}><HiOutlinePaperAirplane size={30} /></div>
        <div style={actionButtonStyle}><HiOutlineEllipsisVertical size={30} /></div>
      </div>

      {/* Bottom Info Section */}
      <div style={{ position: 'absolute', bottom: 80, left: 15, width: '70%' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>@username</div>
        <p style={{ fontSize: '0.8rem', margin: '0 0 10px 0' }}>This is the caption for the reel #reels #explore</p>
      </div>

      {/* Bottom Nav */}
      <nav style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: '1px solid #333', background: '#000', zIndex: 10 }}>
        <button onClick={() => navigate('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><HiHome size={24} /></button>
        <button onClick={() => navigate('/explore')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><HiMagnifyingGlass size={24} /></button>
        <button onClick={() => navigate('/post')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><HiPlusCircle size={24} /></button>
        {/* Changed to HiFilm so it doesn't change icon when active */}
        <button onClick={() => navigate('/reels')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}><HiFilm size={24} /></button>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}><HiUser size={24} /></button>
      </nav>
    </div>
  );
};

export default Reels;