import React, { useState } from 'react';
import { HiHeart, HiChatBubbleLeft, HiPaperAirplane, HiBookmark } from 'react-icons/hi2';

const PostCard = ({ username, likes, caption }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleAddComment = (e) => {
    if (e.key === 'Enter' && commentInput.trim() !== '') {
      setComments([...comments, commentInput]);
      setCommentInput('');
      setShowCommentInput(false); 
    }
  };

  const handleShareOption = (option) => {
    alert(`Action: ${option}`);
    setShareCount(shareCount + 1);
    setShowShareMenu(false);
  };

  return (
    <div style={{ padding: '10px', marginBottom: '20px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%', overflow: 'hidden' }}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#333', flexShrink: 0 }} />
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{username}</span>
      </div>
      
      <div style={{ width: '100%', height: '300px', background: '#1a1a1a' }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <HiHeart size={24} onClick={() => setIsLiked(!isLiked)} style={{ cursor: 'pointer', color: isLiked ? '#ed4956' : '#fff' }} />
          <HiChatBubbleLeft size={24} style={{ cursor: 'pointer' }} onClick={() => setShowCommentInput(!showCommentInput)} />
          <HiPaperAirplane size={24} style={{ cursor: 'pointer' }} onClick={() => setShowShareMenu(!showShareMenu)} />
        </div>
        <HiBookmark size={24} style={{ cursor: 'pointer' }} />
      </div>
      
      <p style={{ margin: 0, fontWeight: 'bold' }}>{likes} Likes</p>
      <p style={{ margin: '5px 0' }}><strong>{username}</strong> {caption}</p>

      {showShareMenu && (
        <div style={{ position: 'absolute', bottom: '50px', left: '0', right: '0', background: '#222', padding: '10px', borderRadius: '10px', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>Share</span>
            <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setShowShareMenu(false)}>X</span>
          </div>
          <div style={{ cursor: 'pointer', padding: '5px' }} onClick={() => handleShareOption('Add to Story')}>Add to Story</div>
          <div style={{ cursor: 'pointer', padding: '5px' }} onClick={() => handleShareOption('Copy Link')}>Copy Link</div>
          <div style={{ cursor: 'pointer', padding: '5px' }} onClick={() => handleShareOption('Share')}>Share to Following</div>
        </div>
      )}

      {showCommentInput && (
        <div style={{ marginTop: '10px' }}>
          <input placeholder="Add a comment..." value={commentInput} onChange={(e) => setCommentInput(e.target.value)} onKeyDown={handleAddComment} style={{ width: '100%', padding: '5px' }} autoFocus />
        </div>
      )}

      {comments.map((c, index) => (
        <p key={index} style={{ margin: '2px 0', fontSize: '14px' }}><strong>You:</strong> {c}</p>
      ))}
      
      <p style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>{shareCount} Shares</p>
    </div>
  );
};

export default PostCard;