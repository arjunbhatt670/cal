import { useState } from "react";

import DateInput from "./components/DateInput";
import CalendarInstance from "./components/CalendarInstance/CalendarInstance";
import { formatDate } from "./utils";

function App() {
  const [selectedDate, setSelectedDate] = useState<string>(
    formatDate(new Date())
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col gap-2 py-8 px-4">
      <DateInput
        name="date"
        label="Type a date to create calendar"
        onChange={handleDateChange}
        value={selectedDate}
      />
      {selectedDate && <CalendarInstance date={new Date(selectedDate)} />}
    </div>
  );
}

export default App;
