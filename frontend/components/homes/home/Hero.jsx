"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://mindvally.akramtello.com/wp-json/wp/v2/pages?_fields=id,slug,title,acf&slug=home")
      .then((response) => response.json())
      .then((data) => {
        setData(data[0].acf);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return;
  }

  return (
    <div className="hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left animated">
                {data.hero_title_left}
              </h1>

              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                {data.hero_title_right}
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                {data.hero_text}
              </p>
              <div className="btn-group fade_right">
                <Link
                  scroll={false}
                  href={data.hero_btn.url}
                  className="btn wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">{data.hero_btn.title}</span>
                    <span className="effect-1">{data.hero_btn.title}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
    
          <div className="hero-year-tag wow img-custom-anim-left animated">
            <Image
              width={80}
              height={80}
              src="/assets/img/icon/watch.svg"
              alt="img"
            />
            <h6>Keep Up with Your Health</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

