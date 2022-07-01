import React from 'react';

import './Card.css';

export type DefaultProps = { children: React.ReactNode };
const Card = (props: DefaultProps) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
