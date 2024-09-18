import React, { useReducer, ChangeEvent, FormEvent, FC } from 'react';
import '../../index.css';

// Определяем типы для состояния и действий
interface State {
  username: string;
  password: string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'RESET_FORM' };

// Редюсер для управления состоянием формы
const formReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET_FORM':
      return { username: '', password: '' };
    default:
      return state;
  }
};

const LoginFormAndUseReducer: FC = () => {
  const initialState: State = { username: '', password: '' };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e.target);
    console.log(value);
    console.log(name);

    if (name === 'username') {
      dispatch({ type: 'SET_USERNAME', payload: value });
    } else if (name === 'password') {
      dispatch({ type: 'SET_PASSWORD', payload: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', state.username);
    console.log('Password:', state.password);
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginFormAndUseReducer;