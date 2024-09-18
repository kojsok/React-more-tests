import React, { FC, useState, ChangeEvent, MouseEvent } from 'react';

// Определяем типы для props
interface MyComponentProps {
  title: string;
  onSubmit: (inputValue: string) => void;
}

const FunctionalCompProps: FC<MyComponentProps> = ({ title, onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  // Обработчик изменения инпута
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  // Обработчик клика по кнопке
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something"
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export {FunctionalCompProps}