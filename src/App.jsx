import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { UserMenu } from './components/UserMenu';
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

// import { useId } from 'react';

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

// const App = () => {
//   const [lang, setLang] = useState('uk');

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={evt => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

//--------------------------------------------------------------

// import { Field, Form, Formik, ErrorMessage } from 'formik';
// import css from './App.module.css';
// import * as Yup from 'yup';

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Your name is too short!')
//     .max(50, 'Your name is too long!')
//     .required('Please, enter your name!'),
//   email: Yup.string()
//     .email('Must be a valid email!')
//     .required('Please, enter your email!'),
//   comment: Yup.string()
//     .min(3, 'Give us a more detailed feedback, please!')
//     .max(256, 'Please, make your feedback a bit shorter!')
//     .required('Enter yor feedback, please!'),
//   impression: Yup.string()
//     .oneOf(['good', 'average', 'bad'])
//     .required('Please choose your impression of our flight!'),
// });

// const FeedbackForm = () => {
//   const initialValues = {
//     username: '',
//     email: '',
//     comment: '',
//     impression: '',
//   };

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   const nameId = useId();
//   const emailId = useId();
//   const comId = useId();
//   const impId = useId();

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameId}>Your name</label>
//           <Field
//             className={css.input}
//             name="username"
//             type="text"
//             id={nameId}
//           />
//           <ErrorMessage name="username" component="p" />
//         </div>
//         <div>
//           <label htmlFor={emailId}>Your email</label>
//           <Field name="email" type="email" id={emailId} />
//           <ErrorMessage name="email" component="p" />
//         </div>
//         <div>
//           <label htmlFor={comId}>Enter your comment here:</label>
//           <Field as="textarea" name="comment" id={comId} rows="5" />
//           <ErrorMessage name="comment" component="p" />
//         </div>
//         <div>
//           <label htmlFor={impId}>Please, tell us your impression:</label>
//           <Field as="select" name="impression" id={impId}>
//             <option value="" disabled>
//               Choose here!
//             </option>
//             <option value="good">I will fly with you again!</option>
//             <option value="average">It was alright</option>
//             <option value="bad">I did not like it</option>
//           </Field>
//           <ErrorMessage name="impression" component="p" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;

//---------------------------------------------------------------------------------

// import { useEffect } from 'react';
// import axios from 'axios';
// import { BulletList } from 'react-content-loader';
// import { fetchArticlesWithTopic } from './articles-api';
// import SearchForm from './components/SearchForm';

// const MyBulletListLoader = () => <BulletList />;

// const ArticleList = ({ items }) => {
//   console.log(items);

//   return (
//     <ul>
//       {items.map(({ objectID, url, title }) => {
//         return (
//           title && (
//             <li key={objectID}>
//               <a href={url} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </a>
//             </li>
//           )
//         );
//       })}
//     </ul>
//   );
// };

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async topic => {
//     try {
//       setArticles([]);
//       setLoading(true);
//       setError(false);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       <SearchForm onSearch={handleSearch} />
//       {articles.length > 0 && <ArticleList items={articles} />}
//       {loading && MyBulletListLoader()}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       <Toaster />
//     </div>
//   );
// };

// export default App;

//--------------------------------------------------------------------------------------

// import { useMemo } from 'react';

// const App = () => {
//   const [countries, setCountries] = useState([
//     'OAE',
//     'Italy',
//     'Switzerland',
//     'Ukraine',
//     'Japan',
//   ]);
//   const [query, setQuery] = useState('i');
//   const [flightClass, setFlightClass] = useState('economy');

//   const filteredCountries = useMemo(
//     () =>
//       countries.filter(country =>
//         country.toLowerCase().includes(query.toLowerCase())
//       ),
//     [countries, query]
//   );

//   return (
//     <div>
//       <select
//         name="class"
//         id="123"
//         required
//         onChange={e => setFlightClass(e.target.value)}
//       >
//         <option value="economy">Economy</option>
//         <option value="business">Business</option>
//         <option value="first">First</option>
//         <option value="private">Private flight</option>
//       </select>
//       <ul>
//         {filteredCountries.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

//---------------------------------------------------------------------------------

// import { useRef } from 'react';

// const App = () => {
//   const [value, setValue] = useState('');
//   const btnRef = useRef();

//   console.log('app:', btnRef.current);

//   useEffect(() => {
//     console.log('useEfect:', btnRef.current);
//   });

//   const handleClick = () => {
//     console.log('handleClick', btnRef.current);
//   };

//   return (
//     <div>
//       <button onClick={() => setValue(value + 1)}>Rerender</button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//       ;
//     </div>
//   );
// };

//---------------------------------

// import { useRef } from 'react';

// const App = () => {
//   const valueRef = useRef(0);

//   useEffect(() => {
//     // Виконається лише один раз під час монтування.
//     // Наступні оновлення значення рефа не
//     // викличуть оновлення компонента
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value </button>;
// };

//------------------------------------------------------------

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video src={source} ref={playerRef}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

//--------------------------------------------------

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// CustomButton.displayName = 'CustomButton';

// function App() {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// }

//-------------------------------------------------------

const App = () => {
  return (
    <div>
      <UserMenu />
    </div>
  );
};

export default App;
