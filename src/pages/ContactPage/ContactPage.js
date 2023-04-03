import ContactPageOptions from "./ContactPageOptions";
import ContactStudentTable from "./ContactStudentTable";
import StudentRow from "./StudentRow";
import { studentInfo } from "../../fake_database/students";
import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function ContactPage() {
  const [allStudents, setAllStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("all");

  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    setAllStudents(studentInfo);
    const courses = new Set(studentInfo.map((student) => student.class));
    setCourses(courses);
  }, []);

  return (
    <>
      <Container>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4">
            {profile.full_name}'s Contact Page
          </Typography>
        </Box>
        <Box height={"70vh"}>
          <ContactStudentTable allStudents={allStudents} />
        </Box>
      </Container>
    </>
  );
}
