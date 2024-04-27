import clsx from "clsx";

type Props = {
  percentage: number;
  color: "green" | "red" | "blue";
};

const Bar = (props: Props) => {
  const { color, percentage } = props;

  const barStyle = {
    height: `${percentage}%`,
  };

  const barBgClasses: Record<string, string> = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="h-40 flex items-end justify-end">
      <div
        className={clsx(barBgClasses[color], "w-14 rounded-xl border-black border-2")}
        style={barStyle}
      ></div>
    </div>
  );
};

export default Bar;
