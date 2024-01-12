const OutlinedButton = ({ text, onClick }: OutlinedButtonProps) => {
  return (
    <button
      className="h-10 w-24 border-2 border-b-zinc-400 border-r-zinc-400 font-accent text-white shadow-md
    hover:bg-zinc-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

interface OutlinedButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default OutlinedButton;
