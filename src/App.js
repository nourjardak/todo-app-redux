import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Component/AddTask';
import './App.css';
import Todolist from './Component/Todolist';

function App() {
  return (
    <div className="App">
       <AddTask/>
       <Todolist/>
    </div>
  );
}

export default App;
