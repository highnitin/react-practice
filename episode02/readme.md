# 🚀 NamasteReact Series - Episode 02 Learnings 🚀

Welcome to the documentation of my learnings from Episode 02 of the NamasteReact series. In this episode, we covered a variety of topics related to JavaScript and React. Here's a summary of what I've learned (ignore typos):

1. Package.json is a configuration for npm
2. What is the most important package in the React app? It is a bundler (research more about it)
3. What is a bundler? webpack? parcel? vite?
4. What is the job of a bundler? A bundler bundles our app, packages our app so it can be shipped properly.
5. Difference between Git and GitHub
6. What is production-ready code?
7. Bundle files, compress, minify the code, minify the images, remove comments - make your code production-ready - what is needed to make your code ready for production?
8. If you want to build a fast production-ready app can React itself do it?
9. Answer: To an extent, yes, React is making our app fast, but there are a lot of other things and packages we need to make our app fast.
10. NPM does not stand for - node package manager; behind the scenes, npm is responsible for managing packages. npm is a standard repository for all the packages, sometimes called dependencies.
11. When we create a Create React App, it uses webpack behind the scenes.
12. Fun fact - If the app is a skeleton and bones, then the parser will give muscle/strength to the app :)
13. There are two types of packages/dependencies that an app can have - 1. Dev Dependencies (generally required in the development phase of the app) 2. Normal Dependencies (used in the production phase of the app)
14. `npm install -D parcel`: It tells npm that the app wants to install parcel packages/dependencies required for the development phase (not normal dependencies)
15. What is the caret/tilde ^/~ sign before the version of the package?
16. Answer: In package.json, the tilde (~) allows updates to the patch version of a package, while the caret (^) allows updates to the minor and patch versions of a package. The caret keeps the major version fixed. Learn here - [caret vs tilde](https://www.linkedin.com/pulse/difference-bw-tilde-notation-caret-alok-tiwari/)
17. Learn here - [caret vs tilde](https://www.quora.com/Which-is-better-or-caret-in-package-JSON#:~:text=npm%20allows%20installing%20newer%20version,as%20the%20default%20for%20save%20.)
18. If we have ^ and tomorrow a new minor upgrade is available and we have added caret before the version, it will automatically update to the new released minor upgraded version.
19. If we have ~ and tomorrow a new major upgrade is available and we have added tilde before the version, it will automatically update to the new released major upgraded version.
20. What is package-lock.json? Is it even needed? What is the difference between package.json and package-lock.json?
21. package.json - It is a configuration for npm, keeps track of what version of a package is installed in the app, helps to keep an approximate version of the dependencies.
22. package-lock.json - It keeps track of the exact version that is being installed, locks the version, and keeps a record of it.
23. What is integrity in the package-lock.json? It is a hash file, but why is a hash present?
24. Have you heard? It was working on my local but not on production? To avoid this, package-lock.json keeps a hash to verify that whatever is there in my dev local machine is the same version being deployed on the production. It keeps track of all the versions of all the dependencies.
25. Why do we have a node_modules folder? It is a kind of database where all our packages exist.
26. Our project needs Parcel; Parcel as a project has its own dependencies, and those dependencies can have their own dependencies. This is known as transitive dependencies.
27. Question - How would npm know that Parcel has its own dependencies and those dependencies have their own dependencies?
28. Question - In our project, how many package.json and package-lock.json files do we have?
29. Every dependency has its own package.json and package-lock.json.
30. Why is the node_modules folder bulky? Explain with transitive dependencies.
31. Should we put the node_modules folder in the git repository? - No
32. Should we put package.json and package-lock.json in the git repository? - Yes
33. Try deleting the node_modules folder, push the code to your repository, and then get the code from the repository and then do npm install? You have your answer.
34. Just a hack - Whatever we can regenerate, don't put it on git. It should only have essential files.
35. Difference between npm and npx? npm, in a broad way, is used to install packages, and npx is used to execute a package, for example, npx parcel index.html
36. Why using a CDN link is not advisable? Example - https://unpkg.com/react@18/umd/react.development.js
37. Every time the app hits the page where the CDN link is added, let's say index.html, it does a network call, and this can be expensive and repetitive.
38. Just a note - `npm i` is a shorthand for `npm install`
39. Install React and React DOM
40. Resolve - @parcel/transformer-js: Browser scripts cannot have imports or exports. - Delete .parcel-cache folder.
41. Parcel is responsible for (parcel is such a beast) -
    - Dev build,
    - Local server,
    - HMR - hot module replacement,
    - File watching algorithm written in C++,
    - Caching - faster build,
    - Image Optimization,
    - Minification of our files,
    - Bundling,
    - Compress,
    - Consistent Hashing,
    - Code splitting,
    - Differential Bundling (supports older browsers)
    - Diagnostics
    - Error Handling
    - HTTPs (parcel gives a way to host the app on https)
    - Tree shaking (remove unused code)
    - Different development and production bundles
    (Read more about all these topics above - [Parcel Documentation](https://parceljs.org/))
    Also, just to note, Parcel is not doing things on its own. Let's say for image optimization, it might be using some other library, and for caching, it might be using some other library and so on.
    Consider the PM as React and the home minister as Parcel, and other folder structure as different ministries. (giving you a fun example here)
42. Note - The most expensive thing is your web browser is to load images on your page.
43. Change the entry point in package.json before making the app production-ready.
44. Make the app production-ready - `npx parcel build index.html`
45. When it builds the production-ready app, where does that build go? Answer - `dist` folder
46. Before making your app production-ready - make sure it is browser-compatible
47. For making browser-compatible - check [npm](https://www.npmjs.com/package/browserslist)
48. For making browser-compatible - check [browser list](https://browserslist.dev/)
49. For making browser-compatible - check [browser list github](https://github.com/browserslist/browserslist#query-composition)
50. Now we will be able to answer - why our React app is fast.

## Additional Information

- [LinkedIn - highnitin](https://linkedin.com/in/highnitin)

Feel free to connect with me on LinkedIn for more discussions and updates on my learning journey!

Happy hacking! 🚀
