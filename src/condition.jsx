import react from 'react'

function Condition() {
    let marks = 77
    let result

    if (marks >= 80) {
        result = "Grade A"
        console.log("Grade A")
    }
    else if (marks >= 70 && marks < 80) {
        result = "Grade B"
        console.log("Grade B")
    }
    else if (marks >= 60 && marks < 70) {
        result = "Grade C"
        console.log("Grade C")
    }
    else {
        result = "Fail"
        console.log("Fail")
    }

    return (
        <>
            <h2>Student Marks: {marks}</h2>
            <h2>Student Result: {result}</h2>
        </>
    )
}

export default Condition