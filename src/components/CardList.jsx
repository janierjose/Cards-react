import React from "react";

const CardList = ({ card, setCard }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {card.map((car) => (
            <div className="col-md-3 mt-3" key={car.id}>
              <div className="card">
                <img src={car.img} alt="" />
                <div className="card-body">
                  <h3 className="card-title">{car.name}</h3>
                  <p className="card-text">{car.text}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setCard(alert("Hello word"))}
                  >
                    {car.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
