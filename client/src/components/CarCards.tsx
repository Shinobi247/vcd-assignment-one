import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CARS_QUERY } from "../graphql/queries";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import SingleCar from "./SingleCarCard";

type SearchItem = {
  searchItem: string;
};

export default function CarsCard(props: SearchItem) {
  let [carsData, setCarsData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:9000/graphql?", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: CARS_QUERY })
    })
      .then((res) => res.json())
      .then((data) => {
        setCarsData(data.data.getAllCars);
      });
  }, []);
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center"
        spacing={6}
        sx={{
          marginTop: "1px"
        }}
      >
        {carsData
          .filter((val) => {
            if (props.searchItem === "") {
              return val;
            } else if (
              val.make.toLowerCase().includes(props.searchItem) ||
              val.model.toLowerCase().includes(props.searchItem)
            ) {
              return val;
            }
          })
          .map((car) => (
            <SingleCar carInfo={car} key={car.objectId} />
          ))}
      </Grid>
    </Grid>
  );
}
