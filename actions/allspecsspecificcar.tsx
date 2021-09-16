import axios from "axios";

export const OneCarAllSpecs = async (carname) => {
  const rrr = await axios.get(`https://carsjatin.herokuapp.com/${carname}`);
  return { carspecs: rrr.data };
};
