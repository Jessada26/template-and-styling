const { format, parseISO } = require("date-fns");

const dateFormatOfPost = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "EEEE, MMMM d, yyyy, HH:mm");
  return formattedDate;
};

export default dateFormatOfPost;
