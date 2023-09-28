/** Formats date object to format `YYYY-MM-DD` */
const formatDate = (date: Date) => {
  // Get the year, month, and day from the Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(date.getDate()).padStart(2, "0");

  // Create a string in "YYYY-MM-DD" format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export { formatDate };
