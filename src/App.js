import React, { Component } from "react";
import ReportCards from "./components/ReportCards";

class App extends Component {
  state = {
    students: [
      {
        studentId: 1,
        studentName: "Alice",
        studentImageUrl: "https://placehold.it/300x200"
      },
      {
        studentId: 2,
        studentName: "Bob",
        studentImageUrl: "https://placehold.it/300x200"
      },
      {
        studentId: 3,
        studentName: "Carol",
        studentImageUrl: "https://placehold.it/300x200"
      },
      {
        studentId: 4,
        studentName: "Dan",
        studentImageUrl: "https://placehold.it/300x200"
      }
    ],
    courses: [
      {
        courseId: 1,
        courseName: "Biology"
      },
      {
        courseId: 2,
        courseName: "Math"
      },
      {
        courseId: 3,
        courseName: "History"
      },
      {
        courseId: 4,
        courseName: "English"
      },
      {
        courseId: 5,
        courseName: "Psychology"
      }
    ],
    grades: [
      {
        studentId: 1,
        courseId: 1,
        grade: 90.1
      },
      {
        studentId: 1,
        courseId: 2,
        grade: 85.6
      },
      {
        studentId: 1,
        courseId: 4,
        grade: 80.4
      },
      {
        studentId: 1,
        courseId: 5,
        grade: 78.5
      },
      {
        studentId: 2,
        courseId: 2,
        grade: 95.2
      },
      {
        studentId: 2,
        courseId: 3,
        grade: 56.5
      },
      {
        studentId: 2,
        courseId: 4,
        grade: 50.2
      },
      {
        studentId: 3,
        courseId: 1,
        grade: 80.2
      },
      {
        studentId: 3,
        courseId: 5,
        grade: 40.2
      }
    ]
  };

  compnentDidMount() {
    this.mapData();
  }

  mapData = () => {
    this.state.students.map(student => {
      const studentName = student.studentName;
      const studentImageUrl = student.studentImageUrl;
      const gradesForStudent = this.state.grades.filter(
        grade => grade.studentId == student.studentId
      );
      gradesForStudent.map(grade =>
        this.state.courses.find(course => course.courseId == grade.courseId)
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <ReportCards />
      </React.Fragment>
    );
  }
}

export default App;
