import React, { useRef } from 'react';

const Mycomponent = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
    <button onClick={scrollToSection}>Scroll to Section</button>
    <div style={{ height: '1000px' }}>Scroll down...</div>
    <div ref={sectionRef} style={{ height: '500px', backgroundColor: 'lightblue' }}>
      This is the section to scroll to.
    </div>
  </div>
);
};

export default Mycomponent;
