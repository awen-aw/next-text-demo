import { ReactNode, memo } from "react";

type CustomButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  position?: string;
};

function CustomButton({ icon, onClick, position }: CustomButtonProps) {
  return (
    <div
      onClick={onClick}
      className={` text-white absolute ${position} top-1/2 translate-y-[-50%] w-12 h-12 border border-tiny-color-gray border-solid rounded-[50%] flex items-center justify-center hover:cursor-pointer z-50 hover:bg-hover-btn-gray hover:border-hover-btn-gray transition-all duration-100`}
    >
      {icon}
    </div>
  );
}

export default memo(CustomButton);
