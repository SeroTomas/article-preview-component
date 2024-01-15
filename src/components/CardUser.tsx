import CardShare from "./CardShare";

interface Props {
  avatar: string;
  name: string;
  date: string;
}

const CardUser = ({ avatar, name, date }: Props) => {


  return (
    <div className="flex justify-between items-center px-8 py-4 relative ">
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt="User Avatar"
          className="h-9 rounded-full"
        />
        <div className="flex flex-col text-sm">
          <span className="text-c-darkGBlue font-bold">{name}</span>
          <span className="text-c-desDarkBlue">{date}</span>
        </div>
      </div>
      <CardShare />
    </div>
  )
}
export default CardUser


