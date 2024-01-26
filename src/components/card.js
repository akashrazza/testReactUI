import CardHeader from "./card_header";
import Options from "./options";
// import logo from './img1.png';
import React from 'react';

export default function Card(){
    let queImage =  React.useRef('');
    const [res,setRes] = React.useState(null);
    const image= React.useRef('');
    React.useEffect(() => {
        fetch('https://ops-fbum.onrender.com/question')
          .then(results => results.json())
          .then(data => {
            setRes(data[0]);
            queImage.current = require('../../public/images/'+data[0].image+'.png')
            image.current = queImage.current
          });
      }, []); 
    return (<div>
        <CardHeader/>
        <div style={{display:'flex',gap:'10%'}}>
            <div>
            {/* <img src={`/static/media/${res?.image}.png`} /> */}
                <img src={image.current} alt="ops"/>
            </div>
            <div>
                {res?.question}
            </div>
        </div>
        <Options option1={res?.option1} option2={res?.option2}  option3={res?.option3}  option4={res?.option4} correct={res?.correct}/>

        <button>New Quiz</button>
    </div>)
}