import React from "react";
import { useParams } from "react-router-dom";
function ApartmentDetails() {
  const { id } = useParams();
  return (
    <>
      <h1>Détails de l'appartement{id}</h1>
    </>
  );
}

export default ApartmentDetails;
