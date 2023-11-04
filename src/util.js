import datetimeDifference from "datetime-difference";

const timeSinceUpload = (createdAt) => {
  const videoTimeDuration = datetimeDifference(
    new Date(createdAt),
    new Date(Date.now())
  );
  let videoTimeDurationString = `${
    videoTimeDuration.years >= 1 ? videoTimeDuration.years + "years" : ""
  } ${
    videoTimeDuration.months >= 1 ? videoTimeDuration.months + "months" : ""
  } ${videoTimeDuration.days >= 1 ? videoTimeDuration.days + "days" : ""} ${
    videoTimeDuration.hours >= 1 ? videoTimeDuration.hours + "hours" : ""
  } ${
    videoTimeDuration.minutes >= 1 ? videoTimeDuration.minutes + "minutes" : ""
  } ${
    videoTimeDuration.seconds >= 1 ? videoTimeDuration.seconds + "seconds" : ""
  }`;

  videoTimeDurationString = videoTimeDurationString.trim().split(" ");

  videoTimeDurationString = videoTimeDurationString[0];

  videoTimeDurationString = videoTimeDurationString.replace(/([0-9]+)/g, "$1 ");

  // console.log( videoTimeDuration, videoTimeDurationString )

  return videoTimeDurationString;
};

const formatDate = (createdAt) => {
  const date = new Date(createdAt);

  const formatted = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formatted;
};

export { timeSinceUpload, formatDate };
