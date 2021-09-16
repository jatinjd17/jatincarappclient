import Link from "next/link";
import Router from "next/router";
import React from "react";
import renderHTML from "react-render-html";
// import "../styles/style.module.scss";
// import './style.css';
// import '../dist/css/style.module.css';
// import styles from '../styles/style.module.scss';

export {};

const Card = ({ card }) => {
  // console.log(card);

  const singleCard = (card) => {
    const categories = () => {
      return card.categories.map((c, i) => {
        console.log(c);
        return (
          <div key={i} className="">
            <button className="bg-blue-600 text-white rounded-2xl w-max px-2 py-0.5 mx-1">
              {c.name}
            </button>
          </div>
        );
      });
    };

    const tags = () => {
      return card.tags.map((t, i) => {
        return (
          <div key={i} className="mx-1">
            {"#"}
            {t.name}
          </div>
        );
      });
    };

    return (
      <body>
        <div
          className="w-96 sm:w-80 border-2 shadow-2xl m-6 sm:m-2 sm:ml-4"
          // onClick={Router.push(`/blogs/${card.slug}`)}
        >
          <Link href={`/Blog/blogs/${card.slug}`}>
            <div className="cursor-pointer">
              <div className="card-banner">
                {/* <p className="category-tag popular">Popular</p> */}
                <img
                  className="p-3"
                  src={`https://blogsjatin.herokuapp.com/api/blog/photo/${card.slug}`}
                  alt=""
                />
              </div>
              <div className="card-body">
                <p className=" ml-3 py-1 flex flex-row">{categories()}</p>
                <p className="text-sm text-red-400 px-3 flex flex-row">
                  {tags()}
                </p>
                <h2 className="text-3xl font-bold px-3 sm:overflow-x-auto">
                  {card.title}
                </h2>
                <p className="text-sm px-3 py-1.5 text-gray-600 sm:overflow-x-auto">
                  {renderHTML(card.excerpt)}
                </p>

                {/* <div className="card-profile">
                  <img
                    className="profile-img"
                    src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt=""
                  />
                  <div className="card-profile-info" />
                  <h3 className="profile-name">{card.postedBy.name}</h3>
                  <p className="profile-followers">1.2k followers</p>
                </div> */}
              </div>
            </div>
          </Link>
        </div>
      </body>
    );
  };

  return <React.Fragment>{singleCard(card)}</React.Fragment>;
};

export default Card;
