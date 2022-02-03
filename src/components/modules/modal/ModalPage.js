const ModalPage = (props) => {
  return (
    <div className="modalPage">
      <div>
        <h1>{props.title}</h1>
      </div>
      {props.inputs.map((input) => {
        return (
          <div>
            <label>{input}</label>
            <input type="text"></input>
          </div>
        );
      })}
    </div>
  );
};

export default ModalPage;
