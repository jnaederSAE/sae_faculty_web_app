import "./contactPage.css";
import ContactPageOptions from "./ContactPageOptions";
import StudentRow from "./StudentRow";
import SMSModal from "./Modals/SMSModal";
import EmailModal from "./Modals/EmailModal";
import CanvasModal from "./Modals/CanvasModal";
import ActivityModal from "./Modals/ActivityModal";
import ModalTemplate from "./Modals/ModalTemplate";
import { studentInfo } from "../../fake_database/students";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [allStudents, setAllStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("all");
  const [modalDisplay, setModalDisplay] = useState("modal_closed");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    setAllStudents(studentInfo);
    const courses = new Set(studentInfo.map((student) => student.class));
    setCourses(courses);
  }, []);

  const closeModal = (e) => {
    setModalDisplay("modal_closed");
    setModalContent(null);
  };

  const openModal = (modalType, student) => {
    switch (modalType) {
      case "SMS":
        setModalContent(<SMSModal student={student} closeModal={closeModal} />);
        break;
      case "Email":
        setModalContent(
          <EmailModal student={student} closeModal={closeModal} />
        );
        break;
      case "Canvas":
        setModalContent(
          <CanvasModal student={student} closeModal={closeModal} />
        );
        break;
      case "Activity":
        setModalContent(
          <ActivityModal student={student} closeModal={closeModal} />
        );
        break;
      default:
        setCurrentCourse(null);
    }
    setModalDisplay("modal_open");
  };

  return (
    <>
      <ModalTemplate
        content={modalContent}
        modalDisplay={modalDisplay}
        closeModal={closeModal}
      />
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
                <StudentRow key={i} student={student} openModal={openModal} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
