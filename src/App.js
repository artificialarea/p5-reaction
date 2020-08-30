import React from 'react';
import './App.css';

import p5 from 'p5'; // via NPM

// note: p5 sketch 01 defined 'inline' within App component

import SketchTestTwo from './p5-canvas/sketch-test02';  // why does this appear without explictly adding component?!?!
import SketchTestThree from './p5-canvas/sketch-test03';


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = new React.createRef()
        this.state = {
            x: 20,
            y: 100,
            w: 200,
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

        // for SketchTestThree
        setTimeout(() => {
            setInterval(() => {
                this.setState({
                    // x: this.state.x + 1
                    x: this.state.x > this.state.w 
                        ? -50
                        : this.state.x + 1
                })
            }, 10)
        }, 1000)
    }

    render() {
        return (
            <div className="App">

                <p>sketch test 01: inline</p>
                <div ref={this.myRef} />

                <p>sketch test 02: component (with inner state)</p>
                <SketchTestTwo />

                <p>sketch test 03: component (pass props)</p>
                <SketchTestThree 
                    x={this.state.x}
                    y={this.state.y} 
                    rgb={this.state.rgb}   
                />     

            </div>
        );
    }
}

