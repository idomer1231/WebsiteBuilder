import React from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import "./Style.css";

function Heading({ children }) {
  return (
    <ScrollTrigger >
      <div className="animate-heading">{children}</div>
    </ScrollTrigger >
  );
}

export default Heading;