import React from 'react';
import './App.css';

import p5 from 'p5'; // via NPM

// note: p5 sketch 01 defined 'inline' within App component

import SketchTestTwo from './p5-canvas/sketch-test02';  // why does this appear without explictly adding component?!?!


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            rgb: [255, 52, 52]
        }
    }

    Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(100, 100);
        }

        p.draw = () => {
            p.background(this.state.rgb);
            p.stroke('white')
            p.circle(10, 10, 10);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div className="App">

                <p>sketch test 01: inline</p>
                <div ref={this.myRef} />

                <p>sketch test 02: component</p>
                <SketchTestTwo />

            </div>
        );
    }
}

