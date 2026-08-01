const CurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("en-GB");

  return <h1>Current Date: {currentDate}</h1>;
};

export default CurrentDate;