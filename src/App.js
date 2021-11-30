import logo from './logo.svg';
import './App.css';
import TodoContainerFunc from './component/TodoContainerFunc';
import TodoContainer from './component/TodoContainer';
import NavBar from './component/NavBar';
import Header from './component/Header';

function App() {
  return (
    
    <div className="ToDoContainer">
      <TodoContainer />
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Header">
          <Header/>
        </div>
    </div>
  );
}

export default App;
