// const heading1 = React.createElement(
//   "h1",
//   { id: "heading1", design: "marvel" },
//   "Hello Developer, from React!"
// );
// console.log(heading1);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", { id: "heading2", class: "heading" }, "Heading1"),
//     React.createElement("h1", { id: "heading3", class: "heading" }, "Heading2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "heading4", class: "heading" }, "Heading1"),
//     React.createElement("h1", { id: "heading5", class: "heading" }, "Heading2"),
//   ]),
// ]);

// console.log(parent)

// root.render(parent);

// const heading = React.createElement('h1', {id:"heading", xyz:'test'}, "Hello Developer")
// console.log(heading) //heading is an object which is a react element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
// root.render(heading);


/* <div id="parent">
<div id="child"><h1>This is heading1</h1></div>
</div> */


const element = React.createElement("div", {"id":"parent"}, [React.createElement("div", {'id':"child1"}, [React.createElement("h1", {"className": "heading"}, "Hello I'm h1 from parent. I'm child1."), React.createElement("h2", {"className": "heading"}, "Hello I'm h2 from parent. I'm child2.")]), React.createElement("div", {'id':"child2"}, [React.createElement("h1", {"className": "heading"}, "Hello I'm h1 from child2. Also I'm a child1."), React.createElement("h2", {"className": "heading"}, "Hello I'm h2 from child2. Also I'm a child2.")])]
);

console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(element);

