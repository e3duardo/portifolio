import React from 'react';

import Tag from '~/components/Tag';
import Experience from '~/components/Experience';

export default function Experi() {
  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">Experiences</Tag>
      </h3>
      <Experience
        company="Centro de Ensino Random"
        season="2019 - today"
        job="Computing instructor"
      >
        I started teaching, to pass some of my knowledge forward. Today I am
        teaching basic computer
      </Experience>
      <Experience
        company="Centro Universitário Redentor"
        season="2015 - today"
        job="Systems Analyst"
      >
        i started in centro universitário redentor as an it assistant in 2015.
        and in 2016, i migrated to the development area. as a systems analyst, i
        use java and java ee daily, and i also use a brazilian framework vraptor
        and jsp, hibernate, mysql. in the frontend, i generally use bootstrap,
        jquery, and various plugins. our main project is the institution's
        portal. i also make part of the development team of a web system for the
        small student hospital.
        <br />
        in addition to growing a lot as a web developer here, i was able to
        learn about devops, ci, data modeling, and mobile application
        development with phonegap.
      </Experience>
      <Experience
        company="ViewTech"
        season="2011 - 2015"
        job="Founding partner"
      >
        In 2014 I opened a computer store with my brother. We grew up very fast
        and gained a market share in our city. Next, I decided to leave the
        store to focus again on my development career.
      </Experience>
      <Experience company="Autonomous" season="2008 - today" job="Freelancer">
        I started as a freelancer in 2008, developing websites and systems using
        technologies like PHP and C#. Later, I continued with PHP (sometimes
        WordPress) and started using Ruby on Rails and Jekyll in some projects.
        By now, my focus is ReactJS development, generally in adjunct with
        NodeJs API.
        <br />
        In this walk, I learned a lot about website creation, website
        optimization, continuous integration and everything needed to create
        excellent websites easily and quickly.
      </Experience>
    </div>
  );
}
