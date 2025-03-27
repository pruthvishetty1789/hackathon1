import React, { useState } from "react";
import "./Prediction.css";
import { Link } from "react-router-dom";
const diseases = [
  {
    name: "Diabetes",
    image:
      "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2638019.jpg",
  },
  {
    name: "Lung Cancer",
    image:
      "https://media.istockphoto.com/id/1370095636/photo/the-doctor-touching-the-human-lung-system-on-blurred-background.jpg?s=612x612&w=0&k=20&c=hw705p1OQMOnpk1vcjojvPY-RgBymqOhww_nwAk03uw=",
  },
  {
    name: "Stroke",
    image:
      "https://media.istockphoto.com/id/1168179084/photo/man-with-brain-stroke-symptoms.jpg?s=612x612&w=0&k=20&c=j23EYWonTxw1qQDlijUhn4_QnU3yaIif-UYe761rp4M=",
  },
  {
    name: "Heart Disease",
    image:
      "https://media.istockphoto.com/id/1156928011/photo/heart-attack-heart-attack-conceptual-artwork-3d-illustration.jpg?s=612x612&w=0&k=20&c=A2kWPu_dG5vmcaKcfCGA6FVRRIHRJ83R0HhlAys5fK4=",
  },
];

const Prediction = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const toggleSelection = (disease) => {
    setSelectedDiseases((prevSelected) =>
      prevSelected.includes(disease)
        ? prevSelected.filter((d) => d !== disease)
        : [...prevSelected, disease]
    );
  };

  const handlePredict = () => {
    if (selectedDiseases.length === 0) {
      alert("Please select at least one disease before predicting!");
      return;
    }
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="container">
      <h1 className="title">AI-Powered Disease Prediction</h1>
      <div className="disease-grid">
        {diseases.map((disease, index) => (
          <div
            key={index}
            className={`disease-card ${
              selectedDiseases.includes(disease.name) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(disease.name)}
          >
            <img
              src={disease.image}
              alt={disease.name}
              className="disease-image"
            />
            <h2>{disease.name}</h2>
          </div>
        ))}
      </div>
      <Link to="/login">
        <button className="login-button">Predict</button>
      </Link>
    </div>
  );
};

export default Prediction;
