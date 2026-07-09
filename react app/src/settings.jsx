import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineUser, HiOutlineBell, HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineQuestionMarkCircle, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

const SettingsPage = () => {
  const navigate = useNavigate();
  const settingsStyle = {
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

  const menuItems = [
    { icon: <HiOutlineUser />, label: 'Edit Profile' },
    { icon: <HiOutlineBell />, label: 'Notifications' },
    { icon: <HiOutlineLockClosed />, label: 'Privacy' },
    { icon: <HiOutlineShieldCheck />, label: 'Security' },
    { icon: <HiOutlineQuestionMarkCircle />, label: 'Help' },
  ];

  return (
    <div style={settingsStyle}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#fff' }} aria-label="Back to profile">
          <HiOutlineArrowLeft size={24} />
        </button>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Settings</span>
      </div>

      {/* Menu List */}
      <div style={{ flex: 1 }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 0', borderBottom: '1px solid #1a1a1a' }}>
            <span style={{ fontSize: '20px', color: '#888' }}>{item.icon}</span>
            <span style={{ fontSize: '1rem' }}>{item.label}</span>
          </div>
        ))}
        
        {/* Log Out Button */}
        <button onClick={() => navigate('/login')} style={{ marginTop: '20px', color: '#ed4956', fontWeight: 'bold', padding: '15px 0', background: 'none', border: 'none', cursor: 'pointer' }}>
          <HiOutlineArrowRightOnRectangle style={{ marginRight: 8 }} /> Log Out
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
