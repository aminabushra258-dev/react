import React from 'react'

function Object() {
  let studentObj = {
    name: "Sara",
    age: 21,
    city: "Islamabad",
  }

  console.log(studentObj)
  console.log(studentObj.name)
  console.log(studentObj.age)
  console.log(studentObj.city)

  return (
    <>
      <p>Example of Simple Object</p>
      <p>Student Name: {studentObj.name}</p>
      <p>Student Age: {studentObj.age}</p>
      <p>Student City: {studentObj.city}</p>
    </>
  )
}

export default Object