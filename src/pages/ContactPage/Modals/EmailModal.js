export default function EmailModal({ student, closeModal }) {
  const sendEmail = () => {
    console.log(`Sent email to ${student.email}`);
    alert(`Sent email to ${student.email}`);
  };

  return (
    <>
      <div className="modal_content">
        <h2>{`${student.first_name} ${student.last_name}`}</h2>
        <p>{student.email}</p>
        <textarea></textarea>
        <button
          onClick={() => {
            closeModal();
            sendEmail();
          }}
        >
          Send Email
        </button>
      </div>
    </>
  );
}
