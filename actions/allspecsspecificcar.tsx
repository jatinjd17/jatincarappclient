import axios from "axios";

export const OneCarAllSpecs = async (carname) => {
  const rrr = await axios.get(
    `http://ec2-13-233-105-98.ap-south-1.compute.amazonaws.com:5000/${carname}`
  );
  return { carspecs: rrr.data };
};
