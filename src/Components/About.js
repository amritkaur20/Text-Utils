import React,{useState} from "react";

function About(){

const [myStyle , setMyStyle] = useState(
    {
        color: "black",
        backgroundColor:"white"
    })

   const toggle =()=>{
        if(myStyle.color === "white"){
            setMyStyle({
                color: "black",
                backgroundColor:"white",
                boder: "1px solid white"
            })
        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor:"black"
            })
        }

    }
    
    return(
        <div className="container" style={myStyle}>
        <h1 className="my-3">About Button</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Uppercase Button
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Uppercase letters are capital letters</strong>—the bigger, taller versions of letters (like W), as opposed to the smaller versions, which are called lowercase letters (like w). Uppercase means the same thing as capital. Uppercase letters can also be called capitals.  </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     LowerCase Button
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong> Lowercase letters are the shorter</strong>,smaller versions of letters (like w), as opposed to the bigger, taller versions (like W), which are called uppercase letters or capital letters. The adjective lowercase can also be used as a noun meaning the same thing as lowercase letter, though this is much less commonly used    </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Reverse Button
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Reversing letters means your child writes certain letters (or numbers) backwards or upside down. This is sometimes referred to as mirror writing. It's different from transposing letters, which means switching the order of letters.</div>
    </div>
  </div>
</div>

<div className="container">
<button type="button" onClick={toggle} className="btn btn-secondary my-3">Enable dark mode</button>
        </div>
        
        </div>
    )
}
export default About;