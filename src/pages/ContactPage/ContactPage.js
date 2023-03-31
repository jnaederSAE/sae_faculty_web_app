import "./contactPage.css";
import ContactPageOptions from "./ContactPageOptions";
import StudentRow from "./StudentRow";
import { studentInfo } from "../../fake_database/students";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [allStudents, setAllStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("all");

  useEffect(() => {
    setAllStudents(studentInfo);
    const courses = new Set(studentInfo.map((student) => student.class));
    setCourses(courses);
  }, []);

  return (
    <>
      <div>
        <h2 className="page_title">Student Contact Page</h2>
      </div>
      <ContactPageOptions
        courses={courses}
        setCurrentCourse={setCurrentCourse}
      />
      <div>
        <table className="student_table">
          <tbody>
            {allStudents
              .filter((student) => {
                return currentCourse === "all"
                  ? true
                  : student.class === currentCourse;
              })
              .map((student, i) => (
                <StudentRow key={i} student={student} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
