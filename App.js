import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{
    id:"title"
  },"Header");

  const heading2 = React.createElement("h1",{
    id:"title2",
    style: {
        color: "blue"
    }
  },"Footer");

  const container = React.createElement("div",{
    id : "container"
  },[heading,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);



