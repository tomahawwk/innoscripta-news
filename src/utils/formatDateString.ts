const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate: string = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return formattedDate;
};

export default formatDateString;
