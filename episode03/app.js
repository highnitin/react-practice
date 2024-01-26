import React from "react";
import ReactDOM from "react-dom/client";

// creating react element using core react

const heading1 = React.createElement(
	"h1",
	{ className: "headingCore" },
	"Hey, rendered using react core."
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(heading1);

//  creating react element using JSX

// single line jsx code
const heading2 =
	((
		<h1
			className="heading"
			tabIndex={5}>
			Hey heading2, rendered using JSX
		</h1>
	),
	(<p className="heading">Hey paragraph2, rendered using JSX</p>));
// only p is rendered to avoid it we use multiple line js wrapped inside ()

// multiple line jsx code
const heading3 = (
	<div className="container">
		<p> Example of elements into elements</p>
		<h1
			className="heading"
			tabIndex={5}>
			Hey heading3, rendered using JSX
		</h1>
		{heading1}
		<p className="heading">Hey paragraph3, rendered using JSX</p>
		{heading1}
	</div>
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(heading3);

// console.log(heading1);
// console.log(heading2);
// console.log(JSON.stringify(heading2));
// console.log(typeof(heading1));
// console.log(typeof(heading2));

// react components - two types of react components 1. Class based components 2. functional components

// Functional components are nothing but just a javascript function that returns some piede of jsx code.
// as jsx code is nothing but a react element so
// Functional components are nothing but just a javascript function that returns react element or elements.
// example const Function = () => {return <h1 class="heading">Hello Dveloper</h1>}
// example const Function = () => {return <div><h1 class="heading">Hello Dveloper</h1></div>}
// naming convention for functional components starts with Capital letter followed by small case. example - Function1(), Addition(), Header() and likewise.

// functional component

// one way of writing functional component
const HeadingFunction1 = () => {
	return (
		<h1 className="heading">
			Hello Developer, I'm inside ~HeadingFunction1~ functional component.
		</h1>
	);
};

// other way of writing functional component
const HeadingFunction2 = () => (
	<div className="container">
		<p>You are inside functional component - HeadingFunction2</p>
		<HeadingFunction1 />
		<h1 className="heading">
			Hello Developer, I'm from ~HeadingFunction2~ functional component.
		</h1>
		<HeadingFunction3 />
		<HeadingFunction4 />
		{HeadingFunction5()}
		{heading1}
		{heading3}
	</div>
);

// other way of writing functional component
const demo = (
	<p className="heading">
		Hello Developer, I'm from ~HeadingFunction3~ functional component.
	</p>
);
const HeadingFunction3 = () => demo;

// other way of writing functional component

const HeadingFunction4 = function () {
	return (
		<div>
			<h1 className="heading">
				Hello Developer, I'm from ~HeadingFunction4~ functional component.
			</h1>
		</div>
	);
};

function HeadingFunction5() {
	return (
		<div>
			<h1 className="heading">
				Hello Developer, I'm from ~HeadingFunction5~ functional component.
			</h1>
		</div>
	);
}

// root2.render(HeadingFunction2);  We can only render react elements using this syntax not functional components.
root2.render(<HeadingFunction2 />); // to render functional components try root.render(<component/>) as this is the syntax babel understands, components should be wrapped under angula brackets.

// other way of writing functional component
const HeadingFunction6 = () => (
	<div className="container">
		<p>You are inside functional component - HeadingFunction6</p>
		{/* <HeadingFunction1 /> */}
		<HeadingFunction1></HeadingFunction1>
		<h1 className="heading">
			Hello Developer, I'm from ~HeadingFunction6~ functional component.
		</h1>
		<HeadingFunction3></HeadingFunction3>
		<HeadingFunction4></HeadingFunction4>
		<HeadingFunction5></HeadingFunction5>

		{heading1}
		{heading3}
	</div>
);

// root2.render(<HeadingFunction6></HeadingFunction6>); // another way to render
// console.log("01", HeadingFunction6);
// console.log("01", HeadingFunction6());
// console.log("01", typeof HeadingFunction6);
