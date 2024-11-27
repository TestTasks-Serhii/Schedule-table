import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel";
import MonthGrid from "./components/MonthGrid";
import Popup from "./components/Popup";
import { events } from "./data";
import "./styles/styles.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [popupEvent, setPopupEvent] = useState([]);

  const filteredEvents = selectedType
    ? events.filter((event) => event.type === selectedType)
    : events;

  return (
    <div className="app">
      <Header />

      <FilterPanel
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <MonthGrid events={filteredEvents} onEventClick={setPopupEvent} />

      {popupEvent && (
        <Popup event={popupEvent} onClose={() => setPopupEvent(null)} />
      )}

      <Footer/>
    </div>
  );
};

export default App;
