import React from "react";
import {Footer} from "../Primary-template/footer/footer.jsx";
import {Header2} from "./header2";
const SecondaryTemplate =({children}) =>{
return(
<>
<Header2/>
{children}
<Footer/>
</>

);

};
export {SecondaryTemplate};