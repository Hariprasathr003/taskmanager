import React, { useContext } from "react";
import { TaskManagerContext } from "./contextpage/TaskContext";

const AddTask = () => {
  const { formValue, handleChange, handleSubmit, edit, setFormValue } =
    useContext(TaskManagerContext);

  return (
    <>
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">

      <form
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          {edit !== null ? "Update Task" : "Add Task"}
        </h1>
        <div>
          <label className="block text-gray-800 font-semibold mb-2 text-lg">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 "
            value={formValue.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2 text-lg">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 "
            value={formValue.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2 text-lg">
            Priority
          </label>

          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2">
            <label className="flex items-center gap-2 cursor-pointer   px-3 py-2 ">
              <input
                type="radio"
                name="priority"
                value="high"
                checked={formValue.priority === "high"}
                onChange={handleChange}
                className="accent-red-600"
                required
              />
              <span className="text-sm text-gray-700 font-medium">High</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer  px-3 py-2 ">
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={formValue.priority === "medium"}
                onChange={handleChange}
                className="accent-orange-500"
                required
              />
              <span className="text-sm text-gray-700 font-medium">Medium</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer  px-3 py-2 ">
              <input
                type="radio"
                name="priority"
                value="low"
                checked={formValue.priority === "low"}
                onChange={handleChange}
                className="accent-green-600"
                required
              />
              <span className="text-sm text-gray-700 font-medium">Low</span>
            </label>
          </div>
        </div>

        <div>
          <label className="inline-flex items-center gap-2 text-gray-800 font-medium">
            <input
              type="checkbox"
              name="completed"
              checked={formValue.completed}
              onChange={(e) =>
                setFormValue({ ...formValue, completed: e.target.checked })
              }
              className="accent-blue-600"
            />
            Completed
          </label>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-2 text-lg">
            Created Date
          </label>
          <input
            type="date"
            name="createdDate"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 "
            value={formValue.createdDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700   text-white text-lg font-semibold py-3"
          >
            {edit !== null ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddTask;
