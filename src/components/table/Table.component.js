import React, { forwardRef, useContext } from "react";
import "./table.styles.scss";

// third party libs
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";

// context
import { AppContext } from "../../context/appContext";

// table icons config
const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

// columns
export const columns = [
  { title: "S.No", field: "tableData.id" },
  { title: "Student Name", field: "studentName" },
  { title: "Email", field: "email" },
  { title: "Phone", field: "phone" },
  { title: "Class", field: "classOpted" },
  { title: "Marks %", field: "marks" },
];

export default function Table() {
  // const preloadedValues = {studentName: };
  const {
    studentDB,
    getStudentToEdit,
    modalDataSetter,
    modalToggler,
  } = useContext(AppContext);

  return (
    <MaterialTable
      title="Students Database"
      data={studentDB}
      columns={columns}
      options={{ search: false, actionsColumnIndex: -1 }}
      icons={tableIcons}
      actions={[
        {
          icon: "save",
          tooltip: "Save User",
          onClick: (event, rowData) => {
            event.stopPropagation();
            getStudentToEdit(rowData.id);
          },
        },
      ]}
      components={{
        Action: (props) => (
          <Link
            to="/add-edit-form"
            className="edit-link"
            onClick={(event) => props.action.onClick(event, props.data)}
          >
            <span>Edit</span>
          </Link>
        ),
      }}
      localization={{
        header: {
          actions: "Edit",
        },
      }}
      onRowClick={(event, rowData) => {
        modalToggler();
        modalDataSetter(rowData);
      }}
    />
  );
}
