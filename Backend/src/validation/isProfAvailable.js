module.exports = (instructor, meetingTime, instructorData) => {
  for (let i = 0; i < instructorData.length; i++) {
    if (
      instructor.instructorName == instructorData[i].instructor.instructorName
    ) {
      let flag = true;
      for (
        let j = 0;
        j < instructorData[i].meetingTime.meetingDays.length;
        j++
      ) {
        if (
          meetingTime.meetingDays[j] !=
          instructorData[i].meetingTime.meetingDays[j]
        ) {
          flag = false;
          break;
        }
      }
      if (flag == true) {
        let start = Number(meetingTime.meetingStart.split(":").join(""));
        let end = Number(
          instructorData[i].meetingTime.meetingEnd.split(":").join("")
        );
        if (start < end) {
          return {
            message:
              "Professor already booked on that time slot please shedule another time slot",
          };
        } else if (start - end <= 15) {
          return {
            message: "15 minutes break is there please shedule after break",
          };
        }
      }
    }
  }
  return "true";
};
