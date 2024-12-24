import React, {useState, useEffect} from 'react';
import '../styles/TypingEffect.css'
function TypingEffect({text}){
    const [intro,setIntro] =useState("");
    let index =0;
    useEffect(()=>{
        const timer= setInterval(()=>{
          if (index<text.length){
            setIntro((prev)=>
          prev + text.charAt(index));
          index++;} 
          else{clearInterval(timer);}
        },100);

        return()=> clearInterval(timer)


    },[text]);

    return <div className="out"> 

<p className="heroCont">{intro} </p> 
    
   
    
    
    
    </div>;
    
};
export default TypingEffect;