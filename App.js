import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div >
<h1>hellp React</h1>
<ul>
  <li>Props</li>
  <li>States</li>
  <li>Hooks</li>
</ul>
</div>  */
}

// const head = React.createElement(
//   "div",
//   {key:"title"},
//   [React.createElement("h1", {}, "Hello React")],
//   [
//     React.createElement(
//       "ul",
//       {},
//       [[React.createElement("li", {key: "1"}, "Props")],

//         [React.createElement("li", {key:"2"}, "Props")],
//         [React.createElement("li", {key:"3"}, "Props")],
//       ]
//     ),
//   ]
// );


// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Header"
// );

// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title2",
//     key: "h2",
//     style: {
//       color: "blue",
//     },
//   },
//   "Footer"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );


// const head = (
//   <h1 id="title" key="h1">
//     Hello React Element
//   </h1>
// );


// const Header = () => (
//   <div
  
//    style={{backgroundColor: "blue"}}>
//     <h1>Jeet</h1>
//     <h2>jt</h2>
//     <h3>kt</h3>
//   </div>

// )

const Title = () => (
  <h1 id="title" key="h1">
    Hello React Element
  </h1>
);

// const Heading = () => (
//   <div>
//     <h1>Hello Functional</h1>
//   </div>
// )
const Heading2 = () => {
  return(  
  <div>
    {/* <Title/> */}
    {Title()}
    <h1>Hello Functional 2</h1>
  </div>
  )
}


const Heading = () => (
  <header>
    <div className="logo">
      <img src="https://e7.pngegg.com/pngimages/980/413/png-clipart-apple-logo-business-iphone-apple-heart-computer.png"></img>
    </div>
    <div className="center">
      <input type="text" placeholder="Search ur doubts....."></input>
      <button type="submit">🔎</button>
    </div>
    <div className="icon">
      <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"></img>
    </div>
  </header>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);
