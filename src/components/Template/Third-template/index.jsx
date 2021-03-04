import React from "react";
import {Footer} from "../Primary-template/footer/footer.jsx";
import {Header3} from "./header3";
const ThirdTemplate =({children}) =>{
return(
<>
<Header3/>
{children}
<Footer/>
</>

);

};
export {ThirdTemplate};