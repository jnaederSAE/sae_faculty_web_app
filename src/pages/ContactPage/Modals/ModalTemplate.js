export default function ModalTemplate({ content, modalDisplay, closeModal }) {
  return (
    <>
      <div
        className={`modal ${modalDisplay}`}
        onClick={(e) => {
          const classNames = e.target.className.split(" ");
          if (classNames.includes("modal")) {
            closeModal();
          }
        }}
      >
        {content}
      </div>
    </>
  );
}
