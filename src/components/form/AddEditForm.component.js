import React, { useContext } from "react";
import "./form.styles.scss";

// custom components
import Layout from "../layout/Layout.component";

// third party libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import { Link, useNavigate } from "react-router-dom";

// context
import { AppContext } from "../../context/appContext";

// validation schema
const schema = yup.object().shape({
  studentName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  fatherName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  dob: yup.date().max("2012-01-01").required("enter a valid Date of Birth"),
  address: yup.string().required(),
  city: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  state: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  pinCode: yup
    .string()
    .required()
    .matches(/^[1-9][0-9]{5}$/, "enter valid Pin code"),
  phone: yup.string().phone("IN", true).required(),
  email: yup.string().email().required(),
  marks: yup.number().max(100).required(),
  enrolmentDate: yup.date().required(),
  classOpted: yup.string().required(),
});

export default function AddEditForm() {
  const { studentToEdit, addNewStudent, submitEditData } = useContext(
    AppContext
  );

  console.log(studentToEdit);

  // using usenavigator hook for navigate to "/" route
  const navigate = useNavigate();

  // initializing useform hook in order to use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: studentToEdit ? studentToEdit : {},
  });

  // on submit form using react-hook-form
  const onSubmit = (data) => {
    console.log("submit");
    if (studentToEdit) {
      submitEditData(data);
    } else {
      addNewStudent(data);
    }
  };

  return (
    <Layout>
      <div className="form">
        <Link to="/" className="go-to-dash">Go To Dash</Link>
        <h2 className="title">Fill the Student information</h2>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            navigate("/");
          })}
        >
          <div className="input-control">
            <label htmlFor="student-name">Student Name</label>
            <input
              type="text"
              name="studentName"
              {...register("studentName")}
            />
            <p className="error">{errors.studentName?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="fatherName">Father's Name</label>
            <input type="text" name="fatherName" {...register("fatherName")} />
            <p className="error">{errors.fatherName?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              name="dob"
              {...register("dob", { valueAsDate: true })}
            />
            <p className="error">{errors.dob?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" {...register("address")} />
            <p className="error">{errors.address?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="city">City</label>
            <input type="text" name="city" {...register("city")} />
            <p className="error">{errors.city?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="state">State</label>
            <input type="text" name="state" {...register("state")} />
            <p className="error">{errors.state?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="pinCode">Pin Code</label>
            <input type="text" name="pinCode" {...register("pinCode")} />
            <p className="error">{errors.pinCode?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="phone">Phone No</label>
            <input type="text" name="phone" {...register("phone")} />
            <p className="error">{errors.phone?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="marks">Mark in %</label>
            <input type="text" name="marks" {...register("marks")} />
            <p className="error">{errors.marks?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="date">Enrolment Date</label>
            <input
              type="date"
              name="enrolmentDate"
              {...register("enrolmentDate")}
            />
            <p className="error">{errors.enrolmentDate?.message}</p>
          </div>
          <div className="input-control">
            <label htmlFor="classOpted">Class Opted</label>
            <select name="classOpted" {...register("classOpted")}>
              <option value="">Select Class</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
            </select>
            <p className="error">{errors.classOpted?.message}</p>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
