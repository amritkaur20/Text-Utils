import React,{useState} from "react"

function Textform(props){
    const [text , setText] = useState("")

    const handle1 =()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handle2 =()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handle3= (event) => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
    }

    const handle4 =()=>{
        let newText = ""
        setText(newText)
    }

    const handleClick =(event)=>{
        setText(event.target.value)
    }
    return(
        <div>
         
        <div className="container" style={{color:props.mode==="light"?"#042743":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-4">
   <textarea className="form-control" value={text} onChange={handleClick} style={{backgroundColor:props.mode==="light"?"white":"#6d758d" , color:props.mode==="light"?"#042743":"white"}} id="myBox" rows="8"></textarea></div>
   <button type="button" className="btn btn-primary mx-1" onClick={handle1}>UpperCase Text</button>
   <button type="button" className="btn btn-primary mx-1" onClick={handle2}>LowerCase Text</button>
   <button type="button" className="btn btn-primary mx-1" onClick={handle3}>Reverse Text</button>
   <button type="button" className="btn btn-primary mx-1" onClick={handle4}>Clear Text</button>

        </div>

        <div className="container my-3" style={{color:props.mode==="light"?"#042743":"white"}}>
        <h2>Text Summary</h2>
        <p>{text === ''? 0 : text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>

        </div>
        
    )
}
export default Textform

