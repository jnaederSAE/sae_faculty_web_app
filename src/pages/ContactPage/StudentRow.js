export default function StudentRow({ student }) {
  return (
    <>
      <tr>
        <td>
          {student.first_name} {student.last_name}
        </td>
        <td>{student.class}</td>
        <td>
          <button>SMS</button>
        </td>
        <td>
          <button>Email</button>
        </td>
        <td>
          <button>Canvas</button>
        </td>
        <td>
          <button>Activity</button>
        </td>
      </tr>
    </>
  );
}
