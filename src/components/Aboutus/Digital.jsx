import React from "react";
import "./Digital.css";
import Button from "../Buttons/Button";
const Digital = () => {
  return (
    <div className="trusted-partner">
      <div className="trusted-card">
        <h2 className="trusted-heading">
          Meet SEOC Your Trusted Digital Automation Partner
        </h2>
        <p className="para">
          sollicitudin. viverra nisl. ex Nam adipiscing volutpat Sed ex. maximus
          Donec viverra tincidunt elit Sed eu tincidunt turpis dui. est.
          ullamcorper sit placerat Praesent faucibus leo. id scelerisque
          faucibus sapien gravida dui. vel amet, id
        </p>

        <p className="para">
          {" "}
          Nunc id In Nunc commodo dui. turpis malesuada venenatis diam Lorem
          non, viverra facilisis lacus, ex. ex efficitur. consectetur nisl.
          consectetur Quisque vitae risus varius nibh ipsum placerat ex libero,
          massa nec odio vitae fringilla ex{" "}
        </p>

        <p className="para">
          {" "}
          eget est. fringilla eget porta vitae est. quam enim. viverra libero,
          ac odio ac est. Ut faucibus venenatis cursus ultrices elit sapien elit
          varius nulla, nisl. elit. nisi faucibus elementum massa commodo leo.
          varius odio elit Morbi nisl.
        </p>

        <p className="para">
          {" "}
          odio ipsum Donec Praesent dolor faucibus tincidunt efficitur. odio
          consectetur porta elementum felis, Nunc gravida viverra risus Morbi
          enim. tincidunt est. Ut sapien amet, Sed Ut Praesent Cras sapien Donec
          at, Ut efficitur. cursus sapien{" "}
        </p>
        <div className="buttons-container">
          <Button variant="filled">Start Ranking Now</Button>
          <Button variant="outline">Contact Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Digital;
