function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate.replace(`${day}`, `${day}${suffix}`);
}


/* Date for Blog Article  */
function articleDate(postDate) {
  const dateString = postDate.date.split("T")[0];
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

export { formatDate, articleDate };
