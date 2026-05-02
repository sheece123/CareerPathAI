type Props = {
  text: string;
  color?: "green" | "yellow" | "orange";
};

const Badge = ({ text, color = "green" }: Props) => {
  const styles = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    orange: "bg-orange-100 text-orange-700",
  };

  return (
    <span className={`text-[11px] px-2 py-0.75 rounded-full ${styles[color]}`}>
      {text}
    </span>
  );
};

export default Badge;