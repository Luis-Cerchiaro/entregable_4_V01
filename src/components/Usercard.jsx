import { IconPencilCode, IconTrash } from "@tabler/icons-react";

const Usercard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3">
      <h5 className="text-lg font-semibold">
        {user.first_name} {user.last_name}
      </h5>
      <ul className="grid gap-1 text-gray-800 ">
        <li>
          {" "}
          <span className="font-semibold">Email: </span> {user.email}
        </li>
        <li>
          {" "}
          <span className="font-semibold">Birthday: </span> {user.birthday}
        </li>
      </ul>
      <div className="flex gap-2 justify-end">
        <button
          className="bg-yellow-500 text-white p-1 rounded-md hover:bg-yellow-600 transition-colors "
          onClick={() => handleClickEdit(user)}
        >
          <IconPencilCode size={20} />
        </button>
        <button
          className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition-colors "
          onClick={() => deleteUser(user.id)}
        >
          <IconTrash size={20} />
        </button>
      </div>
    </article>
  );
};
export default Usercard;
