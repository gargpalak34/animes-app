import React from 'react'
import './Main.css';
// import axios from 'axios'
import FlipMove from 'react-flip-move';
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useNavigate} from 'react-router-dom';
function Main({data}) {
    const history = useNavigate();
    function checkLength(string){
        if(string.length > 30){
            var re = string.substr(30);
            return string.replace(re,'...')
        }
        else{
            return string;
        }
    }
    return (
        <FlipMove enterAnimation="fade" leaveAnimation="elevator" className='main'>
                
            {
                data.length!==0?
                data.map((item, index)=>{
                    return(

                        <div key={index} className='card' 
                         onClick={()=>{
                            history(`/info/${item.id}`)
                        }}>
                            <img src={item.image} alt="" />
                            <h4> {checkLength(item.title)} </h4>
                            <div id='visible'>
                            </div>
                        </div>
                    )   
                })
                :
                <h1 style={{color:'purple'}}>Loading...</h1>
            }
        
            </FlipMove>
    )
}

export default Main