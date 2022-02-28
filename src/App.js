import { useState, useEffect } from "react";
import "./App.css";

// custom components
import Form from "./components/form/AddEditForm.component";
import Dashboard from "./components/dashboard/Dashboard.component";
import ModalWindow from "./modal/ModalWindow.component";

// third party libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// context for global state management
import { AppContext } from "./context/appContext";

function App() {
  const [studentDB, setStudentDB] = useState(
    JSON.parse(localStorage.getItem("studentDB")) || []
  );
  const [modalData, setModalData] = useState({});
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [showModal, setShowModal] = useState("hidden");

  // addition of new student
  const addNewStudent = (newStudentData) => {
    const id = uuidv4();
    const student = { id, ...newStudentData };
    setStudentDB([...studentDB, student]);
    localStorage.setItem("studentDB", JSON.stringify([...studentDB, student]));
  };

  // geting id to edit
  const getStudentToEdit = (id) => {
    setStudentToEdit(studentDB.find((student) => student.id === id));
  };

  // submit edited data
  const submitEditData = (data) => {
    const updatedData = studentDB.map((student) =>
      student.id === data.id ? { ...student, ...data } : student
    );
    setStudentDB([...updatedData]);
    setStudentToEdit(null);
    localStorage.setItem("studentDB", JSON.stringify([...updatedData]));
  };

  // modal toggler
  const modalToggler = () => {
    setShowModal(showModal === "hidden" ? "show" : "hidden");
  };

  // set data in modal
  const modalDataSetter = (data) => {
    setModalData(data);
  };

  console.log(modalData);

  return (
    <AppContext.Provider
      value={{
        studentDB,
        addNewStudent,
        getStudentToEdit,
        studentToEdit,
        submitEditData,
        modalToggler,
        showModal,
        modalData,
        modalDataSetter,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-edit-form" element={<Form />} />
          </Routes>
        </Router>
        <ModalWindow modalData={modalData} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
