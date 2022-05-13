import { UsersListProps } from "../interfaces";

const UsersList = ({ users }: UsersListProps) => {
  return (
    <>
      {users.map((user) => (
        <tbody key={user.id}>
          <tr>
            <td>{user.name}</td>
            <td>
              {user.address.street}, {user.address.suite}
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.username}</td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default UsersList;
