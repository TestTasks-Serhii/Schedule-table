import React from "react";

const Popup = ({ event, onClose }) => {

  return (
    <div className="popup">
      <div className="popup-content ">
        <p class="text-white border-b border-slate-200 ">EVENTS</p>
        {event.map((item) => (
          <>
            <h3 className="title">{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <b>Дата:</b> {new Date(item.date).toLocaleString()}
            </p>
            <p>
              <b>Локація:</b> {item.location}
            </p>
          </>
        ))}
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default Popup;
