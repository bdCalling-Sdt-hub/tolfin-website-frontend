const getDurationText = (duration: number): string => {
  if (duration >= 12) {
    const years = Math.floor(duration / 12);
    const months = duration % 12;
    if (months === 0) {
      return `${years} Year`; // e.g., "1 Year"
    } else {
      return `${years} Year ${months} Month`; // e.g., "1 Year 2 Months"
    }
  } else {
    return `${duration} Month`; // e.g., "5 Months"
  }
};
export default getDurationText;