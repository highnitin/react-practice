import React from "react";
import ReactDOM from "react-dom/client";

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

    
    let root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    
    // console.log("First console (before render of parent)", parent)
    // console.log("First console for root before render", root)
    // console.log("Second console for root after render", root)
    // console.log("Second console", root)
    // console.log("Second console (after render of parent)", parent)
