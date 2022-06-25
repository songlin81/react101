function FormattedDate(props) {
  return <h2>Time: {props.date.toLocaleTimeString()}</h2>;
}

export default FormattedDate;