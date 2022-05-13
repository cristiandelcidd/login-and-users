import { UsersTableProps } from "../interfaces";

import "../styles/users-table.css";

const UsersTable = ({ children }: UsersTableProps) => {
  return (
    <div className="table-container">
      <table className="table-content">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address: Street, Suite</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Username</th>
          </tr>
        </thead>

        {children}
      </table>
    </div>
  );
};

export default UsersTable;
