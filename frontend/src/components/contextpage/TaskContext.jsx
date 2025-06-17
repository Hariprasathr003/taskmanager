import { createContext, useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../service/taskService";

export const TaskManagerContext = createContext();

const TaskContext = ({ children }) => {
  const initialValue = {
    title: "",
    description: "",
    priority: "",
    completed: false,
    createdDate: 0,
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);
  const [taskFilter, settaskFilter] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskValue = { ...formValue, completed: formValue.completed };
    try {
      if (edit) {
        await updateTask(edit, taskValue);
        setEdit(null);
      } else {
        await createTask(taskValue);
      }

      setFormValue(initialValue);
      reloadpage();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (taskId) => {
    setFormValue(taskId);
    setEdit(taskId.id);
  };

  const handleDel = async (taskId) => {
    try {
      await deleteTask(taskId);
      reloadpage();
    } catch (error) {
      console.log(error);
    }
  };

  const reloadpage = async () => {
    try {
      const res = await getTasks();
      const filterTitle = res.data.filter((val) => {
        return val.title.toLowerCase().includes(search.toLowerCase());
      });
      settaskFilter(filterTitle);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reloadpage();
  }, [search]);

  return (
    <TaskManagerContext.Provider
      value={{
        formValue,
        search,
        setFormValue,
        edit,
        handleChange,
        handleSubmit,
        handleEdit,
        handleDel,
        setSearch,
        settaskFilter,
        reloadpage,

        taskFilter,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
};

export default TaskContext;
