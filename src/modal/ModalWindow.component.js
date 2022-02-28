import React, { useContext } from "react";
import "./modalWindow.styles.scss";

// third party libs
import { CloseOutlined } from "@material-ui/icons";

// context
import { AppContext } from "../context/appContext";

export default function ModalWindow({ modalData }) {
  const { showModal, modalToggler } = useContext(AppContext);
  return (
    <div className={`modal-window ${showModal}`}>
      <div className="inner-wrapper">
        <div className="close">
          <span onClick={() => modalToggler()}>
            <CloseOutlined />
          </span>
        </div>

        {modalData && (
          <ul>
            <li>
              <b>Student Name:</b>
              {modalData.studentName}
            </li>
            <li>
              <b>Father's Name:</b>
              {modalData.fatherName}
            </li>
            <li>
              <b>DOB:</b>{" "}
              {`${new Date(modalData.dob).getFullYear()} - ${new Date(
                modalData.dob
              ).getMonth()} - ${new Date(modalData.dob).getDate()}`}
            </li>
            <li>
              <b>Email:</b>
              {modalData.email}
            </li>
            <li>
              <b>CIty:</b> {modalData.city}
            </li>
            <li>
              <b>State:</b> {modalData.state}
            </li>
            <li>
              <b>Phone:</b> {modalData.phone}
            </li>
            <li>
              <b>Class</b> {modalData.classOpted}
            </li>
            <li>
              <b>Enrolment Date :</b>
              {`${new Date(modalData.enrolmentDate).getFullYear()} - ${
                new Date(modalData.enrolmentDate).getMonth() + 1
              } - ${new Date(modalData.enrolmentDate).getDate()}`}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
