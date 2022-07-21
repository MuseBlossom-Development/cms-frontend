import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [Dots, setDots] = useState(". ");
  const interval = useRef(null);
  const timer = useRef(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer.current !== 0) {
      interval.current = setInterval(() => {
        if (timer.current > 0) timer.current--;
        setDots(Dots.concat(". "));
      }, 1000);
      return () => clearInterval(interval.current);
    } else {
      navigate("/");
    }
  }, [timer.current]);

  return (
    <div style={{ textAlign: "center", margin: "60px 0" }}>
      <h1>404 Not Found!</h1>
      <h2>Redirect to Home {Dots}</h2>
    </div>
  );
};

export default NotFound;
