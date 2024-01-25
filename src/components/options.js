import React from "react";

function Options(props){
    let optionStyle = {display:'flex',gap:'10%'}
    // console.log(props);
    const [optionSelected,SetoptionSlected]  = React.useState('0')
    function handleChangeEvent(optionSelected){
        // console.log(event.target.value);
        SetoptionSlected(optionSelected);
    }
    return(
        <div>
            Choose Answer
            <div>
                <span style = {optionStyle}><input name="options" type="radio" onChange={()=>{handleChangeEvent("1")}}/> {props.option1} {props.correct === '1'?<span>Correct Answer</span>:optionSelected==='1'?<span>Incorrect Answer</span>:''} </span>
                <span style = {optionStyle}><input name="options" type="radio" onChange={()=>{handleChangeEvent("2")}}/> {props.option2} {props.correct === '2'?<span>Correct Answer</span>:optionSelected==='2'?<span>Incorrect Answer</span>:''}</span>
                <span style = {optionStyle}><input name="options" type="radio" onChange={()=>{handleChangeEvent("3")}}/> {props.option3} {props.correct === '3'?<span>Correct Answer</span>:optionSelected==='3'?<span>Incorrect Answer</span>:''} </span>
                <span style = {optionStyle}><input name="options" type="radio" onChange={()=>{handleChangeEvent("4")}}/> {props.option4} {props.correct === '4'?<span>Correct Answer</span>:optionSelected==='4'?<span>Incorrect Answer</span>:''}</span>
            </div>
        </div>
    )
}
export default Options;