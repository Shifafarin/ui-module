
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => onAccordionClick(index)}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;