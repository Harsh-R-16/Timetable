module.exports = (room, meetingTime, instructorData) => {
  for (let i = 0; i < instructorData.length; i++) {
    if (room.roomName == instructorData[i].room.roomName) {
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
          return { message: "This classroom is already engaged" };
        }
      }
    }
  }
  return "true";
};
