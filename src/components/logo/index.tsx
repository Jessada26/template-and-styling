import React from "react";

interface ILogo {
  title: string;
}

const Logo = (props: ILogo) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Logo;
