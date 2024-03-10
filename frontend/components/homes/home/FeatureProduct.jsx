"use client";
import { FeatureProductData } from "@/data/FeatureProduct";
import addGsap from "@/utils/addGsap";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useRef } from "react";

export default function FeatureProduct() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;


    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".filter-item",
      layoutMode: "masonry", 
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
 
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    initIsotop();
    addGsap();
  }, []);

  return (
    <div
      className="portfolio-area-1 space-bottom overflow-hidden background-image"
      style={{ backgroundImage: "url(/assets/img/bg/portfolio-1-bg.png)" }}
    >
      <div className="container">
        <div
          className="row  gy-60  justify-content-between masonary-active"
          ref={isotopContainer}
        >
          {FeatureProductData.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-6 filter-item">
              <div
                className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""}
                `}
              >
                <div
                  className="portfolio-thumb wow img-custom-anim-top animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <Link scroll={false} href={`/features`}>
                    <img src={elm.imageSrc} alt="portfolio" />
                  </Link>
                </div>
                <div className="portfolio-details">
                  
                  <h3 className="portfolio-title">
                    <Link scroll={false} href={`/features`}>
                      {elm.projectTitle}
                    </Link>
                  </h3>
                  <Link
                    scroll={false}
                    href={`/features`}
                    className="link-btn"
                  >
                    <span className="link-effect">
                      <span className="effect-1">VIEW ALL FEATURES</span>
                      <span className="effect-1">VIEW ALL FEATURES</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
