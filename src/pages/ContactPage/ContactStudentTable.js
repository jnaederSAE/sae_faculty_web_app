import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import SMSModal from "./Modals/SMSModal";
import EmailModal from "./Modals/EmailModal";
import CanvasModal from "./Modals/CanvasModal";
import ActivityModal from "./Modals/ActivityModal";
import { useState } from "react";

export default function ContactStudentTable({ allStudents }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const handleModalOpen = () => setModalIsOpen(true);
  function handleModalClose() {
    setModalIsOpen(false);
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "class",
      headerName: "Class",
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: "first_name",
      headerName: "First Name",
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: "sms",
      headerName: "SMS",
      width: 130,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const student = params.row;
        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setCurrentModal(
                <SMSModal
                  student={student}
                  handleModalClose={handleModalClose}
                />
              );
              handleModalOpen();
            }}
          >
            SMS
          </Button>
        );
      },
    },
    {
      field: "send_email",
      headerName: "Email",
      width: 130,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const student = params.row;
        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setCurrentModal(
                <EmailModal
                  student={student}
                  handleModalClose={handleModalClose}
                />
              );
              handleModalOpen();
            }}
          >
            Email
          </Button>
        );
      },
    },
    {
      field: "canvas",
      headerName: "Canvas",
      width: 130,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const student = params.row;
        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setCurrentModal(
                <CanvasModal
                  student={student}
                  handleModalClose={handleModalClose}
                />
              );
              handleModalOpen();
            }}
          >
            Canvas
          </Button>
        );
      },
    },
    {
      field: "activity",
      headerName: "Activity",
      width: 130,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const student = params.row;
        return (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setCurrentModal(
                <ActivityModal
                  student={student}
                  handleModalClose={handleModalClose}
                />
              );
              handleModalOpen();
            }}
          >
            Activity
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <DataGrid
        rows={allStudents}
        columns={columns}
        density="compact"
        autoPageSize
      />
      <Modal open={modalIsOpen} onClose={handleModalClose}>
        <div>{currentModal}</div>
      </Modal>
    </>
  );
}
