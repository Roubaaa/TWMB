import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-light-blue"
      style={{ borderRadius: 6 }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}