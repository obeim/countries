import { IoIosArrowUp } from "react-icons/io";
import { selectItem } from "../types";
import { useState } from "react";
interface props {
  title: string;
  items: Array<selectItem>;
  select: Function;
  backgroundColor?: string;
}
const Select = ({ title, items, select, backgroundColor }: props) => {
  const [visible, setVisible] = useState<Boolean>(false);
  const [selected, setSelected] = useState<String | null>(null);
  return (
    <div className='min-w-full relative select-none shadow text-primary'>
      <h1
        className={`flex justify-between items-center px-4 py-3 rounded  transition duration-200 ${
          backgroundColor ? backgroundColor : "bg-secondary"
        }`}
        onClick={() => setVisible(!visible)}
      >
        <span> {selected ? selected : title}</span>{" "}
        <IoIosArrowUp
          className={`transition duration-200 ${
            visible ? "" : "transform rotate-180"
          }`}
        />
      </h1>
      {visible && (
        <div
          className={`rounded shadow absolute  transition duration-200 mt-1 w-full max-h-60 overflow-y-scroll ${
            backgroundColor ? backgroundColor : "bg-secondary"
          }`}
        >
          <p
            className='py-2 px-4'
            onClick={() => {
              setVisible(false);
              setSelected(null);
              select(null);
            }}
          >
            {title}
          </p>
          {items.map((item, index) => {
            return (
              <p
                key={index}
                className='py-2 px-4'
                onClick={() => {
                  setVisible(false);
                  select(item.value);
                  setSelected(item.name);
                }}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
