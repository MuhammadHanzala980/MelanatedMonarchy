import React from "react";
import Header  from "./header/header";
import { Footer } from "./footer";

const PrimaryTemplate = (props) => {
  return (
    <>
      <Header history={props.history} />
      {props.children}
      <Footer />
    </>
  );
};

export { PrimaryTemplate };
