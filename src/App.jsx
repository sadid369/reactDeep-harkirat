import { useState, memo } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <CustomButton count={count} setCount={setCount} />
        <Header></Header>
        <Header></Header>
        <Header></Header>
      </div>
    </>
  );
}
const CustomButton = function (props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>
      Count: {props.count}
    </button>
  );
};
// const Header = memo(function (params) {
//   console.log("called");
//   return (
//     <>
//       <h1>This is a Header</h1>
//     </>
//   );
// });
const Header = function (params) {
  console.log("called");
  return (
    <>
      <h1>This is a Header</h1>
    </>
  );
};
export default App;
