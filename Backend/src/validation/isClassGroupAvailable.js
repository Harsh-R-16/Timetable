module.exports = (course, meetingTime, instructorData) => {
  for (let i = 0; i < instructorData.length; i++) {
    if (course.courseNo == instructorData[i].course.courseNo) {
      let start = Number(meetingTime.meetingStart.split(":").join(""));
      let end = Number(
        instructorData[i].meetingTime.meetingEnd.split(":").join("")
      );
      if (start < end) {
        return {
          message: "This class students already engaged in other class",
        };
      } else if (start - end <= 15) {
        return {
          message:
            "15 minutes break is there please attend classes after the break",
        };
      }
    }
  }
  return "true";
};
