import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import {Form, Route, Routes} from "react-router-dom"
import TasksList from "./components/ProductList/TasksList";
function App() {
    const {onToggleButton, tg}= useTelegram();
    useEffect(()=>{
        tg.ready();
    },[])



  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<TasksList/>}/>
            <Route path={'form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
