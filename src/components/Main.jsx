import Alert from "./alert";

export default function Main() {
  return (
    <main id="page-main">
      <section className="content-section">
        <div className="container">
          <Alert />
          <h2>Content goes here</h2>
        </div>
      </section>
      <section className="shop-section">
        <div className="container">
          <div className="col-1-5">
            <div className="main-shop">
              <img src="\img\buy-comics-digital-comics.png" alt="" />
              <p>DIGITAL COMICS</p>
            </div>
          </div>
          <div className="col-1-5">
            <div className="main-shop">
              <img src="\img\buy-comics-merchandise.png" alt="" />
              <p>DC MERCHANDISE</p>
            </div>
          </div>
          <div className="col-1-5">
            <div className="main-shop">
              <img src="\img\buy-comics-subscriptions.png" alt="" />
              <p>SUBSCRIPTION</p>
            </div>
          </div>
          <div className="col-1-5">
            <div className="main-shop">
              <img src="\img\buy-comics-shop-locator.png" alt="" />
              <p>COMIC SHOP LOCATOR</p>
            </div>
          </div>
          <div className="col-1-5">
            <div className="main-shop">
              <img src="\img\buy-dc-power-visa.svg" alt="" />
              <p>DC POWER VISA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
