// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function onEvent(event) {
            console.log("Good!")
        }
    function offEvent(event) {
            console.log("Hey! Eyes on me!")
    }
      
    

    return <button onFocus={onEvent} onBlur={offEvent}>Eyes on me</button>
}

export default EyesOnMe