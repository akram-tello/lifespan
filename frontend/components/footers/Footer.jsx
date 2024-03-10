"use client";
import React, { useEffect, useState } from "react";
import Socials from "./component/Socials";
import Link from "next/link";
import FooterLinks1 from "./component/FooterLinks1";
import FooterLinks2 from "./component/FooterLinks2";

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("https://mindvally.akramtello.com/wp-json/wp/v2/pages?_fields=id,slug,title,acf&slug=home&acf_format=standard")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setFooterData(data[0].acf);
        }
      })
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  if (!footerData) {
    return <div>Loading footer...</div>;
  }

  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-top space">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">{footerData["footer-title"]}</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">{footerData["footer-text"]}</p>
                <Link scroll={false} href={footerData.footer_link.url} className="btn">
                  <span className="link-effect">
                    <span className="effect-1">{footerData.footer_link.title}</span>
                    <span className="effect-1">{footerData.footer_link.title}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                <FooterLinks1 />
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                <FooterLinks2 />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-lg-end">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                  Life Labyrinth
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
