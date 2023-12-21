

const List = () => {
    return (
        <div className="flex gap-10 justify-between">
            <div className="text-xl text-center w-60 rounded-md p-5 bg-slate-200">
                <p>To-Do</p>
            </div>
            <div className="text-xl text-white text-center w-60 rounded-md p-5 bg-sky-400">
                <p>Ongoing</p>
            </div>
            <div className="text-xl text-white text-center w-60 rounded-md p-5 bg-green-500">
                <p>Completed</p>
            </div>
        </div>
    );
};

export default List;