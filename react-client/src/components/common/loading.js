import React from "react";
import "./loading.scss";

function Loading({ repeat }) {
  let r = [];
  for (let i = 0; i < repeat; i++) {
    r.push(i);
  }

  return r.map((l) => <div key={l} className="loading"></div>);
}

export default Loading;
