export default function Teacher({
  teacherData,
  teacher,
  num,
  activeTeacher,
  onhandleActiveteacher,

  isActive,
}) {
  let status;

  if (!teacherData.attended && !teacherData.onLeave) status = "Missed";
  if (teacherData.onLeave) status = "Onleave";
  if (teacherData.attended) status = "Attended";

  const baseClasses =
    "flex flex-col px-2 pb-3 pt-2  flex-grow border-b-2 border-green-200 ";
  const activeClasses = isActive ? "bg-green-300" : "hover:bg-green-100";
  return (
    <div
      className={`${baseClasses} ${activeClasses}`}
      onClick={() => onhandleActiveteacher(teacherData)}
    >
      <div className="flex flex-row flex-grow flex-shrink items-center justify-between w-full  ">
        <div className="flex flex-row flex-grow-0 flex-shrink items-center gap-5">
          <div>
            <p className="font-semibold text-slate-900 pl-2">{num + 1}</p>
          </div>
          <div>
            <img
              src={`https://i.pravatar.cc/150?u=a042581f4e29026704d?u=${teacherData.id} `}
              alt="Teachers image"
              className="rounded-full w-14 h-14"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-64">
            <p className="text-lg font-sm px-7 flex-grow ml-4">
              {teacherData.name}
            </p>
          </div>

          <div className="bg-green-400  px-3 flex justify-center items-center w-20">
            <p className="font-semibold text-sm text-white ">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
