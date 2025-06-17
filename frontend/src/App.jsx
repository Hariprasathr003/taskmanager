import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rootlayout from "./layout/Rootlayout";
import TaskTitle from "./components/TaskTitle";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index path="/" element={<TaskTitle />} />
            <Route path="tasklist" element={<TaskList />} />
            <Route path="addtask" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
