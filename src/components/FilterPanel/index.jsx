import React from "react";

const eventColors = {
  "Зустріч з експертом": "red",
  "Питання-відповідь": "green",
  "Конференція": "blue",
  "Вебінар": "yellow",
};

const FilterPanel = ({ selectedType, setSelectedType }) => {
  const eventTypes = ["Зустріч з експертом", "Питання-відповідь", "Конференція", "Вебінар"];

  return (
    <div className="filter-panel">
      {eventTypes.map((type) => (
        <button
          key={type}
          className={`filter-btn ${selectedType === type ? "active" : ""}`}
          style={{
            backgroundColor: selectedType === type ? eventColors[type] : "#ddd", 
          }}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </button>
      ))}
      <button
        className="filter-btn"
        style={{
          backgroundColor: selectedType === null ? "#ddd" : "#f5f5f5", 
        }}
        onClick={() => setSelectedType(null)}
      >
        Усі
      </button> 
    </div>
  );
};

export default FilterPanel;
