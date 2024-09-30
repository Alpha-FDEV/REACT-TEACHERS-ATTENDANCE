import { useState } from "react";

export default function DetailsForm({
  isOpen,
  onToggleForm,
  onAddnewTeacher,
  setName,
  setId,
  setPhone,
  setSubject1,
  setsubject2,
  phone,
  id,
  name,
  subject1,
  subject2,
}) {
  return (
    <>
      <div
        className={`w-full h-full z-10 backdrop-brightness-50 backdrop-blur-sm absolute   ${
          !isOpen ? "hidden" : ""
        }`}
        onClick={onToggleForm}
      ></div>
      <div
        className={`w-full h-full transition-transform  absolute ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <form
          onSubmit={onAddnewTeacher}
          className="w-1/2 z-50 border-2  py-3 bg-white shadow-xl  absolute translate-x-1/2 translate-y-1/4"
        >
          <h1 className="font-bold text-lg border-b-2 border-b-green-400 px-1 mb-2">
            Enter Teachers Details
          </h1>
          <div className="grid grid-cols-2 gap-x-4 justify-center items-center px-6">
            <div className="flex flex-col gap-2 items-start">
              <label for="name" className=" text-start text-lg font-semibold">
                Name
              </label>
              <input
                required
                id="name"
                type="text"
                className=" amt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none   focus:border-green-400 sm:text-sm rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label
                for="subject1"
                className=" text-start text-lg font-semibold"
              >
                Subject 1
              </label>

              <select
                value={subject1}
                onChange={(e) => setSubject1(e.target.value)}
                id="subject1"
                name="subject"
                border-2
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none  focus:ring-indigo-500 focus:border-green-400 sm:text-sm rounded-md"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Select a subject --
                </option>
                <option value="english">English</option>
                <option value="kiswahili">Kiswahili</option>
                <option value="mathematics">Mathematics</option>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="history">History and Government</option>
                <option value="geography">Geography</option>
                <option value="cre">Christian Religious Education (CRE)</option>
                <option value="ire">Islamic Religious Education (IRE)</option>
                <option value="hindu-re">
                  Hindu Religious Education (HRE)
                </option>
                <option value="agriculture">Agriculture</option>
                <option value="business">Business Studies</option>
                <option value="home-science">Home Science</option>
                <option value="computer-studies">Computer Studies</option>
                <option value="music">Music</option>
                <option value="art-design">Art and Design</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 iitems-start">
              <label for="id" className="  text-start text-lg font-semibold">
                Id
              </label>
              <input
                required
                id="id"
                type="number"
                className=" amt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none   focus:border-green-400 sm:text-sm rounded-md"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label
                for="subject2"
                className=" text-start text-lg font-semibold"
              >
                Subject 2
              </label>
              <select
                value={subject2}
                onChange={(e) => setsubject2(e.target.value)}
                id="subject2"
                name="subject"
                border-2
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none   focus:border-green-400 sm:text-sm rounded-md"
                defaultValue=""
              >
                <option value="" disabled>
                  -- Select a subject --
                </option>
                <option value="english">English</option>
                <option value="kiswahili">Kiswahili</option>
                <option value="mathematics">Mathematics</option>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="physics">Physics</option>
                <option value="history">History and Government</option>
                <option value="geography">Geography</option>
                <option value="cre">Christian Religious Education (CRE)</option>
                <option value="ire">Islamic Religious Education (IRE)</option>
                <option value="hindu-re">
                  Hindu Religious Education (HRE)
                </option>
                <option value="agriculture">Agriculture</option>
                <option value="business">Business Studies</option>
                <option value="home-science">Home Science</option>
                <option value="computer-studies">Computer Studies</option>
                <option value="music">Music</option>
                <option value="art-design">Art and Design</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label for="phone" className=" text-start text-lg font-semibold">
                Phone
              </label>
              <input
                id="phone"
                required
                type="number"
                className=" mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none   focus:border-green-400 sm:text-sm rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-end mt-6 pr-6 ">
            <input
              type="submit"
              className="bg-green-500 px-6 py-2 text-white text-xl  text-center rounded-md"
            />
          </div>
        </form>
      </div>
    </>
  );
}
