export default function ContactPage({ courses, setCurrentCourse }) {
  const allCourses = [...courses];
  return (
    <>
      <div className="options_bar">
        <div className="options_section">
          <label htmlFor="course_filter">Course Filter</label>
          <select
            name="course_filter"
            onChange={(e) => setCurrentCourse(e.target.value)}
          >
            <option value="all">All</option>
            {allCourses.map((course, i) => (
              <option key={i}>{course}</option>
            ))}
          </select>
        </div>
        <div className="options_section">
          <label htmlFor="absent_filter">Is Absent</label>
          <input type="checkbox" name="absent_filter" />
        </div>
        <div className="options_section_date">
          <label>Date Filter</label>
          <div className="date_filter">
            <div>
              <label htmlFor="start_date">Start Date</label>
              <input type="date" name="start_date" />
            </div>
            <div>
              <label htmlFor="end_date">End Date</label>
              <input type="date" name="end_date" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
