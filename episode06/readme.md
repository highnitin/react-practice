## 🚀 NamasteReact Series - Episode 06 Learnings 🚀


Welcome to the documentation of my learnings from Episode 06 of the NamasteReact series. In this episode, we covered a variety of topics related to JavaScript and React. Here's a summary of what I've learned (ignore typos):


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
                    <input> Search Input Box
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


## Project Learnings


### Monolith vs Microservices

1. Monolith
Example of a company where every thing is authentication, api, ui service, backend service, database services, sms sending etc written in the same services.
Drawback - if we want to do a small change again we need to compile the bulky code and do the task.

2. Microservices

3. All small services combine together forms a big application

4. micro services talk to each other depending upon the use case.

5. having separate services for each thing example backend services, ui services, authentication services, database services, sms services, email services. this is know as separation of concern and single responsibility principle as it follows single responsibility principle as each service has it own job, and they dont interfer with each other.

- Interview Nuggets Deployment cycle will be different for each team

   - how these services talk to each other using API

   - how these services are deployed and how we can access them?

   - we can use different tech stack in  microservices architecture. Multiple tech stack can be used based on the use case.

6. all the services run on their own specific port. example :1234 ui service, :1000 backend service, :3000 - sms service and all these serives will be mapped to a domain name.

7. how they interact? they make a call to the url /api /sms /ui etc which is the port number

8. 2 ways how web app & ui applications fetch data from backed

9. First - As soon as our page loads we can make the api call and render the ui, suppose time to load = 500ms then it shows the ui after 500ms, Approach: loads - api - render

10. Second - As soon as the page loads, we will quicky render ui skeleton - and now we will make API call and then renders the data, Approach: loads - render - api - render

11. For better ux follow approach 2

12. It's not a good practice to show a lot of information in a small frame of time, so rendering of ui skeleton gives the user idea about what information is gonna load and then after render it makes sense.

13. React renders the data efficiently

14. React's render cycle is fast af, react has one of the best render mechanism.

15. react hooks are nothing but a normal javascript function that have some specific use cases.

16. useEffect(); import userEffect it takes two arguements. 1. callback function 2. dependency array

17. whatever we pass inside the callback function will be called after the ui component is rendered.

18. Explain the rendering process when we use useEffect(). Hint - use browser debugger

19. Fetch is a super power given by javascript or browser?

20. Can we use swiggy's api in our local ?

21. What is the error below?

```
localhost/:1 Access to fetch at
'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1372529&lng=79.058856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
from origin 'http://localhost:1234' has been blocked by CORS policy: No
'Access-Control-Allow-Origin' header is present on the requested
resource. If an opaque response serves your needs, set the request's
mode to 'no-cors' to fetch the resource with CORS disabled.
```

22. Who is blocking us? our browser is not allowing us to call swiggy's api from localhost i'e from one origin to another origin

23. how to we bypass the cors?

24. explain the concept of shimmer ui?

25. what is conditional rendering? rendering according to the condition

26. why do we even need useState variables - explain with login and logout button example.

27. js variables does not work in such situation. this is why we use local state variable

28. where does the use state come from? - import usestate

29. when we use useState the local varibable behaves like a normal javascript variable but it has a special powers

30. whenever the state variable is changed/updated react will re render the component where we have the state variable. it triggers the reconciliation cycle

31. question - onclicking the login button what will be rendered only the
button or the complete header component?

32. what is mean by rendering the component again? it means calling the function component again.

33. const [variable1, setVariable1] = useState("Login"), if we are using const variable then how it is getting updated? isn't it defeats the purpose of const variable? this is where reconciliation works, and diff algorigthm works

34. Whenvever state variables update, react triggers a reconciliation cycle (re-renders the component)

35. Local state variable - super powerful variable

36. What is optional chaining?

37. What is the difference between JS expression and JS statement


## Additional Information

- [LinkedIn - highnitin](https://linkedin.com/in/highnitin)

Feel free to connect with me on LinkedIn for more discussions and updates on my learning journey!

Happy hacking! 🚀
