/*
 * @Author: zhengduo
 * @Date: 2025-01-02 13:37:14
 * @LastEditors: zhengduo
 * @LastEditTime: 2025-01-03 11:19:10
 * @Description: file content
 */
import dayjs from "dayjs";
import Calendar from "./Calendar";
function App() {
  return (
    <div className="App">
      <Calendar defaultValue={dayjs('2025-01-12')} locale="en-US" onChange={(date) => {
        // alert(date.format('YYYY-MM-DD'))
        console.log(date.format('YYYY-MM-DD'))
      }}></Calendar>
    </div>
  );
}

export default App;
