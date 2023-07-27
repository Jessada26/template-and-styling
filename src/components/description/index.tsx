import React from "react";

interface IDescription {
  text: string;
}

const Description = (props: IDescription) => {
  const { text } = props;
  return <div className="description-components">{text}</div>;
};

export default Description;
