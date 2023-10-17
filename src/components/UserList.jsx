import Usercard from "./Usercard";

const UserList = ({ users, deleteUser, handleClickEdit }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1000px] mx-auto gap-5 py-10">
      {users.map((user) => (
        <Usercard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickEdit={handleClickEdit}
        />
      ))}
    </section>
  );
};
export default UserList;
