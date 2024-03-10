"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


export default function TeamDetails({ teamId }) {

  const [teamItem, setTeamItem] = useState(null);

  useEffect(() => {
    async function fetchTeamData() {
      try {
        const response = await fetch('https://mindvally.akramtello.com/wp-json/wp/v2/features?_fields=acf,id,title&acf_format=standard');
        const data = await response.json();
      
        const foundItem = data.find((item) => item.id === Number(teamId));
        setTeamItem(foundItem || data[0]); 
      } catch (error) {
        console.error("Failed to fetch team data:", error);
      }
    }

    fetchTeamData();
  }, [teamId]);

  if (!teamItem) {
    return; 
  }

  return (
    <div className="team-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="team-inner-thumb mb-lg-0 mb-40">
              <Image
                width={527}
                height={640}
                className="w-100"
                src={teamItem.acf.large_image}
                alt="team member image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-details-about-info mb-0">
              <h2 className="sec-title mb-3">{teamItem.title.rendered}</h2>
              <h4 className="team-desig">{teamItem.acf.title}</h4>
              <div className="sec-text mt-30" dangerouslySetInnerHTML={{ __html: teamItem.acf.summary }} />
              <div className="btn-group fade_right">
                <Link
                  scroll={false}
                  href="/"
                  className="btn wow img-custom-anim-left animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">ORDER NOW</span>
                    <span className="effect-1">ORDER NOW</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

