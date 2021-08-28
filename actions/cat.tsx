import axios from "axios";
import { parseBody } from "next/dist/next-server/server/api-utils";
import { parse } from "postcss";
import { jatincardatabase } from "../Database1/allcardatabasespecs";
import { AspireDataBase } from "../Database1/Ford/Aspire/AllSpecs";
import { EcosportDataBase } from "../Database1/Ford/Ecosport/AllSpecs";
import { EndeavourDataBase } from "../Database1/Ford/Endeavour/AllSpecs";
import { FigoDataBase } from "../Database1/Ford/Figo/AllSpecs";
import { FreestyleDataBase } from "../Database1/Ford/Freestyle/AllSpecs";

export const getOneBlog = async (slug) => {
  // const new123 = AspireDataBase;
  const sss = slug.split("vs");
  if (sss.length === 2) {
    const rrr = await axios.get(`https://jatincarapp.herokuapp.com/${sss[0]}`);
    const r22 = await axios.get(`https://jatincarapp.herokuapp.com/${sss[1]}`);
    return { Car1: rrr.data, Car2: r22.data };
  } else if (sss.length === 3) {
    const rrr = await axios.get(`https://jatincarapp.herokuapp.com/${sss[0]}`);
    const r22 = await axios.get(`https://jatincarapp.herokuapp.com/${sss[1]}`);
    const r33 = await axios.get(`https://jatincarapp.herokuapp.com/${sss[2]}`);
    return { Car1: rrr.data, Car2: r22.data, Car3: r33.data };
  } else return "no comparision";
};
