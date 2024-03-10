"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Understand your cycle like never before.",
      icon: "fas fa-star-of-life",
    },
    {
      id: 2,
      href: "#",
      text: "Measure your blood oxygen. ",
      icon: "fas fa-star-of-life",
    },
    {
      id: 3,
      href: "#",
      text: "Watches out for your heart.",
      icon: "fas fa-star-of-life",
    },
    {
      id: 4,
      href: "#",
      text: "Everything at the speed of life.",
      icon: "fas fa-star-of-life",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
