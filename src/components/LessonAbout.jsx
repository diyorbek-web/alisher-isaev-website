import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const LessonAbout = () => {
  const [activeIndex, setActiveIndex] = useState(true);

  const handleToggle = (index, id) => {
    setActiveIndex(activeIndex === index ? true : index);
  };

  const items = [
    {
      id: 1,
      title: "Darslar necha soatdan davom etadi?",
      content:
        "Asosiy darslar xar shanba va yakshanba kunlari soat 10:00 dan 18:00 gacha bo'lib o'tadi.",
    },
    {
      id: 2,
      title: "Dars jarayonida savollar berish mumkunmi?",
      content:
        "Savol-javob uchun ajratilgan vaqtlarda, uyga vazifalar uchun qo'shimcha darslarda va kofebreak paytida savollaringizga javob olishingiz mumkun",
    },
    {
      id: 3,
      title: "Biznesni endi boshlayotganlar xam kelishi mumkunmi?",
      content:
        "Sales doctor kursi faqat biznes egalari va top-menejerlar uchun moslashtirilgan",
    },
  ];

  return (
    <div className="p-6 ">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="w-full h-[1px] bg-white"></div>
            <div
              className="flex justify-between group max-xs:font-medium  font-semibold max-xs:text-[18px] text-[24px] items-center  cursor-pointer text-white p-4 bg-black-90  rounded"
              onClick={() => handleToggle(index)}
            >
              <div className="w-[80%]">{item.title}</div>
              <div className="text-white flex group-hover:bg-white bg-success text-lg max-xs:w-[40px] max-xs:h-[40px] w-[40px] h-[40px]  rounded-full">
                {activeIndex === index ? (
                  <span className="m-auto group-hover:text-black">-</span>
                ) : (
                  <span className="m-auto group-hover:text-black">+</span>
                )}
              </div>
            </div>
            <div
              className={`content text-[17px] p-4 text-white bg-black-90 border-gray-200 rounded transition-all ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default LessonAbout;
