import React,{useState} from 'react'

const Textform = (props) => {
    const[text,setText]=useState('write your text here')
    const onClick=(event)=>{
     setText(text.toUpperCase())
     props.showAlert("converted to upper case",'success')   
    }
    const onLowerCaseClick=(event)=>{
        setText(text.toLocaleLowerCase())
        props.showAlert("converted to Lower case",'success')   
    }
    const onChange=(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }
    const handleCopy=(event)=>{
     navigator.clipboard.writeText(text)
     props.showAlert("Text Copied",'success')

     setTimeout(() => {

        console.log(document.getSelection().removeAllRanges())

    }, 1000);
    }
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control mx-1" id="myBox" rows="9" value={text} onChange={onChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                    <button className={`btn btn-${props.cls} mx-1 my-1`} disabled={text.length===0} onClick={onClick}>Convert To Uppercase</button>
                    <button className={`btn btn-${props.cls} mx-1 my-1`} disabled={text.length===0} onClick={onLowerCaseClick}>Convert To Lowercase</button>
                    <button className={`btn btn-${props.cls} mx-1 my-1`} disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className='container my-2'>
                <h1>your text summary is </h1>
                <p>{text.split(" ").filter(ele=>ele.length!==0).length} words and {text.length} characters</p>
            </div>
        </>
    )
}

export default Textform
