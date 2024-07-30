import React, {useState} from 'react'

export default function Textform(props) {
    
    const [text,settext]=useState("Enter the text here")

    const handleit=(e)=>{
      settext(e.target.value)
    }

    const intoup=()=>{
      props.showalert("Successfully converted to Uppercase","success")
        let newtext=text.toUpperCase();
        settext(newtext)
    }

    const intodown=()=>{
      props.showalert("Successfully converted to Lowercase","success")
        let newtext=text.toLowerCase();
        settext(newtext)
    }

  const Clear=()=>{
    props.showalert("Successfully converted to Clear","success")
    let newtext="";
    settext(newtext)
}


    return (
      <div>
         <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.headings21}</h1>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <textarea className="form-control" value={text} onChange={handleit} style={{backgroundColor: props.mode==='dark'?'#301934':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={intoup}>Click to Uppercase</button>
        <button className="btn btn-primary mx-3"  onClick={intodown}>Click to lowercase</button>
        <button className="btn btn-primary"  onClick={Clear}>Click to clear</button>
        
      </div>
      <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>
          Your text summary
        </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
           {0.008*text.split(" ").length} Minutes required to read this text
        </p>
        <h2>
          preview
        </h2>
        <p>
          {text.length>0?text:"Enter Something then we'll preview it"}
        </p>
      </div>

      </div>
    )
}
