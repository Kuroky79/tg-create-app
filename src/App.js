import './App.css';
import {useEffect} from "react";

import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import Form from "./components/Form/Form";
import TasksList from "./components/ProductList/TasksList";
import {useTelegram} from "./components/hooks/useTelegram";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<TasksList />}/>
                <Route path={'/form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;
