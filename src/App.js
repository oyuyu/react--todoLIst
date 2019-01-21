import React, { Component } from 'react';
import logo from './logo.svg';
import AddList from './Input';
import './App.css';
import List from './List';
import SelectAll from './SelectAll';


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
    console.log(this.state.val);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AddList value={this.state.val} 
              onKeyDown={(e)=>{if(e.keyCode === 13){this.addIterm()}}}
              onChange={this.iptChange}
              onClick={this.addIterm}
        />

        {/* 注意  onClick={() => { this.deleIterm(index) }}   模块化的改法 */}
        <List defIterm={this.state.defIterm}
              onChange={this.boxChange}
              //checked={val.checked}
              onClick={this.deleIterm}/>

        <SelectAll  
            onChange={this.selectAll} 
            checked={this.state.selectAll}
            onClick={this.delSelected}/>
        
        
        
        
      </div>
    );
  }
}

export default App;
