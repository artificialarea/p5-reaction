# Reactions to p5 integration

Integration Strategy: "The basic idea is that the [p5.js](https://p5js.org/) sketch is wrapped in a React component. The data that comes into the sketch is passed on to this component as props. Callbacks are used to return information back from the sketch to the application."

Combining p5js library and React can be tricky... possibility of collisions between React’s declarative programming framework (managing state) and imperative approach used by p5. Ergo, the need for [`React.createRef()`](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs)

<br />

## Phased approach

- [ ] **1.** Integrate p5.js into React app
  - [x] **1a.** p5 library for canvas animations
  - [ ] **1b.** p5.sound library for Wed Audio API

- [x] **2.** Integrate React statefulness into p5.Element 
    - [x] **2a.** internal state within p5 component
    - [x] **2a.** state passed to p5 component as props

- [ ] **3.** Integrate with Node/Express + PostgreSQL database for a (single user) Dashboard.

_If time allows..._

- [ ] **4.** Integrate Auth for registration and login for users.


<br />

## Notable

- p5.js 'instance mode' namespace: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

- Refs and the DOM: https://reactjs.org/docs/refs-and-the-dom.html

- indebted to [Mattias + Schiffman video session](https://youtu.be/OvpbTeAYQEU)


<br />

<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).