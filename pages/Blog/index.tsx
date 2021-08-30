import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../Components/head";
import Header from "../../ComponentsBlog/header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Nav />
    </div>
  );
};

export default Home;
