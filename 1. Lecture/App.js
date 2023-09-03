const heading = React.createElement(
  "h1",
  { className: "main-head" },
  "Namaste"
);
const heading1 = React.createElement("h1", {}, "Namaste js");
const cont = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
]);
// react element is an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render first
root.render(heading1); // re-rendering here not appending another one
root.render(cont);
// document.getElementByTagName("h1").innerHTML = "namaste js";
