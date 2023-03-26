import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { BiCopy } from "react-icons/bi";

function PopUp({val}) {
  const [show, setShow] = useState("none");
  const target = useRef(null);

  const onClicked = () => {
    if (show === "none") {
      setShow("block");
    } else {
      setShow("none");
    }
    navigator.clipboard.writeText(val)
  };

    useEffect(() => {
      if(show === 'block'){
      setTimeout(()=>{
              setShow('none')
      },1000)
  }
    }, [show])

  return (
    <div className="d-flex align-items-center ">
      <BiCopy ref={target} onClick={onClicked}  />
      <p className={`d-${show} poper`}>copied</p>
    </div>
  );
}

export default PopUp;
