# Todo List — React + Jest

Простое приложение для управления списком задач, написанное на React.  
Проект демонстрирует написание юнит- и интеграционных тестов с помощью **Jest** и **React Testing Library**.

## 📋 Функциональность

- Добавление новой задачи через поле ввода и кнопку «Добавить»
- Отображение списка задач
- Удаление задачи по кнопке «Удалить»
- Счётчик текущего количества задач

## 🧱 Стек

- **React** (JSX)
- **Jest** — среда тестирования
- **@testing-library/react** — тестирование компонентов
- **@testing-library/jest-dom** — дополнительные матчеры (`toBeInTheDocument`)
- **jest-environment-jsdom** — эмуляция браузерного окружения
- **Babel** — трансформация JSX и ES-модулей

## 📁 Структура проекта
my-react/
├── babel.config.cjs # Конфигурация Babel для Jest
├── setupTests.js # Подключение jest-dom
├── package.json
├── src/
│ ├── App.jsx # Корневой компонент
│ ├── App.css
│ ├── TaskInput.jsx # Поле ввода + кнопка «Добавить»
│ ├── TaskItem.jsx # Одна задача + кнопка «Удалить»
│ ├── TaskList.jsx # Список задач
│ ├── index.jsx
│ ├── index.css
│ └── reportWebVitals.js
└── tests/
├── TaskInput.test.js
├── TaskItem.test.js
├── TaskList.test.js
└── App.test.js



## 🚀 Установка и запуск

### 1. Клонирование репозитория


git clone [<URL_репозитория>](https://github.com/alladin111/my-react/tree/main/my-react)
cd my-react

npm start

npm install


🧪 Запуск тестов

Все тесты запускаются одной командой:



npm test

Ожидаемый результат:



PASS  tests/TaskInput.test.js

PASS  tests/TaskItem.test.js

PASS  tests/TaskList.test.js

PASS  tests/App.test.js


Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Запуск в режиме наблюдения


npm test -- --watch

Запуск с отчётом о покрытии


npm test -- --coverage

🧩 Описание тестов
Файл	Что проверяется
TaskInput.test.js	Рендер input и кнопки; изменение значения при вводе; вызов onAddTask при клике
TaskItem.test.js	Рендер текста задачи; вызов onDelete с task.id при клике на «Удалить»
TaskList.test.js	Рендер всех элементов списка задач
App.test.js	Добавление задачи и её отображение в списке; удаление задачи при клике
⚙️ Конфигурация
setupTests.js — подключает дополнительные матчеры:

js
import '@testing-library/jest-dom';
babel.config.cjs — трансформация JSX и ESM для Jest:

js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
package.json — скрипт и настройки Jest:

json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "testMatch": ["<rootDir>/tests/**/*.test.js"]
  }
}
