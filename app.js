const heading1 = React.createElement(
  "h1",
  { id: "heading1", design: "marvel" },
  "Hello Developer, from React!"
);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading2", class: "heading" }, "Heading1"),
    React.createElement("h1", { id: "heading3", class: "heading" }, "Heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading4", class: "heading" }, "Heading1"),
    React.createElement("h1", { id: "heading5", class: "heading" }, "Heading2"),
  ]),
]);

console.log(parent)

root.render(parent);
