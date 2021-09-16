import axios from "axios";
import { CarsProduction } from "./ApiCarsBlogs";

export const OneCarAllSpecs = async (carname) => {
  const rrr = await axios.get(`${CarsProduction}/${carname}`);
  return { carspecs: rrr.data };
};
