import React, { Component } from 'react';
import './Input.css';
class SelectAll extends Component {
    render(){
        return(
            <footer className="footer">
                <input type="checkbox" onChange={this.props.onChange} checked={this.props.checked}/>全选
                <button onClick={this.props.onClick}>删除已完成</button>
            </footer>
        )
    }
}


export default SelectAll