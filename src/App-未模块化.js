import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const defTime=new Date().toLocaleString()




class App extends Component {
  constructor(props){
    super(props)
    this.state={val:"", defIterm:[
      {list:"吃饭",time: defTime,checked:false},
      {list:"睡觉",time: defTime,checked:false},
      {list:"打豆豆",time: defTime,checked:false}
      ],
      selectAll:false
    }  
  }
  iptChange=(event)=>{
    this.setState({val:event.target.value})
  }
  addIterm=()=>{
    let newVal=this.state.val     //state的内容要先取出才可以操作
    let now=new Date().toLocaleString()
    let newIterm={list:newVal,time:now,checked:false}
    let newIterms=this.state.defIterm
    let iterm = this.state.defIterm;
    let haveBe=iterm.some((elem)=>{       //回调函数                            
      return elem.list===newVal   
    })
    console.log(newVal+haveBe);
    
    if (newVal&&!haveBe){
      
      newIterms.push(newIterm)
      this.setState({defIterm: newIterms})
    }
    this.setState({val:""})
  }
  deleIterm=(index)=>{
    let newIterms=this.state.defIterm
    newIterms.splice(index,1)
    this.setState({defIterm: newIterms})
  
    console.log(index)
  }
  delSelected=()=>{
    let iterms=this.state.defIterm
    let newIterm=iterms.filter((elem) => {
      return !elem.checked
    }); 
    this.setState({defIterm: newIterm})
  
    console.log(newIterm)
  }
  //checkbox 按钮用 onchange来控制事件
  boxChange=(index)=>{ 
    let defIterm = this.state.defIterm;
    defIterm[index].checked = !defIterm[index].checked;
    let selectAll=defIterm.every((elem)=>{       //回调函数                            
      return elem.checked    
    })
    this.setState({
      defIterm,selectAll
    })
  }
  selectAll=(event)=>{
    let iterms = this.state.defIterm;   
    const target = event.target;
    const value =target.checked;
    iterms.forEach(element => {
      element.checked=value
    }); 
    this.setState({
      iterms
    })
    this.setState({
      selectAll:value
    })
    console.log(this.state);
    
    // iterms = iterms.map(value => {
    //   value.checked = true;
    //   return value;
    // })
    // this.setState({
    //   defIterm: iterms
    // })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="todo">
                <input type="text"
                value={this.state.val} 
                onKeyDown={(e)=>{if(e.keyCode == 13){this.addIterm()}}}
                onChange={this.iptChange}
                placeholder="请输入代办事项......"/>
                <button onClick={this.addIterm} > 添加代办事项</button>   
        </div>
        <div  className="todoIterm">
          {
            this.state.defIterm.map((val,index)=>{
              return(
                <div  key={index}>
                  <input type="checkbox" onChange={() => {this.boxChange(index)}} checked={val.checked}/>
                  <span>{val.list}</span>
                  <span className="did">{val.checked ? '已完成': '未完成'}</span>
                  <span className="time">{val.time}</span>
                  {/* 子向父传参数 */}
                  <button onClick={() => { this.deleIterm(index) }}>删除</button>
                </div>
              )
            }) 
          }
        </div>
        <footer className="footer">
             <input type="checkbox" onChange={this.selectAll} checked={this.state.selectAll}/>全选
             <button onClick={this.delSelected}>删除已完成</button>
        </footer>
        
        
      </div>
    );
  }
}

export default App;
