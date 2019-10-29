# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications (true/false) T
- React will only render on the server using Node.js (true/false) T
- React is a full stack framework for modern web applications (true/false) F
- React is a flexible library that plays the role of V in an MVC framework (true/false) T
- You should always update a component's state directly using this.state (true/false) F
- React is made up of encapsulated components that manage their own state (true/false) T
- React components render HTML (true/false) T

1b. Add an interesting TRUE fact about React to the list.
- React was designed by Facebook

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: dumb components are stateless and designed just to render to the DOM where smart components have states and control how our app runs

  Researched answer:Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: yarn is adding a package; package.json and yarn.lock are updated

  Researched answer: yarn add will install a package in your dependencies; package.json and yarn.lock are changed



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: a component's props are passed from parent where state is managed by itself

  Researched answer: In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component



5. How would you explain state to a friend who doesn't know code?

  Your answer: state keeps tabs on important values that control how a webpage runs
