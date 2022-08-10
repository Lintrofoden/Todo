import './App.css';
import TodoInput from './Components/TodoInput';
import TodoItemsList from './Components/TodoItemsList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoItemsList />
    </div>
  );
}

export default App;
