export default function SMSModal({ student, closeModal }) {
  const sendText = () => {
    console.log(`Sent text to ${student.phone}`);
    alert(`Sent text to ${student.phone}`);
  };
  return (
    <>
      <div className="modal_content">
        <h2>{`${student.first_name} ${student.last_name}`}</h2>
        <p>{`tel - ${student.phone}`}</p>
        <textarea></textarea>
        <button
          onClick={() => {
            closeModal();
            sendText();
          }}
        >
          Send SMS
        </button>
      </div>
    </>
  );
}
