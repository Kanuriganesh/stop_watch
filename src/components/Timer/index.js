import React from 'react';
import { Component } from 'react'; 
import './index.css'
class Timer   extends Component{
    state={minutes:0 , seconds:0}

    componentDidMount(){
        this.timerId=setInterval(this.tick,1000)
    }
    stopTheTimer=()=>{
       clearInterval(this.timerId)
    }
    tick=()=>{
        const {minutes,seconds} = this.state;
        if(seconds == 60){
            this.setState(prevState=>({
                minutes:prevState.minutes + 1, 
                seconds:0,
            }))
        } 
        else{
            this.setState(prevState=>({
                seconds:prevState.seconds+1
            }))
        }
    }
    render(){
        const {minutes,seconds} = this.state;
    return(
       <div>
             <p className='paragraph'>{minutes<10?'0'+minutes:minutes}:{seconds<10 ?'0'+seconds:seconds}</p> 
             <button onClick={this.stopTheTimer} className='button-style'>Stop</button>
       </div> 
    )
    }
}
export default Timer;