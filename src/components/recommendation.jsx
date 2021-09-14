import React from "react";

export default function Recommendation({ recommendations }) {
  return (
    <div className="bg pb-5">
      <div className="container width2">
        <h2 className="text-center py-5">Recommendations</h2>
        {recommendations.map((item, i) => {
          return (
            <>
              <div key={i} className="bg-white shadow-lg row text-left mb-5">
                <div className="col-md-6 p-5">
                  <h4 className="text-primary pb-4">{item.name}</h4>
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.phone}</p>
                  <p>{item.mail}</p>
                </div>
                <div className="col-md-6 p-0 p-md-5">
                  <video width="100%" controls>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
