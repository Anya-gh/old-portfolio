interface TagProps {
  color: string,
  name: string, 
}

export default function Tag({color, name} : TagProps) {
  const style = color + ' p-2 rounded-xl font-bold text-center m-1 text-[0.5rem] min-w-[2rem] md:text-xs md:m-3 md:min-w-[4rem]'
  return (
    <li className={style}>{name}</li>
  );
}