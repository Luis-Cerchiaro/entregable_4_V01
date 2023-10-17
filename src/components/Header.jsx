const Header = ({ handleOpenModal }) => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-xl font-bold">Usuarios</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition-colors"
      >
        Agregar Usuario
      </button>
    </header>
  );
};
export default Header;
