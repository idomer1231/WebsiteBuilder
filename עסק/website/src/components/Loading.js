import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-t-4 border-r-4 border-1D4ED8 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
