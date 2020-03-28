import React from 'react';

import './styles.scss';

// eslint-disable-next-line arrow-parens
const Categories = ({ children, title }) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
