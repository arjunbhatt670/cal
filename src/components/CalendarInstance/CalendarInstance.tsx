import { monthMap, weekMap } from "./CalendarInstance.constants";
import CalendarInstanceProps from "./CalendarInstance.type";

const CalendarInstance: React.FC<CalendarInstanceProps> = (props) => {
  const { date } = props;

  const dateNumber = date.getDate();
  const month = monthMap[date.getMonth()];

  /** Stores the year of date as formatted string \
   * e.g. year `625` will be formatted to `0625`
   */
  const year =
    date.getFullYear().toString().length < 4
      ? ("000" + date.getFullYear()).slice(-4)
      : date.getFullYear().toString();
  const noOfDaysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  /** Stores the week of first day of month \
   * e.g. For 28th Sept 2023, it will store week of 1st Sept 2023
   */
  const firstDayWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const getCells = (startIndex: number) => {
    const cells = [];
    let counter = 0;
    while (
      counter < weekMap.length &&
      startIndex + counter - firstDayWeek <= noOfDaysInMonth
    ) {
      const currentDateNumber = startIndex + counter - firstDayWeek;
      cells.push(
        <td key={currentDateNumber.toString()} className="pt-3">
          {currentDateNumber >= 1 &&
            /** If date is the selected one */
            (dateNumber === currentDateNumber ? (
              <div className="w-full h-full">
                <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                  <button
                    tabIndex={0}
                    className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                  >
                    {currentDateNumber}
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                  {currentDateNumber}
                </p>
              </div>
            ))}
        </td>
      );
      counter += 1;
    }
    return cells;
  };

  const getNumbers = () => {
    const rows = [];
    let startIndex = 1;
    while (startIndex <= noOfDaysInMonth + firstDayWeek) {
      rows.push(<tr key={startIndex}>{getCells(startIndex)}</tr>);
      startIndex += weekMap.length;
    }

    return rows;
  };

  return (
    <div className="w-full shadow-lg">
      <div className="p-5 dark:bg-gray-800 bg-white rounded-t">
        <div className="px-4 flex items-center justify-center">
          <span
            tabIndex={0}
            className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
          >
            {`${month} ${year}`}
          </span>
        </div>
        <div className="flex items-center justify-between pt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {weekMap.map((week) => (
                  <th key={week}>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        {week}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{getNumbers()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalendarInstance;
