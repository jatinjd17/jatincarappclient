import axios from "axios";

export const OneCarAllSpecs = async (carname) => {
  const rrr = await axios.get(`https://jatincarapp.herokuapp.com/${carname}`);
  return { carspecs: rrr.data };
};
