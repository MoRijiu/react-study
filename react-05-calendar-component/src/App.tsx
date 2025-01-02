import dayjs from "dayjs";
import Calendar from "./Calendar";
function App() {
  return (
    <div className="App">
      <Calendar value={dayjs('2025-01-02')}></Calendar>
    </div>
  );
}

export default App;
