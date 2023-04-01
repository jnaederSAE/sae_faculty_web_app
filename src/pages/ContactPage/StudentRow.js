export default function StudentRow({ student, openModal }) {
  return (
    <>
      <tr>
        <td>
          {student.first_name} {student.last_name}
        </td>
        <td>{student.class}</td>
        <td>
          <button onClick={() => openModal("SMS", student)}>SMS</button>
        </td>
        <td>
          <button onClick={() => openModal("Email", student)}>Email</button>
        </td>
        <td>
          <button onClick={() => openModal("Canvas", student)}>Canvas</button>
        </td>
        <td>
          <button onClick={() => openModal("Activity", student)}>
            Activity
          </button>
        </td>
      </tr>
    </>
  );
}
