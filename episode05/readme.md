## 🚀 NamasteReact Series - Episode 05 Learnings 🚀


Welcome to the documentation of my learnings from Episode 05 of the NamasteReact series. In this episode, we covered a variety of topics related to JavaScript and React. Here's a summary of what I've learned (ignore typos):


## Food App Low Level Design Idea 

```html
<body>
    <section id="root">
        <section class="containerSection">
            <header class="headerSection">
                <section className= "logoContainer"> <img /></section>
                <nav className= "navbar"> <ul> <li> Home</li> </ul></nav>
            </header>
            <main class="mainSection">
                <section className = "searchSection">
                    <input> Search Input Box </input>
                    <button> Search </button>
                </section>
                <section className = "cardContainer">
                    <section className = "card">
                    <img />
                    <h2></h2>
                    <section className = "featureSection">
                        <h3 className="price"></h3>
                        <h3 className="ratings"></h3>
                        <h3 className="ETA"></h3>
                    </section>
                    <h3></h3>
                    <h3></h3>
                    </section>
                </section>
            </main>
            <footer class="footerSection">
            </footer>
        </section>
    </section>
</body>    
```


1. Before we start coding, make a conceptual design of your application. or a wire frame.
2. Make a low level design of working of your application.
3. Start working with React Props
4. Props are just normal arguments to the function.
5. Passing arguments to the function is the same as passing props to the functional components.
6. How can we ready the props?
7. When we want to dynamically pass some data to the components we pass in as props.
8. How to pass dynamic data?
9. What is Config driven UI
10. All the UI is driven by a config what is the config? The data, API is the config. Example, Swiggy has an offer for Delhi, Mumbai, Nagpur, etc., or some place there is no offer. So do we need to build different UI for all the locations? No. Let's consider a carousel that shows offers from different cities; we have written UI once, and now according to the data coming from the backend UI is getting changed. This is called config-driven UI. Another example if we want to show a different color in the festival in a particular city, we just need to update the backend data, and then config will drive the UI.
11. In any React application, there is a UI layer and data layer and both of them together build a frontend application. UI layer engineer, data layer engineer
12. Why do we have a warning that each list must have a unique key?
13. Never use react index as keys
14. Solve the warning - Warning: Each child in a list should have a unique "key" prop.
15. Whenever React renders any element, let's in the code we have written to add the new element in the first place of the node. If the key is not mentioned then React will render all the nodes as React will think as these are newly added. if we add keys to the child in the list, React will check okay these keys were already present before and we have a new key example "124" so now it is clear that the next key doesn't exist so React will add the child element and will not render the rest of the existing child elements.
    ```plaintext
    O (root element)
    / |  \
    0  0   0
    /  /|\  /\
    O  O O O O O
    ```
    SO if the element is added in the first place React will render all the nodes, to avoid that and let React know that these nodes exist we use a unique key for each child list.
16. Make sure you are commenting out and cleaning your code before pushing it to production
17. Always deconstruct the props to make the code cleaner and easily readable.
18. Props are nothing but objects.
19. What is optional chaining in JavaScript?
20. 
    ```plaintext
    when we loop over a container,

    o (container )
    /|\
    ooo (restaurant card)
    id1 id2 id3

    Let's say we have 3 res cards and suppose there is a new res card added in the list, if you don't give the ids, and a new card came in React will re-render all these cards as React cannot uniquely identify which is a new card.

    React cleans the container and re-renders all these cards. it will treat all the resto card as the same.

    if we give them a unique id with id1, id2, id3 and so on, and element with xyzid is added then React will know id 1,2,3 were already there so React will only render xyzid not all.

    Suppose we have infinite scrolls so now imagine the optimization part if the key is not present.

    It takes a big performance hit if the key is not added. so to avoid it we use keys.

    Don't use the index key of an array as a key as it is not suggested in the React documentation.

    Read more on React doc and Pokorny's article for an in-depth explanation of the negative impacts of using an index as a key.

    not using keys (not acceptable) << index as key << unique key
    ```


## Additional Information

- [LinkedIn - highnitin](https://linkedin.com/in/highnitin)

Feel free to connect with me on LinkedIn for more discussions and updates on my learning journey!

Happy hacking! 🚀
