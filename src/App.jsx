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

// export default function App() {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });
//   const changeX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const changeY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <button onClick={changeX}>
//         x: {values.x}, y: {values.y}
//       </button>
//       <button onClick={changeY}>
//         x: {values.x}, y: {values.y}
//       </button>
//     </div>
//   );
// }

//-------------------------------------------------------

// import { useId } from 'react';

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// };

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

//------------------------------------------------------------------------

import { useId } from 'react';

// const MyComponent = () => {
//   const id = useId();

//   return (
//     <div>
//       <label htmlFor={id}>Text field label</label>
//       <input type="text" id={id} />
//     </div>
//   );
// };

//----------------------------------------------

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

//------------------------------------------------------

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handlehange = e => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <input onChange={handlehange} value={inputValue} type="text" />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

//---------------------------------------------------------

// const LangSwitcher = () => {
//   const newId = useId();
//   const [lang, setLang] = useState('');
//   console.log(lang);

//   return (
//     <div>
//       <label htmlFor={newId}></label>
//       <select
//         name="lang"
//         id={newId}
//         value={lang}
//         onChange={e => setLang(e.target.value)}
//       >
//         <option value="eng">English</option>
//         <option value="ukr">Ukrainian</option>
//         <option value="it">Italian</option>
//       </select>
//     </div>
//   );
// };

//------------------------------------------------------------

const App = () => {
  const [lang, setLang] = useState('uk');

  return (
    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
};

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={evt => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default App;
