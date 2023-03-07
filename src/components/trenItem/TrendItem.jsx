import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <h4>{data.subTitle}</h4>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </div>
  );
};

export default TrendItem;
