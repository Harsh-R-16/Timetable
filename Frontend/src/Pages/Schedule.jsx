import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from "axios";
import "./shedule.css";
export const Schedule = () => {
  const [dept, setDept] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseNo, setCourseNo] = useState("");
  const [maxNoStd, setMaxNoStd] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [roomCapacity, setRoomCapacity] = useState(0);
  const [instructorName, setInstructorName] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [meetDays, setMeetDays] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetId, setMeetId] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://ken42-time-table.herokuapp.com/data/schedule", {
        dep: dept,
        course: {
          courseId: courseId,
          courseNo: courseNo,
          maxNoOfStudents: maxNoStd,
        },
        room: {
          roomName: roomName,
          roomCapacity: roomCapacity,
        },
        instructor: {
          instructorName: instructorName,
          instructorId: instructorId,
        },
        meetingTime: {
          meetingDays: meetDays == "TTH" ? ["T", "TH"] : ["M", "W", "F"],
          meetingStart: startTime,
          meetingEnd: endTime,
          meetingId: meetId,
        },
      })
      .then(function (response) {
        console.log(response);
        response.status == 201
          ? alert("Successfully updated the Time Table")
          : alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Add Schedule</h1>
        <input
          type="text"
          placeholder="Department Name"
          onChange={(e) => setDept(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Course ID"
          onChange={(e) => setCourseId(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Course Number"
          onChange={(e) => setCourseNo(e.target.value)}
        ></input>
        <input
          type="Number"
          placeholder="Maximum Number of students"
          onChange={(e) => setMaxNoStd(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Room Name"
          onChange={(e) => setRoomName(e.target.value)}
        ></input>
        <input
          type="Number"
          placeholder="Room Capacity"
          onChange={(e) => setRoomCapacity(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Instructor Name"
          onChange={(e) => setInstructorName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Instructor ID"
          onChange={(e) => setInstructorId(e.target.value)}
        ></input>
        <select>
          <option value="">Select Instructor ID</option>
          <option value="TTH">TTH</option>
          <option value="MWF">MWF</option>
        </select>
        <input
          type="text"
          placeholder="Class Start time (24 Hour Format) eg: 13:00"
          onChange={(e) => setStartTime(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Class End time (24 Hour Format) eg: 14:00"
          onChange={(e) => setEndTime(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Meeting Id"
          onChange={(e) => setMeetId(e.target.value)}
        ></input>
        <button aria-label="Submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
