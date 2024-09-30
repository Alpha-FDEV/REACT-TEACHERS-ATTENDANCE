import logo from "./logo.svg";
import Heading from "./header";
import Button from "./buttons";
import SearchBar from "./searchBar";
import DisplayBox from "./teachersBox";
import Teacher from "./teacher";
import "./App.css";

import { useState, useEffect } from "react";

import DetailsForm from "./form";
import ReactDOM from "react-dom/client";

const teachersArr = [
  {
    id: 1,
    name: "Alice Johnson",
    subject1: "Mathematics",
    subject2: false,
    attended: false,
    onLeave: true,
    Phone: "0748081299",
  },
  {
    id: 2,
    name: "Bob Smith",
    subject1: "Science",
    attended: true,
    onLeave: false,
    Phone: "0740404040",
  },
  {
    id: 3,
    name: "Charlie Brown",
    subject1: "History",
    attended: true,
    onLeave: false,
    Phone: "0740206686",
  },
  {
    id: 4,
    name: "Diana Prince",
    subject1: "English",
    attended: false,
    onLeave: false,
    Phone: "0733322685",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    subject1: "Physical Education",
    attended: true,
    onLeave: false,
    Phone: "0722222222",
  },
  {
    id: 6,
    name: "watkins Hunt",
    subject1: "Physical Education",
    attended: false,
    onLeave: false,
    Phone: "0711111111",
  },
];

function App() {
  const [teachersOnleave, setTeachersOnleave] = useState([]);
  const [teachersAttendeded, setTeachersAttended] = useState([]);
  const [teachersNot, setTeachersNot] = useState([]);
  const [Onleave, setOnLeave] = useState(false);
  const [allteachers, setAllTeachers] = useState(teachersArr);
  const [teachers, setTeachers] = useState(allteachers);
  const [activeTeacher, setActiveTeacher] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(1);

  const [activeBtn, setActiveBtn] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setsubject2] = useState("");
  const [phone, setPhone] = useState(Number());
  const [isOpen, setIsopen] = useState(false);

  let teacherss;
  useEffect(() => {
    setTeachers(allteachers);
  }, [allteachers]);

  function handleAllTeachers(idNo) {
    if (idNo) {
      setActiveBtn(idNo);
    }
    setTeachers(allteachers);
  }
  function confirmwindow(teachername, newTeacher) {
    const result = window.confirm(`Add ${teachername} as new teacher`);
    result
      ? setAllTeachers((teachersAll) => [newTeacher, ...teachersAll])
      : console.log(result);
    handleAllTeachers(1);
    setIsopen((open) => !open);
  }
  function handleToggleTeachers(idNo) {
    const teachersAttend = allteachers.filter(
      (teacher) => teacher.attended === true
    );
    setActiveBtn(idNo);

    setTeachersAttended(teachersAttend);
    setTeachers(teachersAttend);
  }

  function handleActiveTeacher(selectedInfo) {
    setActiveTeacher(selectedInfo.id);
    setSelectedTeacher(selectedInfo);
  }
  function handleNotAttended(idNo) {
    const teachersNotAttended = allteachers.filter(
      (teacher) => teacher.attended === false
    );
    setActiveBtn(idNo);
    setTeachersNot(teachersNotAttended);
    setTeachers(teachersNotAttended);
  }
  function handleOnleave(idNo) {
    const teachersOnLeave = allteachers.filter(
      (teacher) => teacher.onLeave === true
    );
    setTeachers(teachersOnLeave);
    setActiveBtn(idNo);
    setTeachersOnleave(teachersOnLeave);
  }
  function handleGrantLeave(idNo) {
    setAllTeachers((teachs) =>
      teachs.map((teach) =>
        teach.id === idNo
          ? {
              ...teach,
              onLeave: !teach.onLeave,
              attended: !teach.onLeave ? false : true,
            }
          : teach
      )
    );
    handleAllTeachers(1);
  }
  function handleToggleForm(_) {
    setIsopen((open) => !open);
  }
  function handleAddTeacher(e) {
    e.preventDefault();
    if (!name || !id || !phone || !subject1) return;
    const newTeacher = {
      name,
      id,
      phone,
      subject1,
      subject2,
      attended: true,
      onLeave: false,
    };
    confirmwindow(newTeacher.name, newTeacher);
  }

  return (
    <main className=" bg-slate-200 pt-8  ">
      <div className="w-3/4 h-4/5 ml-auto bg-white mr-auto shadow-2xl scale-105 relative ">
        <DetailsForm
          name={name}
          phone={phone}
          id={id}
          subject1={subject1}
          subject2={subject2}
          setsubject2={setsubject2}
          setSubject1={setSubject1}
          setPhone={setPhone}
          setId={setId}
          setName={setName}
          isOpen={isOpen}
          onToggleForm={handleToggleForm}
          onAddnewTeacher={handleAddTeacher}
        />
        <Header
          onToggle={handleToggleTeachers}
          onNotAttended={handleNotAttended}
          onLeaveTeachers={handleOnleave}
          onAllTeachers={handleAllTeachers}
          activeBtn={activeBtn}
        />
        <Body
          teachers={teachers}
          onToggle={handleToggleForm}
          allteachers={allteachers}
          activeTeacher={activeTeacher}
          onhandleActiveteacher={handleActiveTeacher}
          selectedTeacher={selectedTeacher}
          onGrantLeave={handleGrantLeave}
        />
      </div>
    </main>
  );
}
export default App;
function Header({
  onToggle,
  onNotAttended,
  onLeaveTeachers,
  activeBtn,
  onAllTeachers,
}) {
  return (
    <header>
      <TopNavigation>
        <div className="flex flex-nowrap justify-between mx-6">
          <div className="flex flex-col w-3/6 ">
            <SearchBar />
          </div>
          <div className="flex gap-3">
            <Button
              text={"All"}
              bgColor={"bg-green-500"}
              onToggle={onAllTeachers}
              id={9}
              activeBtn={activeBtn}
            />
            <Button
              text={"Attended"}
              bgColor={"bg-green-500"}
              onToggle={onToggle}
              id={1}
              activeBtn={activeBtn}
            />
            <Button
              text={"Not Attended"}
              bgColor={"bg-green-500"}
              onToggle={onNotAttended}
              id={2}
              activeBtn={activeBtn}
            />

            <Button
              text={"Onleave"}
              bgColor={"bg-green-500"}
              onToggle={onLeaveTeachers}
              id={3}
              activeBtn={activeBtn}
            />
          </div>
        </div>
      </TopNavigation>
    </header>
  );
}

function TopNavigation({ children }) {
  return (
    <div className="flex flex-col gap-5">
      <Heading />
      {children}
    </div>
  );
}

function Body({
  teachers,
  onToggle,
  allteachers,
  onhandleActiveteacher,
  activeTeacher,
  selectedTeacher,
  onGrantLeave,
}) {
  return (
    <div>
      <ContentBox>
        <DisplayBox>
          <DisplayAllTeachers
            teachers={teachers}
            activeTeacher={activeTeacher}
            onhandleActiveteacher={onhandleActiveteacher}
          />
        </DisplayBox>
        <DisplayBox>
          <DisplaySelectedTeacher
            teachers={teachers}
            selectedTeacher={selectedTeacher}
          >
            <SelectedEdit
              onGrantLeave={onGrantLeave}
              selectedTeacher={selectedTeacher}
            />
          </DisplaySelectedTeacher>
        </DisplayBox>
      </ContentBox>
      <ControlTeachers
        teachers={teachers}
        onToggle={onToggle}
        allteachers={allteachers}
      />
    </div>
  );
}
function ContentBox({ children }) {
  return <div className="flex flex-row gap-32 flex-grow">{children}</div>;
}
function DisplayAllTeachers({
  teachers,
  onhandleActiveteacher,
  activeTeacher,
}) {
  return (
    <div className="flex flex-col items-start flex-grow w-full h-80  overflow-scroll">
      {teachers.map((teacher, i) => (
        <Teacher
          teacherData={teacher}
          key={teacher.id}
          num={i}
          activeTeacher={activeTeacher}
          onhandleActiveteacher={onhandleActiveteacher}
          isActive={activeTeacher === teacher.id}
        />
      ))}
    </div>
  );
}

function DisplaySelectedTeacher({ selectedTeacher, children }) {
  let sub;
  if (!selectedTeacher.subject2) sub = selectedTeacher.subject1;

  if (selectedTeacher.subject2 && selectedTeacher.subject1)
    sub = `${selectedTeacher.subject1} and ${selectedTeacher.subject2} `;
  return (
    <div className=" flex flex-col items-start ">
      <div className="flex">
        <div>
          <img
            src={`https://i.pravatar.cc/150?u=a042581f4e29026704d?u=${selectedTeacher.id} `}
            alt="selected teacher avatar"
            className="w-14 rounded-full"
          />
        </div>
        <ul className="flex flex-col translate-y-12">
          <SelectedInfo text={"Name"} value={selectedTeacher.name} />
          <SelectedInfo text={"Phone"} value={selectedTeacher.Phone} />
          <SelectedInfo text={"Id "} value={selectedTeacher.id} />

          <SelectedInfo text={"subject(s)"} value={sub} />
        </ul>
      </div>
      {children}
    </div>
  );
}
function SelectedInfo({ text, value }) {
  return (
    <li className="flex justify-start items-center gap-3">
      <span className="text-lg">
        {text} <span className="text-xl text-green-600">:</span>
      </span>
      <span className="font-medium">{value}</span>
    </li>
  );
}
function SelectedEdit({ onGrantLeave, selectedTeacher }) {
  return (
    <div className="mt-20">
      <div className="flex flex-row gap-28">
        <Button
          text={"Grant Leave"}
          bgColor={"bg-green-300"}
          onToggle={onGrantLeave}
          id={selectedTeacher.id}
        />
        <Button text={"Delete "} bgColor={"bg-red-500"} />
      </div>
    </div>
  );
}
function ControlTeachers({ teachers, onToggle, allteachers }) {
  const teacherssOnLeave = allteachers.filter(
    (teacher) => teacher.onLeave === true
  );
  const teachersNotAttended = allteachers.filter(
    (teacher) => teacher.attended === false
  );
  const teachersAttended = allteachers.filter(
    (teacher) => teacher.attended === true
  );

  console.log(teacherssOnLeave);
  return (
    <div className="flex flex-row justify-evenly items-start border-t-2 border-t-green-300">
      <div className="ml-32 mt-2 text-white font-bold">
        <Button
          text={"Add Teacher"}
          bgColor={"bg-green-600"}
          onToggle={onToggle}
        />
      </div>
      <ul className="flex flex-col justify-center items-start gap-2 ">
        <li className="summarry">
          <p className="w-44">Teachers Attended:</p>{" "}
          <span className="font-bold text-lg">{teachersAttended.length}</span>
        </li>
        <li className="summarry">
          <p className="w-44">Teachers Not Attended:</p>{" "}
          <span className="font-bold text-lg">
            {teachersNotAttended.length}
          </span>
        </li>
        <li className="summarry">
          <p className="w-44">Teachers Onleave:</p>{" "}
          <span className="font-bold text-lg">{teacherssOnLeave.length}</span>
        </li>
      </ul>
    </div>
  );
}
// bg - green - 200;
// bg - green - 400;
// bg - red - 500;
