export default function ComicsCard({ title, img }) {
  return (
    <div className="col-1-6">
      <div id="card">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-content">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
