import CardHeader from "./card_header";
import Options from "./options";
// import logo from './img1.png';
import React from 'react';
const images = require.context('../../public/images', true);
export default function Card(){
    let queImage;
    const [res,setRes] = React.useState(null);
    const image= React.useRef('');
    React.useEffect(() => {
        fetch('https://main--snazzy-truffle-f37f48.netlify.app/.netlify/functions/app/question')
          .then(results => results.json())
          .then(data => {
            setRes(data[0]);
            queImage = require('../../public/images/'+data[0].image+'.png')
            image.current = queImage
          });
      }, []); 
    return (<div>
        <CardHeader/>
        <div style={{display:'flex',gap:'10%'}}>
            <div>
            {/* <img src={`/static/media/${res?.image}.png`} /> */}
                <img src={image.current} alt="image"/>
            </div>
            <div>
                {res?.question}
            </div>
        </div>
        <Options option1={res?.option1} option2={res?.option2}  option3={res?.option3}  option4={res?.option4} correct={res?.correct}/>

        <button>New Quiz</button>
    </div>)
}