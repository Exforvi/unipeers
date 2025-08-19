 
export const formatTimeStampToDate = (date) => {
    const day = date.toLocaleString("us",{day: "numeric"})
    const month = date.toLocaleString("us",{month: "short"})
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }