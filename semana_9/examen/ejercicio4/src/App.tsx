import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container"> 
      <h2>Alumno: Roberto Agustín Mejía Collazos</h2>
      <h1 className="text-center bg-primary">Posición del ratón:</h1> 
      <p className="text-center">X: {position.x}, Y: {position.y}</p>
    </div>
  );
};

export default MouseTracker;