import Toggle from "../components/Toggle";

interface props {
  title: string;
}
const NavBar = ({ title }: props) => {
  return (
    <div className='flex justify-between md:px-20 px-5 py-5 bg-secondary shadow  transition duration-200'>
      <h1 className='md:text-2xl text-base font-extrabold	'>{title}</h1>
      <Toggle />
    </div>
  );
};

export default NavBar;
