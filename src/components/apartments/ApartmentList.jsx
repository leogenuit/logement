import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./ApartmentList.module.scss";

export default function ApartmentList() {
  const [apartments, setapartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/apartments")
      .then((response) => setapartments(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className={style.title}>Liste des appartements</h1>
      <div className={style.container}>
        <div className={style.cardList}>
          {apartments.map((apartment) => (
            <div className={style.card} key={apartment._id}>
              <img className={style.img} src={apartment.img} alt="apartment" />
              <div className={style.info}>
                <div className={style.priceSquareMeters}>
                  <p className={style.price}>
                    {apartment.price}€ <span>cc</span>
                  </p>
                  <p className={style.squareMeters}>
                    {apartment.square_meters} m²
                  </p>
                </div>
                <div className={style.floorRoom}>
                  <div className={style.infoFloor}>
                    <img
                      className={style.pictoFloor}
                      src={require("./floor.png")}
                      alt="floor"
                    />
                    <span className={style.floor}>{apartment.floor}</span>
                  </div>
                  <p className={style.rooms}> {apartment.rooms} pièce(s) </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
