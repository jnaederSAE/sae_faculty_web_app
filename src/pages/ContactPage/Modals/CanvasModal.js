export default function CanvasModal({ student, closeModal }) {
  const sendCanvas = () => {
    console.log(`Sent canvas message to ${student.email}`);
    alert(`Sent canvas message to ${student.email}`);
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
            sendCanvas();
          }}
        >
          Send Canvas Message
        </button>
      </div>
    </>
  );
}
