import React from "react";
import "./Card.css";
export default function Card(props) {
  console.log(props);
  return (
    <>
      {props?.item && (
        <div className="card ">
          <img
            src={props.item.image}
            className="card-img-top"
            alt="tst "
            height={"200px"}
          />
          <div className="card-body">
            <h5 className="card-title"> {props.item.category}</h5>
            <p className="card-text">{props.item.title}</p>
            <p className="card-text">{props.item.price}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </>
  );
}
