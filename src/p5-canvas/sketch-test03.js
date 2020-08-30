import React from 'react';
import p5 from 'p5';

export default class SketchTestThree extends React.Component {

    constructor(props) {
        super(props)
        this.renderRef = new React.createRef()
        this.inputRef = new React.createRef()
    }

    s = ( sketch ) => {
        
        sketch.setup = () => {
            sketch.createCanvas(200, 200);

            // Disable p5 draw() from continually rendering.
            // React will specify when p5 should loop in render()
            sketch.noLoop();
        };
        
        sketch.draw = () => {
            sketch.background(0);
            sketch.fill(this.props.rgb);
            sketch.rect(this.props.x, this.props.y, 50, 50);
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
        this.myP5 = new p5(this.s, this.renderRef.current);
    }

    render() {
        
        if(this.myP5) {
            this.myP5.redraw();
        }

        return (
            <div className="sketch">

            <div ref={this.renderRef} />
            <input 
                ref={this.inputRef}
                value={this.props.x}
            />
            </div>
        );
    }
}