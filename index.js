const Box = (props) => {
  //  Write your code here.
  const { boxText, boxStyle } = props;
  return (
    <div className={`box ${boxStyle}`}>
      <p className="text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div class="box-list-container">
      <Box boxText="Small" boxStyle="small" />
      <Box boxText="Medium" boxStyle="medium" />
      <Box boxText="Large" boxStyle="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
