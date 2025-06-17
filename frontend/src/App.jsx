import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rootlayout from "./layout/Rootlayout";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskView from "./components/TaskView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index path="/" element={<TaskView />} />
            <Route path="tasklist" element={<TaskList />} />
            <Route path="addtask" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
