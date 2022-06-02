import "./timeTable.css";
import { Link } from "react-router-dom";
import data from "./data";
export const TimeTable = () => {
  return (
    <div>
      <h1>Time Table for College</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Class ID</th>
            <th>Dept</th>
            <th>Course (number, max students)</th>
            <th>Room (Capacity)</th>
            <th>Instructor (Id)</th>
            <th>Meeting Time (Id)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, ind) => (
            <tr key={ele._id}>
              <td>{ind + 1}</td>
              <td>{ele.dep}</td>
              <td>
                {ele.course.courseId} ({ele.course.courseNo},{" "}
                {ele.course.maxNoOfStudents})
              </td>
              <td>
                {ele.room.roomName} ({ele.room.roomCapacity})
              </td>
              <td>
                {ele.instructor.instructorName} ({ele.instructor.instructorId})
              </td>
              <td>
                {ele.meetingTime.meetingDays.join("")}{" "}
                {ele.meetingTime.meetingStart} - {ele.meetingTime.meetingEnd} (
                {ele.meetingTime.meetingId})
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/schedule" style={{ textDecoration: "none" }}>
        <button id="btn">Add Schedule</button>
      </Link>
    </div>
  );
};
