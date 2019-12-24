import React from 'react'

function PianoButton(props) {
    return (
       <div className="pianoBtns">
            <div className="white">
                <button className="whiteBtn" value="c" onClick={props.onClick}>C</button>
                <button className="whiteBtn" value="d" onClick={props.onClick}>D</button>
                <button className="whiteBtn" value="e" onClick={props.onClick}>E</button>
                <button className="whiteBtn" value="f" onClick={props.onClick}>F</button>
                <button className="whiteBtn" value="g" onClick={props.onClick}>G</button>
                <button className="whiteBtn" value="a" onClick={props.onClick}>A</button>
                <button className="whiteBtn" value="b" onClick={props.onClick}>B</button>
            </div>
            <div className="black1">
                <button className="blackBtn blackBtnC" value="c#" onClick={props.onClick}>C#</button>
                <button className="blackBtn blackBtnD" value="d#" onClick={props.onClick}>D#</button>
            </div>
            <div className="black2">
                <button className="blackBtn blackBtnF" value="f#" onClick={props.onClick}>F#</button>
                <button className="blackBtn blackBtnG" value="g#" onClick={props.onClick}>G#</button>
                <button className="blackBtn blackBtnA" value="a#" onClick={props.onClick}>A#</button>
            </div>
       </div>
    )
}

export default PianoButton