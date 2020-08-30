import React from 'react';
import p5 from 'p5';

export default class SketchTestTwo extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            x: 100,
            y: 100,
            rgb: [255],
        }
    }

    s = ( sketch ) => {
        
        sketch.setup = () => {
            sketch.createCanvas(200, 200);
        };
        
        sketch.draw = () => {
            sketch.background(0);
            sketch.fill(this.state.rgb);
            sketch.rect(this.state.x, this.state.y, 50, 50);
        };
    };
    
    componentDidMount() {
        this.myP5 = new p5(this.s, this.myRef.current)
    }

    render() {

        return (
            <div ref={this.myRef} />
        );
    }
}