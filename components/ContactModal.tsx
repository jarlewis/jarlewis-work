'use client';

import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setIsOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 neon-button p-4 rounded-full shadow-lg z-50"
      >
        <span className="material-symbols-outlined">mail</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-panel p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary">Contact Me</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="material-symbols-outlined text-green-400 hover:text-primary transition-colors"
          >
            close
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="neon-input w-full px-3 py-2 rounded-lg border"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="neon-input w-full px-3 py-2 rounded-lg border"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="neon-input w-full px-3 py-2 rounded-lg border resize-none"
              required
            ></textarea>
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              className="neon-button flex-1 py-2 rounded-lg font-medium"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="border border-green-500/30 text-green-400 flex-1 py-2 rounded-lg font-medium hover:bg-green-500/10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}