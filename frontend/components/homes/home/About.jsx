"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://mindvally.akramtello.com/wp-json/wp/v2/pages?_fields=id,slug,title,acf&slug=home&acf_format=standard")
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
    <div className="about-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated"
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          visibility: "visible",
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
      >

        <Image
          width={838}
          height={730}
          src={data.about_image.url}
          alt="img"
          loading="lazy" 
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap">
                <div className="title-area mb-0">
                  <h2 className="sec-title">
                    {data.about_title}
                  </h2>
                  <p className="sec-text mt-35">
                  {data.about_text.replace(/<[^>]*>?/gm, '')}
                  </p>
                  <div className="btn-wrap mt-50">
                    <Link scroll={false} href={data.about_btn.url} className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">{data.about_btn.title}</span>
                        <span className="effect-1">{data.about_btn.title}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
