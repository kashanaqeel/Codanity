export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short' 
  });
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
