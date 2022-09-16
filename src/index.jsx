import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/** TODO
 * В этой ветке я установил и настроил тебе линтер, в package.json добавил скрпиты для удобства.
 *
 * 1. Пройдись линтером по всему проекту и исправь все ошибки.
 * Пойми что это за ошибки и почему они вообще есть.
 *
 * Для этого создай отдельную ветку и (или можешь в этой) и потом влей её в мастер.
 *
 * --- под эти этапы создавай новую ветку, делай изменения и после сливай в мастер через pull requests ---
 * 2. Удали лишние зависимости и неиспользуемый тобою код.
 * 3. Обнови README
 * 4. Добавь использование localStorage
 *
 * Пиши, если будут вопросы.
 */
