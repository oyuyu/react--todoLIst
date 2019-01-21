import React, { Component } from 'react';
import './Input.css';
class List extends Component {
    render(){
        console.log(this.props.defIterm);
        
        return(
            <div  className="todoIterm">
            {
            this.props.defIterm.map((val,index)=>{
              return(
                <div  key={index}>
                  <input type="checkbox" onChange={ () => {this.props.onChange(index)}} checked={val.checked}/>
                  <span>{val.list}</span>
                  <span className="did">{val.checked ? '已完成': '未完成'}</span>
                  <span className="time">{val.time}</span>
                  {/* 子向父传参数 */}
                  <button onClick={ () => {this.props.onClick(index)}}>删除</button>
                </div>
              )
            }) 
          }
        </div>
        )
    }
}


export default List