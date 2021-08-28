import React from "react";
import { getOneBlog } from "../../actions/cat";
import AllSPecifications2v2 from "../../Components/example/Compare2v2";
import AllSPecifications from "../../Components/example/Compare3v3";

const Profile = ({ query, data, joy }) => {
  //   console.log(query.slug);
  //   console.log({ data });
  // console.log(joy.Car1);
  // console.log(joy.Car2);
  // console.log(JSON.parse(joy.Car1));
  // console.log(JSON.parse(joy.Car2));
  return (
    <div>
      {joy.Car3 ? (
        <AllSPecifications SpecificationsFeatures={joy} />
      ) : (
        <AllSPecifications2v2 SpecificationsFeatures={joy} />
      )}
    </div>
  );
};

Profile.getInitialProps = ({ query }) => {
  return getOneBlog(query.slug).then((data) => {
    return { joy: data, query };
  });
};

export default Profile;
