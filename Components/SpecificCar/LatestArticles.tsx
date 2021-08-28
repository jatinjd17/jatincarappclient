import React from "react";

function LatestArticles({ OnlyName, articles }) {
  return (
    <div>
      <div className="mt-8">
        <div className="text-2xl font-bold mb-6">
          Latest Articles on {OnlyName}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 grid-rows-1 md:grid-rows-2 mr-28 md:mr-2 gap-3">
          <div className="flex flex-row md:flex-col border-2 p-3 bg-gray-200">
            <div className="h-auto w-52 md:w-auto">
              <img src={articles.article1[0]} />
            </div>
            <div className="flex flex-wrap ml-5 md:ml-1 md:mt-2">
              {articles.article1[1]}
            </div>
          </div>
          <div className="flex flex-row md:flex-col border-2 p-3 bg-gray-200">
            <div className="h-auto w-52 md:w-auto">
              <img src={articles.article2[0]} />
            </div>
            <div className="flex flex-wrap ml-5 md:ml-1 md:mt-2">
              {articles.article2[1]}
            </div>
          </div>
          <div className="flex flex-row md:flex-col border-2 p-3 bg-gray-200">
            <div className="h-auto w-52 md:w-auto">
              <img src={articles.article3[0]} />
            </div>
            <div className="flex flex-wrap ml-5 md:ml-1 md:mt-2">
              {articles.article3[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
