import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

const Modal = ({
  isShowModal,
  handleCloseModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-200 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idUserToEdit ? "Update User" : "Create New User"}
        </h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="text-red-500 absolute top-2 right-2 hover:text-red-600 transtion-colors "
        >
          <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="first_name">
            Name:{" "}
          </label>
          <input
            className=" outline-none border px-2 py-1 rounded-sm"
            id="first_name"
            name="first_name"
            type="text"
            {...register("first_name", {
              required: {
                value: true,
                message: "First Name is obligatory",
              },
              maxLength: {
                value: 25,
                message: "Maximum 25 chracters",
              },
            })}
          />
          {errors.first_name && (
            <span className="text-red-500 text-xs">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="last_name">
            Last Name:{" "}
          </label>
          <input
            className=" outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            name="last_name"
            type="text"
            {...register("last_name", {
              required: {
                value: true,
                message: "Last Name is obligatory",
              },
              maxLength: {
                value: 25,
                message: "Maximum 25 chracters",
              },
            })}
          />
          {errors.last_name && (
            <span className="text-red-500 text-xs">
              {errors.last_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className=" outline-none border px-2 py-1 rounded-sm"
            id="email"
            name="email"
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "Email is obligatory",
              },
              maxLength: {
                value: 150,
                message: "Maximum 150 chracters",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "It is not a valid email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className=" outline-none border px-2 py-1 rounded-sm"
            id="password"
            name="password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is obligatory",
              },
              maxLength: {
                value: 25,
                message: "Maximum 25 chracters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-light" htmlFor="birthday">
            Birthday:{" "}
          </label>
          <input
            className=" outline-none border px-2 py-1 rounded-sm"
            id="birthday"
            name="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors"
          type="submit"
        >
          {idUserToEdit ? "Save changes" : "Create New User"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
