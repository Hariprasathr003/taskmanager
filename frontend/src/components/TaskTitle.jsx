import { useContext } from "react";
import { TaskManagerContext } from "./contextpage/TaskContext";

const TaskTitle = () => {
  const { taskFilter } = useContext(TaskManagerContext);

  const colourpriority = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-700 px-2 py-1 ";
      case "medium":
        return "text-orange-700 px-2 py-1 ";
      case "low":
        return "text-green-700 px-2 py-1 ";
      default:
        return "text-gray-700 px-2 py-1 ";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Tasks
      </h2>

      <div className="flex justify-end mb-6">
        <h1 className=" text-gray-800  px-4 py-2 rounded-md font-medium">
          Total Tasks: <strong>{taskFilter.length}</strong>
        </h1>
      </div>

      {taskFilter.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">No tasks found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {taskFilter.map((val) => (
            <div
              key={val.id}
              className="flex flex-col justify-between h-full bg-white border border-gray-200 rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {val.title}
                </h2>

                <ul className="grid grid-cols-3 gap-y-2 text-sm text-gray-700">
                  <li className="col-span-1 font-semibold">Description:</li>
                  <li className="col-span-2">{val.description}</li>

                  <li className="col-span-1 font-semibold">Priority:</li>
                  <li className="col-span-2">
                    <span className={colourpriority(val.priority)}>
                      {val.priority}
                    </span>
                  </li>

                  <li className="col-span-1 font-semibold">Status:</li>
                  <li className="col-span-2">
                    {val.completed ? (
                      <span className="text-green-600 font-medium">
                        Completed
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        Not Completed
                      </span>
                    )}
                  </li>

                  <li className="col-span-1 font-semibold">Created:</li>
                  <li className="col-span-2">{val.createdDate}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskTitle;
