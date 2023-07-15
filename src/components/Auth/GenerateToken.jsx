import React from "react";
import { generateToken } from "../../store/asyncThunk/generateToken";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const GenerateToken = () => {
  const param = useParams().token;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!localStorage.getItem("customerId")) {
      dispatch(generateToken(param))
        .then((resultAction) => {
          if (generateToken.fulfilled.match(resultAction)) {
            const customerId = resultAction.payload;
            localStorage.setItem("customerId", customerId);
            navigate("/user-profile");
          } else {
            console.error("Error occurred while generating token.");
          }
        })
        .catch((error) => {
          console.error("Error occurred while generating token.", error);
        });
    } else {
      navigate("/user-profile");
    }
  }, [param, dispatch, navigate]);
  return <div></div>;
};

export default GenerateToken;
