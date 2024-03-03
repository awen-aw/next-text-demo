"use client";
import { useMemo, memo } from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import ImageCardInner from "./ImageCardInner";
import { CardType, EventType } from "@/type/data";

type CardOneProps = {
  type?: CardType;
  title?: string;
  tags?: string[];
  instruction?: string;
  time?: number;
  courseNum?: number;
  progress?: string;
  gradientColor: string;
  showBar?: boolean;
  eventList?: EventType[];
  imgSet?: string;
};

function Card({
  type = "introduction",
  title,
  tags,
  instruction,
  time,
  courseNum,
  progress,
  gradientColor,
  showBar = true,
  eventList,
  imgSet = "",
}: CardOneProps) {
  // 顶部渐变条
  const titleBar = useMemo(
    () => (
      <div
        className={`mb-7 w-9 h-1  rounded-sm  ${gradientColor} bg-gradient-to-b`}
      ></div>
    ),
    [gradientColor]
  );

  return (
    <div className=" w-[32.5%] px-6  h-[278px] shrink-0 min-w-[450px]">
      <div className={`rounded-[40px] w-full h-full ${gradientColor}`}>
        <div
          className={`relative bg-color-bg-gray w-full h-full ${
            type === "image" ? "py-5 px-4" : "pt-9 px-10"
          }  rounded-[36px] hover:translate-x-1 hover:translate-y-[-4px] transition-transform duration-100 cursor-pointer`}
        >
          {/* 图片类型 */}
          {type === "image" ? (
            <ImageCardInner
              titleBar={titleBar}
              title="What is Bitcoin"
              time={36}
              imgSet={imgSet}
            />
          ) : (
            <>
              {showBar && titleBar}
              <>
                {/* 标题 */}
                <div className="font-next-book-bold w-full h-4  text-title-color-white whitespace-nowrap">
                  {title}
                </div>

                {/* tag标签 */}
                <div className="my-4">
                  {tags?.map((item) => (
                    <div
                      key={item}
                      className="mr-4 inline-block px-2 py-1 font-next-book-thin text-white text-[9px] border border-tiny-color-gray rounded-[20px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* 课程进度类型 */}
                {type === "introduction" && (
                  <>
                    {/* 内容简介 */}
                    <div className="font-next-book-thin text-xs text-tiny-color-gray pr-5">
                      {instruction}
                    </div>

                    {/* 课时进度 */}
                    <div className="absolute bottom-4 flex w-full text-tiny-color-white items-center justify-between pr-[60px]">
                      <div className="flex w-1/5  items-center  font-neuemachinna-light">
                        <CiClock2 />
                        <span className="text-xs ml-2 mr-1">{time}</span>
                        <span className="text-xs">Hour</span>
                      </div>
                      <div className="flex w-1/5 items-center font-neuemachinna-light">
                        <span>
                          <CiCreditCard2 />
                        </span>
                        <span className="text-xs ml-2 mr-1  ">{courseNum}</span>
                        <span className="text-xs">Course</span>
                      </div>
                      {progress ? (
                        <div className="flex  h-9 items-center font-next-book-thin bg-[#2A2A2A] px-4 rounded-[40px] text-[#9EFA13]">
                          <IoIosSend />
                          <span className="text-xs ml-2 mr-1  ">
                            {progress}
                          </span>
                          <span className="text-xs">COMPLLETED</span>
                        </div>
                      ) : (
                        <div className="w-1/5 h-9"></div>
                      )}
                    </div>
                  </>
                )}

                {/* 未开始课程类型 */}
                {type === "unstart" && (
                  <>
                    {/* 展示列表 */}
                    <div className="w-full mt-12">
                      {eventList?.map((item) => (
                        <div
                          key={item.name}
                          className="flex text-title-color-white w-full justify-between mb-4 border-b-[1px] border-[#282828]"
                        >
                          <div className="font-next-book-thin text-tiny-color-gray text-xs">
                            {item.name}
                          </div>
                          <div className="font-neuemachinna-light text-sm">
                            {item.value}
                          </div>
                        </div>
                      ))}
                      <div></div>
                    </div>
                  </>
                )}
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
