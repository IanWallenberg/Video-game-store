import "./Backdrop.css";

const Backdrop = ({show, click}) => {
  return show &&
    <div className="backdrop" onClick={click}>Backdrop</div>
    // calling the onClick if button is clicked for sidedrawer
}

export default Backdrop