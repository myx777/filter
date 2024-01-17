import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div>
    {filters.map(filter => (
      <button
        key={filter}
        onClick={() => onSelectFilter(filter)}
        style={{ fontWeight: filter === selected ? 'bold' : 'normal' }}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default Toolbar;
