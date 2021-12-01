import logo from './logo.svg';
import './App.css';
import TodoContainerFunc from './component/TodoContainerFunc';
import TodoContainer from './component/TodoContainer';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Body from './component/Body';
import Click from './component/Click';
import Hook from './component/HookExample';

function App() {
  return (
    
    <div className="TodoContainer">
      <TodoContainer />
      <div className="Header">
          <Header/>
        </div>
        <div className="NavBar">
          <NavBar name = "Ben"/>
        </div>
        <div className="Body">
          <Body />
        </div>
        <div className="Click">
          <Click age = "50"/>
        </div>
        <div className="Hook">
          <Hook />
        </div>
        
    </div>
  );
}

export default App;
