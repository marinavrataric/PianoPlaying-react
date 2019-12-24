import React, { Component } from 'react'

import PianoButton from './PianoButtons'

import aNote from './notes/a.wav'
import bNote from './notes/b.wav'
import aSharpNote from './notes/aSharp.wav'
import cSharpNote from './notes/cSharp.wav'
import cNote from './notes/c.wav'
import dNote from './notes/d.wav'
import eNote from './notes/e.wav'
import dSharpNote from './notes/dSharp.wav'
import fSharpNote from './notes/fSharp.wav'
import fNote from './notes/f.wav'
import gSharpNote from './notes/gSharp.wav'
import gNote from './notes/g.wav'



class AppPiano extends Component {
    constructor() {
        super()
        this.state = {
            note: '',
            noteBook: ''
        }
        this.onClick = this.onClick.bind(this)
        this.clear = this.clear.bind(this)
    }

    aNote = new Audio(aNote)
    bNote = new Audio(bNote)
    aSharpNote = new Audio(aSharpNote)
    cSharpNote = new Audio(cSharpNote)
    cNote = new Audio(cNote)
    dNote = new Audio(dNote)
    eNote = new Audio(eNote)
    dSharpNote = new Audio(dSharpNote)
    fSharpNote = new Audio(fSharpNote)
    fNote = new Audio(fNote)
    gSharpNote = new Audio(gSharpNote)
    gNote = new Audio(gNote)

    onClick(e){
        console.log(e.target.value)

        this.setState({
            note: e.target.value,
            noteBook: this.state.noteBook + ' ' + e.target.value 
        })

        if(this.state.note === 'a') {
            this.aNote.play()
        } else if(this.state.note === 'b') {
            this.bNote.play()
        } else if(this.state.note === 'a#') {
            this.aSharpNote.play()
        } else if(this.state.note === 'c#') {
            this.cSharpNote.play()
        } else if(this.state.note === 'c') {
            this.cNote.play()
        } else if(this.state.note === 'd') {
            this.dNote.play()
        } else if(this.state.note === 'e') {
            this.eNote.play()
        } else if(this.state.note === 'd#') {
            this.dSharpNote.play()
        } else if(this.state.note === 'f#') {
            this.fSharpNote.play()
        } else if(this.state.note === 'f') {
            this.fNote.play()
        }  else if(this.state.note === 'g#') {
            this.gSharpNote.play()
        }  else if(this.state.note === 'g') {
            this.gNote.play()
        } 
    }

    clear(){
        this.setState({
            noteBook: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h1>PIANO PLAY</h1>
                <PianoButton onClick={this.onClick}/>
                <PianoButton onClick={this.onClick}/>
                <div className="book">
                    <h2>Your notes</h2>
                    <h3>{this.state.noteBook}</h3>
                    <button 
                        className="clear" 
                        onClick={this.clear}
                    >Clear</button>
                </div>
            </div>
        )
    }
}

export default AppPiano