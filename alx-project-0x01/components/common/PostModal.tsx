import React, { useState } from 'react';
import { PostData } from '@/interfaces/PostData';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: PostData) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostData = {
      id: Date.now(),  // Temporary id
      title,
      body,
      userId: 1,      // Assuming default user
    };
    onSave(newPost);
    setTitle('');
    setBody('');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={e => setBody(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
