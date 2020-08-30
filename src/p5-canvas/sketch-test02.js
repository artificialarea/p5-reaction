import React from 'react';
import p5 from 'p5';

export default class SketchTestTwo extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.inputRef = React.createRef()
        this.state = {
            x: 20,
            y: 100,
            w: 200,
            rgb: [255],
        }
    }

    s = ( sketch ) => {
        
        sketch.setup = () => {
            sketch.createCanvas(200, 200);

            // disable draw() rerendering at 60fps (will control via React when to render)
            sketch.noLoop();
        };
        
        sketch.draw = () => {
            sketch.background(0);
            sketch.fill(this.state.rgb);
            sketch.rect(this.state.x, this.state.y, 50, 50);
        };
    };

    inputChanged() {
        const val = this.inputRef.current.value;
        console.log(val)
        this.setState({
            x: val
        })
    }
    
    componentDidMount() {
        this.myP5 = new p5(this.s, this.myRef.current);

        setTimeout(() => {
            setInterval(() => {
                this.setState({
                    // x: this.state.x + 1
                    x: this.state.x > this.state.w 
                        ? -50
                        : this.state.x + 1
                })
            }, 15)
        }, 1000)
    }

    render() {
        
        if(this.myP5) {
            this.myP5.redraw();
        }

        return (
            <div className="sketch">

            <div ref={this.myRef} />
            <input 
                ref={this.inputRef}
                value={this.state.x}
                onChange={this.inputChanged}
            />
            </div>
        );
    }
}