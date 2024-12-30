import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./App.css";
import { useControllableValue } from "ahooks";

interface CalendarProps {
  defaultValue?: Date;
  value?: Date;
  onChange?: (date: Date) => void;
}

interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { defaultValue = new Date(), onChange } = props;

  // const [date, setDate] = useState(defaultValue);

  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  });

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const monthNames = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDates = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(curDate);
        // onChange?.(curDate);
      };
      if (i === date.getDate()) {
        days.push(
          <div key={i} className="day selected" onClick={() => clickHandler()}>
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={i} className="day" onClick={() => clickHandler()}>
            {i}
          </div>
        );
      }
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  );
};

const Calendar = React.forwardRef(InternalCalendar);

function Test() {
  const [date, setDate] = useState(new Date());
  // const calenderRef = useRef<CalendarRef>(null);

  // useEffect(() => {
  //   console.log(calenderRef.current?.getDate().toLocaleDateString());

  //   setTimeout(() => {
  //     calenderRef.current?.setDate(new Date(2024, 11, 31));
  //   }, 3000);
  // }, []);

  return (
    <div>
      {/* <Calendar defaultValue={new Date("2023-3-1")} onChange={(date) => {
        alert(date.toLocaleDateString())
      }}></Calendar> */}
      {/* <Calendar
        ref={calenderRef}
        defaultValue={new Date("2023-8-15")}
      ></Calendar> */}
      <Calendar value={date} onChange={(newDate) => {
        setDate(newDate);
        alert(newDate.toLocaleDateString());
      }}></Calendar>
    </div>
  );
}

export default Test;
