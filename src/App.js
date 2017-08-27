import React, { Component } from 'react';
import Name from './name'; 

// การสร้าง state full Component คือจะมี class
class App extends Component{
  state = { age : 0}
  // click(){}
  // allow function =>
  // state จะเอาไว้ใช้ในการเปลี่ยนแปลงค่าใน function
  addAge = () => {
      this.setState({
        age : this.state.age+1
        // state สามารถเปลี่ยนแปลงค่าได้
      })
  }
  render(){ //อยาก return ไรให้ใส่ในนี้
    return ( //(Component) react จะ return ได้แค่ 1 component
      <div>
        <Name title="mymy" age={100}> 
          {this.state.age} 
        </Name>
        <button onClick={this.addAge}> Click </button>
      </div>
    ) 
  }
}

// ถ้าเอาอีก class มาแสดง (ดึงมาใช้) ให้เขียน <Name /> ได้เลย
// การที่เราส่ง default มา เราสามารถใช้ชื่ออื่นตอน import ได้ (ต้องเป็นตัวใหญ่)


export default App
