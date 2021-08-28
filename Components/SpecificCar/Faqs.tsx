import React from "react";

function Faqs({ OnlyName, faqs }) {
  return (
    <div>
      <div className="mt-8">
        <div className="text-2xl font-bold mb-5">{OnlyName} FAQs</div>

        <div className="mr-40 md:mr-2">
          <div className="text-lg font-semibold">{faqs.question1[0]}</div>
          <div className="text-sm mb-4 ">{faqs.question1[1]}</div>
          <div className="text-lg font-semibold">{faqs.question2[0]}</div>
          <div className="text-sm mb-4 ">{faqs.question2[1]}</div>
          <div className="text-lg font-semibold">{faqs.question3[0]}</div>
          <div className="text-sm mb-4 ">{faqs.question3[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
