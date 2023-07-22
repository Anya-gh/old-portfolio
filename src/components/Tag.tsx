interface TagProps {
  color: string,
  name: string, 
}

export default function Tag({color, name} : TagProps) {
  const style = color + ' p-2 rounded-xl font-bold mx-3 min-w-[4rem] text-center'
  return (
    <li className={style}>{name}</li>
  );
}