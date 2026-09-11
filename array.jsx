import React from 'react'
function Array() {

    let studentArray=["sara", "saad", "ali", "ahmed", "hassan"]
  console.log("length", studentArray.length)
   console.log("first element", studentArray[0])
     console.log("second element", studentArray[1])
     console.log("third element", studentArray[2])


  return (
    <>
    <p>Array Example</p>
    <p>{studentArray.join(", ")}</p>
    <p>Student Array: {studentArray.join(", ")}</p>
    <p>First Student: {studentArray[0]}</p>
    <p>Second Student: {studentArray[1]}</p>
    <p>Third Student: {studentArray[2]}</p>
    </>
  );
}
export default Array