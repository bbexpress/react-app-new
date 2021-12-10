import './App.css';
import TodoContainerFunc from './component/TodoContainerFunc';
import TodoContainer from './component/TodoContainer';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Body from './component/Body';
import Click from './component/Click';
import Hook from './component/HookExample';
import Timer from './component/UseEffect';
import Context from './component/Context';
import RefHook from './component/RefHook';
import StyleComponent from './component/StyleComponent';
import {useState} from 'react';
import DynamicComp from './component/DynamicComp'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComponentA from './component/compA/ComponentA'
import ComponentB from './component/compB/ComponentB'
import ComponentC from './component/compC/ComponentC'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserForm from './component/UserForm'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();


  const [user, changeUser] = useState("usera");
  return (



    

    
    // <div className="TodoContainer">
    //   <TodoContainer />
    //   <div className="Header">
    //       <Header/>
    //     </div>
    //     <div className="NavBar">
    //       <NavBar name = "Ben"/>
    //     </div>
    //     <div className="Body">
    //       <Body />
    //     </div>
    //     <div className="Click">
    //       <Click age = "50"/>
    //     </div>
    //     <div className="Hook">
    //       <Hook />
    //     </div>
    //     <Timer />
    //     <div>
    //       <Context />
    //     </div>
    //     <div>
    //       <RefHook />
    //     </div>
    //     <StyleComponent />
    // </div>
    <div class='center'>

    <h1>Counter : {counter}</h1><br/>
    <button onClick={ () => dispatch(increment())}>+</button>
    <button onClick={ () => dispatch(decrement())}>-</button>


    <UserForm />

    {/* <BrowserRouter>
      <nav>
        <ul>
          <li><Link to ="/CompA">Comp A</Link></li>
          <li><Link to ="/CompB">Comp B</Link></li>
          <li><Link to ="/CompC">Comp C</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path="/CompA" element ={<ComponentA />}/>
          <Route path="/CompB" element ={<ComponentB />}/>
          <Route path="/CompC" element ={<ComponentC />}/>
      </Routes>
    </BrowserRouter>

      <DynamicComp user = {user}/>
      <button onClick ={()=> changeUser('usera')}>Switch to User A</button>
      <button onClick ={()=> changeUser('userb')}>Switch to User B</button>

      <div>
        <input type="radio" value="contentA" name="ContentA" onClick={()=> changeUser('usera')} /> Content A
        <input type="radio" value="contentB" name="ContentB" onClick={()=> changeUser('usera')} /> Content B
      </div> */}
      

    


    </div>
  );
}

export default App;
