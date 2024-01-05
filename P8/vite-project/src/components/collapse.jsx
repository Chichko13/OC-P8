import React, { useState } from "react";

function Collapse({ item }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="collapse" key={item.id}>
        <h4 className="collapse__title">{item.title}</h4>
        <svg
          className={`${open ? "collapse__svg--open" : "collapse__svg-close"}`}
          onClick={toggleOpen}
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className={`${
          open ? "collapse__content--open" : "collapse__content--close"
        }`}
      >
        {Array.isArray(item.content) ? (
          /* vérifie si tableau*/ item.content.map((equipment, index) => (
            <p className="collapse__text">{equipment}</p>
          ))
        ) : (
          /*si pas tableau*/ <p className="collapse__text">{item.content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
