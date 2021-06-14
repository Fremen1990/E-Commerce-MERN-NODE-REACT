import React from "react";
import { Link } from "react-router-dom";

const BackToDashboard = () => (
  <div className="mt-5">
    <Link to="/admin/dashboard" className="text-warning">
      <a class="btn btn-warning" href="#" role="button">
        Back to Dashboard{" "}
      </a>
    </Link>
  </div>
);

export default BackToDashboard;
