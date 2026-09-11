import { useState } from "react";

function Attendance() {

  const [students, setStudents] = useState([
    { id: 1, name: "Amna", present: true },
    { id: 2, name: "Mateen", present: false },
    { id: 3, name: "Aneeza", present: true },
    { id: 4, name: "Beshair", present: false }
  ]);

  const markAttendance = (id) => {

    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: true }
          : student
      )
    );

  };

  return (
    <div>
      <h1>Student Attendance</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Attendance</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (
            <tr key={student.id}>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>
                {student.present ? "Present" : "Absent"}
              </td>

              <td>
                <button
                  onClick={() => markAttendance(student.id)}
                >
                  Mark Attendance
                </button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Attendance;