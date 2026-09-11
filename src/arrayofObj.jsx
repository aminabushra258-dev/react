import React from 'react'

function ArrayofObj() {
  let studentarrayObj = [
    {
      name: "Amna",
      age: 21,
      city: "Faisalabad",
    },
    {
      name: "Zara",
      age: 21,
      city: "Karachi",
    },
    {
      name: "Eman",
      age: 24,
      city: "Faisalabad",
    }
  ]

  console.log(studentarrayObj[0].name)

  return (
    <>
      {studentarrayObj.map((student) => {
        return (
          <div>
            <p>Student Name is {student.name}</p>
            <p>Student age is {student.age}</p>
            <p>Student lives in {student.city}</p>
          </div>
        )
      })}
    </>
  )
}

export default ArrayofObj