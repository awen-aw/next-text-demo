"use client";
import { useState, useMemo, useRef, useCallback } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CardOne from "@/components/Card";
import CustomButton from "@/components/CustomButton";
import { CardType, EventType } from "@/type/data";

enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
}

export default function Home() {
  const [end, setEnd] = useState<DIRECTION | null>(null); // 箭头位置
  const cardWrapRef = useRef<HTMLDivElement>(null); // 卡片外层包裹元素

  // 渲染数据列表
  const dataList = useMemo(
    () => [
      {
        id: 1,
        type: "introduction",
        title: "Introduction to programming",
        tags: ["Beginner"],
        instruction: `This course covers the most basic concepts in programming
        using Solidity as an example.`,
        time: 36,
        courseNum: 5,
        progress: "45%",
        gradientColor: "bg-gradient-to-r from-[#38C1A5]  to-[#0891D5]",
        showBar: true,
        eventList: null,
      },
      {
        id: 2,
        type: "unstart",
        title: "Moonshot 2023 Summer Hackathon",
        tags: ["All Tracks", "Solidity", "ZK"],
        gradientColor: "bg-gradient-to-b from-[#719BFF]  to-[#DA8AFF]",
        showBar: false,
        eventList: [
          { name: "Signup", value: "4/15 - 6/15" },
          { name: "Event", value: "6/15 - 7/15" },
          { name: "Grant size", value: "200k" },
        ],
      },
      {
        id: 3,
        type: "introduction",
        title: "Web 3.0 Programming Basics",
        tags: ["Beginner"],
        instruction: `Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.`,
        time: 36,
        courseNum: 5,
        gradientColor: "bg-gradient-to-b from-[#3CBC34]  to-[#D9E313]",
        showBar: true,
        eventList: null,
      },
      {
        id: 4,
        type: "image",
        time: 36,
        gradientColor: "bg-gradient-to-b from-[#E0AD38]  to-[#EB3E1C]",
        imgSet: "bg-[url(../assets/images/bit_coin.png)]",
      },
    ],
    []
  );

  // 按钮点击事件
  const handleClick = useCallback((direction: DIRECTION) => {
    setEnd(direction);
    if (cardWrapRef.current?.scrollWidth && cardWrapRef.current?.offsetWidth) {
      const slide =
        (direction === DIRECTION.LEFT
          ? cardWrapRef.current?.offsetWidth - cardWrapRef.current?.scrollWidth
          : 0) + "px";
      cardWrapRef.current.style.transform = `translateX(${slide})`;
    }
  }, []);

  return (
    <div className="bg-black h-[100vh] relative">
      {/* 两边渐变遮罩层 */}
      <div
        className={`${
          end === "left"
            ? "bg-gradient-to-l left-0"
            : "bg-gradient-to-r right-0"
        } w-[15%] h-full  from-mask-black-0 via-mask-black-80 to-mask-black-100 absolute z-50`}
      ></div>

      {/* 按钮 */}
      <div className={`relative  overflow-hidden p-10 `}>
        {end === "left" ? (
          // 左按钮
          <CustomButton
            position="left-0"
            icon={<AiOutlineLeft />}
            onClick={() => handleClick(DIRECTION.RIGHT)}
          />
        ) : (
          // 右按钮
          <CustomButton
            position="right-0"
            icon={<AiOutlineRight />}
            onClick={() => handleClick(DIRECTION.LEFT)}
          />
        )}

        {/* 卡片组*/}
        <div ref={cardWrapRef} className={`duration-300 transition-all flex`}>
          {dataList.map((item) => (
            <CardOne
              key={item.id}
              type={item.type as CardType}
              title={item.title}
              tags={item.tags}
              instruction={item.instruction}
              time={item.time}
              courseNum={item.courseNum}
              progress={item.progress}
              showBar={item.showBar}
              eventList={item.eventList as EventType[]}
              imgSet={item.imgSet}
              gradientColor={item.gradientColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
