import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../actions";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
const CounterApp = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        border: "2px solid #f50057",
        margin: "20px",
        height: "auto",
        width: "300px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          style={{ marginLeft: "70px", marginBottom: "10px" }}
        >
          Counter : {counter}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(increment(5))}
          style={{ marginRight: "10px" }}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(reset())}
          style={{ marginRight: "10px" }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        {isLogged ? <Typography variant="h6">Logged in!!</Typography> : ""}
      </CardContent>
    </Card>
  );
};

export default CounterApp;
