import { cn } from "@/lib/utils";

type SizeType = "sm" | "md" | "lg";
type ColorType =
  | "gray"
  | "blue"
  | "purple"
  | "amber"
  | "red"
  | "pink"
  | "green"
  | "teal"
  | "inverted"
  | "gray-subtle"
  | "blue-subtle"
  | "purple-subtle"
  | "amber-subtle"
  | "red-subtle"
  | "pink-subtle"
  | "green-subtle"
  | "teal-subtle";

interface Size {
  size?: SizeType;
  variant?: ColorType;
  children: React.ReactNode;
  className?: string;
}

const sizeMap = {
  sm: "h-[24px] px-[8px] text-[12px]",
  md: "h-[27px] px-[10px] text-sm",
  lg: "h-[33px] px-[12px] text-sm",
};

const colorMap = {
  "gray": "bg-[#8f8f8f]",
  "blue": "bg-[#0072f6]",
  "purple": "bg-[#8e4ec6]",
  "amber": "bg-[#FFAE00] text-[#0a0a0a]",
  "red": "bg-[#e5494e]",
  "pink": "bg-[#e93e82]",
  "green": "bg-[#45a656]",
  "teal": "bg-[#12a593]",
  "inverted": "dark:bg-[#ededed] bg-[#0a0a0a] text-[#ededed] dark:text-black",
  "gray-subtle":
    "bg-[#ebebeb] dark:text-white dark:bg-[#1f1f1f] text-[#171717]",
  "blue-subtle": "bg-[#ebf5ff] dark:bg-[#11243d] text-[#548ddb]",
  "purple-subtle": "bg-[#f9f1fe] dark:bg-[#2e1938] text-[#bb78c4]",
  "amber-subtle": "bg-[#fff4d6] dark:bg-[#331b00] text-[#d39330]",
  "red-subtle": "bg-[#ffebec] dark:bg-[#3d1619] text-[#d85f5d]",
  "pink-subtle": "bg-[#fde3ec] dark:bg-[#501c31] text-[#cd6c98]",
  "green-subtle": "bg-[#ecfaeb] dark:bg-[#0f2f18] text-[#6db678]",
  "teal-subtle": "bg-[#d4f7ef] dark:bg-[#083933] text-[#26ab99]",
};

export const Badge = ({
  size = "md",
  variant = "gray",
  className,
  children,
}: Size) => {
  const sizeClass = sizeMap[size] || sizeMap.md;
  const colorClass = colorMap[variant] || colorMap.gray;

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center truncate",
        sizeClass,
        colorClass,
        className,
      )}
    >
      <h1>{children}</h1>
    </div>
  );
};