import React, { Component } from "react";
import classes from "./Blog.module.css";
import { PrimaryTemplate } from "../../components";

class Blog extends Component {
  render() {
    return (
      <PrimaryTemplate>
        <div>
          <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", borderTop: "solid 1px" }}>Blog</h1>
        </div>
      </PrimaryTemplate>
    );
  }
}

export default Blog;
