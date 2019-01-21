import React, { Component } from 'react';
import './Input.css';
class AddList extends Component {
   
    render(){
        return(
            <div className="todo">
                <input type="text"
                value={this.props.value}
                onKeyDown={this.props.onKeyDown}
                onChange={this.props.onChange}
                placeholder="请输入代办事项......"/>
                <button onClick={this.props.onClick} > 添加代办事项</button>   
            </div>
        )
    }
}


export default AddList