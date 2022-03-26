import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div>
            <h1>How react work?</h1>
            <p>React is a JavaScript library.react has 6 main parts,these are JSX,component,props,state,event-Handler and data load.It create interactive UI.Html code write in JSX format.React efficiently update and render The components which has change the data.React uses more components.SoThe code is simpler.</p>
            <h1>Props vs State</h1>
            <div className="differ">
                <div className="left">
                    <h1>Props</h1>
                    <p>1. Props are read-only.</p>
                    <p>2. The Data is passed from one component to another.</p>
                    <p>3. Props are immutable.</p>
                    <p>4. Props make components reusable.</p>
                </div>
                <div className="right">
                    <h1>State</h1>
                    <p>1. State changes can be asynchronous.</p>
                    <p>2. The Data is passed within the component only.</p>
                    <p>3. State is mutable.</p>
                    <p>4. State cannot make components reusable.</p>
                </div>
            </div>
            <h1>how useState works?</h1>
            <p>useState is a function.It returns a stateful value and a function to update it.It is also called hook.It connect to react.useState put the state variable on functional component.</p>
        </div>
    );
};

export default Question;