/*
<div id="parent">
    
    <div id="child1">
        <h1 id="heading1"> Heading 1 for child 1 </h1>
        <h2> Heading 2 for child 1 </h2>
    </div>
    
    <div id="child2"> <p id="paragraph1"> Paragraph for child 2 </p> </div>


</div>
*/
let demoText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quae nulla accusantium saepe neque ipsam voluptates! Earum sed fugit recusandae dicta distinctio libero id dolor nobis tempora quasi? Ipsam, minus!";

let parent = React.createElement(
    "div",
    {id:"parent", class:"border"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1", {id:"heading1"}, "Heading 1 for child 1."),
                React.createElement("h2", {id:"heading2"}, "Heading 2 for child 1."),
            ]),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("p", {id:"paragraph1"}, "Paragraph for child 2."),
                React.createElement("p", {id:"paragraph2"}, demoText),
            ]),
    ]);

    console.log("First console (before render of parent)", parent)
    
    let root = ReactDOM.createRoot(document.getElementById("root"));
    console.log("First console for root before render", root)
    root.render(parent);
    console.log("Second console for root after render", root)
    // console.log("Second console", root)
    
    console.log("Second console (after render of parent)", parent)

// const para = React.createElement("p", {id: "paraDemo", class: "paraClass"}, demoText);
// 


// const heading = React.createElement("h2", {} ,"Hello Developer");
// const rootID = document.getElementById("root");


// console.log(para)

// const root = ReactDOM.createRoot(rootID);
// root.render(heading);
// root.render(para);


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


// const element = React.createElement("div", {"id":"parent"}, [React.createElement("div", {'id':"child1"}, [React.createElement("h1", {"className": "heading"}, "Hello I'm h1 from parent. I'm child1."), React.createElement("h2", {"className": "heading"}, "Hello I'm h2 from parent. I'm child2.")]), React.createElement("div", {'id':"child2"}, [React.createElement("h1", {"className": "heading"}, "Hello I'm h1 from child2. Also I'm a child1."), React.createElement("h2", {"className": "heading"}, "Hello I'm h2 from child2. Also I'm a child2.")])]
// );

// console.log(element);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(element);

