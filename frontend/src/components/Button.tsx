interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

function Button({ label, onClick }: Props) {
  return (
    <div className="">
      <button
        className="border border-black rounded  text-white bg-blue-600 w-full h-8 mt-2"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
