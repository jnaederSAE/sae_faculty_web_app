export default function ContactPage({ courses, setCurrentCourse }) {
  const allCourses = [...courses];
  return (
    <>
      <div className="options_bar">
        <div>
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
        <div>
          <label htmlFor="absent_filter">Is Absent</label>
          <input type="checkbox" name="absent_filter" />
        </div>
        <div>
          <label htmlFor="date_filter">Date Filter</label>
          <div>
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
