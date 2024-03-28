const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate: string = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};

export default formatDateString;
