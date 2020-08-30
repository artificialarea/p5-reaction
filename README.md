# Reactions to p5.js + tone.js integration

Integration Strategy: "The basic idea is that the [p5.js](https://p5js.org/) sketch is wrapped in a React component. The data that comes into the sketch is passed on to this component as props. Callbacks are used to return information back from the sketch to the application."

Combining p5js library and React can be tricky... possibility of collisions between React’s declarative programming framework (managing state) and imperative approach used by p5. Ergo, the need for [`React.createRef()`](https://reactjs.org/docs/refs-and-the-dom.html#when-to-use-refs)

Post-Script: Found `p5.sound.js` to be problemmatic, so indenting to use `tone.js` for sound and `p5.js` for UI.

<br />

## Phased integration approach

- [x] **1.** p5.js graphical canvas into React app

- [x] **2.** React state for p5 component 
    - [x] **2a.** internal state within p5 component
    - [x] **2a.** state passed to/from p5 component via props

- [ ] **3.** ~~p5.sound library for Wed Audio API~~
    - **FAIL** Unable to do so. Have to timebox troubleshooting and have far exceeded it. Will turn my attention to Tone.js sound library instead.

- [x] **4.** tone.js sound library for Wed Audio API
    - simple attempt integrated into react. 

- [ ] **5.** State:React + UI:p5.js + Audio:tone.js = synchronized?

- [ ] **6.** Integrate with Node/Express + PostgreSQL database for a (single user) Dashboard.

_If time allows..._

- [ ] **7.** Integrate Auth for registration and login for users.


<br />

## Notable

- p5.js 'instance mode' namespace: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

- Refs and the DOM: https://reactjs.org/docs/refs-and-the-dom.html

- indebted to [Mattias + Schiffman video session](https://youtu.be/OvpbTeAYQEU)


<br />

<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).