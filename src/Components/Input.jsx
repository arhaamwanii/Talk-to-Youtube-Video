import React from 'react';

export function DefaultInput({ placeholder, classN }) {
  return (
    <div className="w-full">
      <input
        className={` h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 w-full ${classN}`}
        type="email"
        placeholder={placeholder}
      />
    </div>
  );
}
