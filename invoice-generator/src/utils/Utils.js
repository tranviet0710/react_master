export const roundNumber = (number) => {
  return parseFloat(number).toFixed(2);
};
export function getCurrentDateFormatted() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Note: Month is zero-based
  const year = currentDate.getFullYear();

  return `${month}/${day}/${year}`;
}
