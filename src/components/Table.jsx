import React, { useState } from "react";
import evos from "../assets/evos.png";
import media from "../assets/park.png";
import epa from "../assets/epa.png";
import turon from "../assets/turon.png";
import toxtaniyoz from "../assets/toxtaniyoz.png";
import beshr from "../assets/beshr.png";
import dusel from "../assets/dusel.png";
import bts from "../assets/bts.png";
import asia from "../assets/asiapharm.png";
import megavat from "../assets/megavat.png";
import forus from "../assets/forus.png";
import pdp from "../assets/pdp.png";
import muns from "../assets/muns.png";
import safo from "../assets/safo.png";
import samo from "../assets/samo.png";
import idu from "../assets/idu.png";
import moissanit from "../assets/moissanite.png";
import louis from "../assets/louis.png";
import optepa from "../assets/oqtepa.png";
import hydro from "../assets/hydro.png";
import nanolit from "../assets/nanolit.png";
import bek from "../assets/bekota.png";
import smart from "../assets/smart.png";
import uluqi from "../assets/uluqi.png";

const items = [
  { id: 1, category: "ovqat", img: evos },
  { id: 2, category: "xizmat", img: media },
  { id: 3, category: "qurilish", img: epa },
  { id: 4, category: "ovqat", img: turon },
  { id: 5, category: "ovqat", img: toxtaniyoz },
  { id: 6, category: "texnika", img: beshr },
  { id: 7, category: "texnika", img: dusel },
  { id: 8, category: "cargo", img: bts },
  { id: 9, category: "farma", img: asia },
  { id: 10, category: "logistika", img: megavat },
  { id: 11, category: "logistika", img: forus },
  { id: 12, category: "xizmat", img: pdp },
  { id: 13, category: "ovqat", img: muns },
  { id: 14, category: "ovqat", img: safo },
  { id: 15, category: "mebel", img: samo },
  { id: 16, category: "xizmat", img: idu },
  { id: 17, category: "xizmat", img: moissanit },
  { id: 18, category: "mebel", img: louis },
  { id: 19, category: "ovqat", img: optepa },
  { id: 20, category: "qurilish", img: hydro },
  { id: 21, category: "qurilish", img: nanolit },
  { id: 22, category: "ovqat", img: bek },
  { id: 23, category: "qurilish", img: smart },
  { id: 24, category: "farma", img: uluqi },
];

function Table() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="p-4">
      <div>
        <p className="text-center max-xs:text-[35px] text-[50px] font-bold text-success">
          Bizda davolangan bizneslar
        </p>
        <p className="text-white max-xs:text-[15px] text-[20px] font-normal text-center">
          Kurslarimizda turli soxa egalari qatnashib, oz{" "}
          <br className="max-xs:hidden" />
          bizneslarini yangi bosqichga olib chiqishga erishishdi
        </p>
      </div>
      <div className="mb-4 mt-[20px]">
        <div className="max-xs:grid  max-xs:grid-cols-2 max-xs:gap-0 flex max-xs:m-0 ml-[60px] mb-[70px]">
          <div>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Barchasi
            </button>
            <div
              className={`text-white ${
                filter === "all"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("ovqat")}
              className={` px-4 py-2 text-white `}
            >
              {" "}
              Oziq Ovqat
            </button>
            <div
              className={`text-white ${
                filter === "ovqat"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("mebel")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Mebel
            </button>
            <div
              className={`text-white ${
                filter === "mebel"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("xizmat")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Xizmat korsatish
            </button>
            <div
              className={`text-white ${
                filter === "xizmat"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("qurilish")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Qurilish
            </button>
            <div
              className={`text-white ${
                filter === "qurilish"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("texnika")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Maishiy Texnika
            </button>
            <div
              className={`text-white ${
                filter === "texnika"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("logistika")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Logistika
            </button>
            <div
              className={`text-white ${
                filter === "logistika"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
          <div>
            <button
              onClick={() => setFilter("farma")}
              className={`px-4 py-2 text-white `}
            >
              {" "}
              Farma
            </button>
            <div
              className={`text-white ${
                filter === "farma"
                  ? "w-full h-[2px] bg-[#222222]"
                  : "w-full h-[2px] bg-white"
              }`}
            ></div>
          </div>
        </div>

        <div className="list-disc max-xs:mt-5 pl-5 max-xs:gap-4 max-xs:grid-cols-4 grid gap-6 grid-cols-6">
          {filteredItems.map((item) => (
            <img key={item.id} src={item.img} className="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
