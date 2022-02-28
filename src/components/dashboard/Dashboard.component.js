import React, { useMemo } from "react";
import "./dashboard.styles.scss";

// custom components
import Layout from "../layout/Layout.component";
import Table from "../table/Table.component";

// third party libs
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="top-area">
          <div className="logo">Enrolment App</div>
        </div>

        {/* table container */}
        <div className="bottom-area">
          <div className="add-btn">
            <Link to="/add-edit-form" className="new-student-link">
              <button>New Student</button>
            </Link>
          </div>

          {/* table starts here */}
          <div className="table-wrapper">
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
}
