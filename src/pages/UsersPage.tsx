import { useEffect, useState } from "react";

import { useUserCredentials } from "../hooks";
import { getUsers } from "../utils";
import { UsersTable, UsersList } from "../components";
import { User } from "../interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { handleLogOut } = useUserCredentials();

  useEffect(() => {
    document.title = "Users Page";
    (async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        usersData && setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {!loading && (
        <>
          <UsersTable>
            <UsersList users={users} />
          </UsersTable>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      )}
    </>
  );
};

export default UsersPage;
