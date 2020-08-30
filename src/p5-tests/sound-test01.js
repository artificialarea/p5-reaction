import React from 'react';

// import * as p5 from 'p5';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound.js'; // need to explictly import from p5 node_module

import hihat from '../assets/hihat.mp3';
import zedd from '../assets/zedd.m4a';

export default class SoundTestOne extends React.Component { 

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {

        }
    }

    s = ( sketch ) => {
        
        let soundFile;
        
        sketch.preload = () => {
            this.soundFormats('mp3')

            // this.soundFile = sketch.loadSound(zedd);
            // this.sound = sketch.loadSound('../assets/zedd.m4a');

        } // [f1]
        
        sketch.setup = () => {
            sketch.createCanvas(20, 20);
            sketch.background('aquamarine')
        }
        
    }

    componentDidMount() {
        this.myP5 = new p5(this.s, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef} />
        );
    }

}