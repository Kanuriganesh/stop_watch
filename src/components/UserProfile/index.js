import {Component} from 'react';
import './index.css';
class UserProfile extends Component{
  state={backgroundColor:'red'}
  changeTheBackGround=(event)=>{
    const  {changeUpdates}=this.props; 
     this.setState({backgroundColor:event.target.value}) 
     changeUpdates(event.target.value)
  }
  optionsList=()=>{
    return  (
        <select className='input-select-styling' onChange={this.changeTheBackGround}>
             <option value='red'>Red</option>
             <option value='pink'>Pink</option> 
             <option value='yellow'>yellow</option>
        </select>
    )
}
  render(){ 
    const {backgroundColor} = this.state; 
    const  {changeUpdates}=this.props; 
    console.log(backgroundColor)
    return(
       <div>
             {this.optionsList()}
       </div>
    )
  }
}
export default   UserProfile;