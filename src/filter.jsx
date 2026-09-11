import React from 'react'

function Filter() {
  const studentlist = [
    {
      id: 1,
      name: "Amna",
      marks: 80,
      age: 21,
      course: "React.js",
    },
    {
      id: 2,
      name: "Sara",
      age: 19,
      marks: 72,
      course: "JavaScript",
    },
    {
      id: 3,
      name: "Ahmed",
      age: 23,
      marks: 55,
      course: "React JS",
    },
    {
      id: 4,
      name: "Alisha",
      age: 20,
      marks: 92,
      course: "Python",
    },
  ]

  const filteredstudents = studentlist.filter((student) => {
    const list = student.marks >= 70
    return list
  })

  return (
    <>
      <h2>Filtered Students (Marks greater than or equal to 70):</h2>

      <ul>
        {filteredstudents.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.marks} marks
          </li>
        ))}
      </ul>
    </>
  )
}

export default Filter