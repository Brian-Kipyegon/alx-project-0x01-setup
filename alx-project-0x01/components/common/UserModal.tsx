import React, { useState } from 'react';
import { UserProps, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserProps = {
      id: Date.now(),  // Temporary id
      name,
      email,
      username,
    };
    onSubmit(newUser);
    setName('');
    setEmail('');
    setUsername('');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
