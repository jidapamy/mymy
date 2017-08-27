// import React from 'react'; //imr tap
// import React, { Component } from 'react'; // imrc tap

// class Name extends Component{
//     render(){
//         return (
//             <div>
//                 <p> mymy </p>
//                 </div>
//         )
//     }
// }

// export default Name


// import React from 'react';
// // นิยมเขียน stateless Component >> จะทำได้แค่ return ตัวเดียวห

// // props คือ เป็นการส่ง attribute ไปหา component ให้ไฟล์นี้เป็นไปตามตัว APP 
// // โดยตรงที่จะเรียก ต้องเป็น props. แล้วตามด้วย attribute ในหน้า app
// // <Name title="mymy"> 20 </Name> ทั้งตัว title จะเป็นตัวที่คิดเอง และค่าด้านใน tag จะเรียกว่า children
// const Name = props => (
//     <div> 
//         <p> {props.title}  {props.children} </p>
//     </div>
// )
// export default Name;
// // export {Name}

// //state เป็นตัวกำหนดว่า จะ render ตัวไหน


import React from 'react';
const Name = props => {
    // ทำไม่ได้แบบนี้
    // const addAge=()=>{
    //     props.age = props.age+1
    //     // props จะสามารถ read ได้อย่างเดียว ห้าม write ทับ จำ
    // }
    return (    <div> 
                    <p> {props.title} {props.children}</p>
                    <button onClick={addAge}> add </button>
                </div>
    )}
    export default Name;