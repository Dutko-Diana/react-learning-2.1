import { useState } from 'react';
import './App.css';

// export default function App() {
//   const handleClick = () => {
//     return alert(
//       'Hello, Diana! You are accepted to be a part of Emirates Airlines!'
//     );
//   };
//   return (
//     <button type="button" onClick={handleClick}>
//       Click here to find out our decision!
//     </button>
//   );
// }

//------------------------------------------------------------------------------------

// export default function App() {
//   const handleClick = event => {
//     console.log(event);
//   };
//   return <button onClick={handleClick}>Click here</button>;
// }

//-----------------------------------------------------------------------------------

// const CustomButton = ({ msg, children }) => {
//   return (
//     <button
//       onClick={() => {
//         alert(msg);
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// export default function App() {
//   return <CustomButton msg="Playing music!">Play music!</CustomButton>;
// }

//---------------------------------------------------------------------------------------

// export default function App() {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

//--------------------------------------------------------------------------------------------

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleShow = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={handleShow}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Hello!</p>}
//     </div>
//   );
// }

//-----------------------------------------------------------------------------------

// function ClicksCounter({ value, onUpdate }) {
//   return <button onClick={onUpdate}>Count: {value}</button>;
// }

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return (
//     <div>
//       <ClicksCounter value={clicks} onUpdate={handleClick} />
//       <ClicksCounter value={clicks} onUpdate={handleClick} />
//     </div>
//   );
// }

//---------------------------------------------------------------------------------------

export default function App() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const changeX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const changeY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <button onClick={changeX}>
        x: {values.x}, y: {values.y}
      </button>
      <button onClick={changeY}>
        x: {values.x}, y: {values.y}
      </button>
    </div>
  );
}
