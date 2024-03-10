"use client";
import React, { useEffect, useState } from "react";

export default function FeatureAccordion() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("https://mindvally.akramtello.com/wp-json/wp/v2/features?_fields=acf,id,title&acf_format=standard")
      .then((response) => response.json())
      .then((data) => {
        setFeatures(data);
      })
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center ">
              <h2 className="sec-title"><span style={{fontSize: 20}}>ONE SWIPE AWAY</span> Everything you need</h2>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="accordion-area accordion" id="FeatureAccordion">
              {features.map((feature, i) => (
                <div key={feature.id} className="accordion-card active">
                  <div
                    className="accordion-header"
                    id={`collapse-item-${feature.id}`}
                  >
                    <button
                      className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${feature.id}`}
                      aria-expanded={i === 0}
                      aria-controls={`collapse-${feature.id}`}
                    >
                      <span className="feature-number">
                        {i.toString().length > 1 ? i : "0" + (i + 1)}
                      </span>{" "}
                      {feature.acf.title}
                    </button>
                  </div>
                  <div
                    id={`collapse-${feature.id}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    aria-labelledby={`collapse-item-${feature.id}`}
                    data-bs-parent="#FeatureAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text" dangerouslySetInnerHTML={{ __html: feature.acf.summary }}></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
