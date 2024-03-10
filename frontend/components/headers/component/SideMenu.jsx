"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <h2 className="text-white">Lifespan Tracker</h2>
              </Link>
            </div>
            <p className="about-text">
                Lifespan Tracker, a revolutionary wearable device that empowers individuals to
                monitor their health and live healthier lives.
            </p>
            <div className="sidebar-wrap">
              <h6>Menara Uoa Bangsar, 5, Jalan Bangsar Utama 1, Bangsar,</h6>
              <h6>Kuala Lumpur, MY</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:60182390395">+60 182 390 395</a>
              </h6>
              <h6>
                <a href="mailto:support@lifespan.com">support@lifespan.com</a>
              </h6>
            </div>
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="/fearures"
            className="chat-btn gsap-magnetic"
          >
            See All Features
          </Link>
        </div>
      </div>
    </div>
  );
}
