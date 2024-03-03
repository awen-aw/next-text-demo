import React, { ReactNode, memo } from "react";
import { CiClock2 } from "react-icons/ci";

type ImageCardInnerProps = {
  titleBar: ReactNode;
  title: string;
  time: number;
  imgSet: string;
};

function ImageCardInner({
  titleBar,
  title,
  time,
  imgSet,
}: ImageCardInnerProps) {
  return (
    <div
      className={`w-full h-full rounded-[36px] bg-[#B6E1D8] ${imgSet} bg-cover bg-right bg-no-repeat`}
    >
      <div className="flex rounded-tr-[36px] shrink-0 ">
        {/* 顶部渐变条 */}
        <div className="w-[40%] bg-color-bg-gray pt-4 pl-6 pb-1 rounded-br-3xl">
          {titleBar}
        </div>

        {/* 顶部遮挡层 */}
        <div className="w-[60%]">
          <div className="w-full h-6 bg-color-bg-gray rounded-tr-[36px]"></div>
          <div className="w-full h-9 bg-[#B6E1D8] relative top-[-24px] rounded-tl-[12px] rounded-tr-[36px]"></div>
        </div>
      </div>

      {/* 中间遮挡层 */}
      <div className="w-10 h-2/5 flex shrink-0">
        <div className="w-full h-full bg-color-bg-gray"></div>
        <div className="relative -left-[49%] w-full h-full bg-[#B6E1D8] rounded-l-3xl"></div>
      </div>

      {/* 底部遮挡层 */}
      <div className="w-full h-2/5 flex">
        <div className="w-[48%] h-full bg-color-bg-gray rounded-tr-[36px]">
          {/* 标题 */}
          <div className="font-next-book-bold text-white h-5 mt-2 ml-4">
            {title}
          </div>
        </div>
        <div className="w-[52%] h-full relative">
          <div className="w-[80%] h-1/4 bg-[#B6E1D8] rounded-bl-2xl relative top-1/4"></div>
          <div className="w-[60%] h-4/5 bg-[#B6E1D8]">
            <div className="w-1/3 h-2/5 bg-color-bg-gray"></div>
            <div className="w-full h-2/3  bg-color-bg-gray rounded-tr-[24px] relative top-[-7px]">
              {/* 课时 */}
              <div className="text-white flex items-center font-neuemachinna-light absolute right-6 top-5">
                <CiClock2 />
                <span className="ml-2 mr-1 text-xs">{time}</span>
                <span className="text-xs">Hour</span>
              </div>
            </div>
            <div className="w-full h-[2px] bg-color-bg-gray relative top-[-7px]"></div>
          </div>
          <div className="w-5 h-6 bg-color-bg-gray relative top-[-41px] left-[60%]">
            <div className="w-full h-full bg-[#B6E1D8] rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ImageCardInner);
