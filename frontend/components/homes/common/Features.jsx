"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Team() {
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
    <div className="Feature-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <h2 className="sec-title">Keep Up with Your Health</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {features.slice(0, 4).map((feature, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="Feature-card">
                <div className="Feature-card_img">
                  <Image
                    width={306}
                    height={380}
                    src={feature.acf.large_image}
                    alt={feature.title.rendered}
                    loading="lazy" 
                  />
                </div>
                <div className="Feature-card_content">
                  <h3 className="Feature-card_title">
                    <Link scroll={false} href={`/feature-details/${feature.id}`}>
                      {feature.title.rendered}
                    </Link>
                  </h3>
                  <span className="Feature-card_desig">{feature.acf.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
