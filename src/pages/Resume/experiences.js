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
        I started in Centro Universitário Redentor as an IT assistant in 2015.
        And in 2016, I migrated to the development area. As a Systems Analyst, I
        use Java and Java EE daily, and I also use a Brazilian framework VRaptor
        and JSP, Hibernate, MySQL. In the frontend, I generally use Bootstrap,
        JQuery, and various plugins. Our main project is the institution's
        portal. I also make part of the development team of a web system for the
        small student hospital.
        <br />
        <br />
        In addition to growing a lot as a web developer here, I was able to
        learn about DevOps, CI, Data Modeling, and mobile application
        development with PhoneGap.
      </Experience>
      <Experience company="Autonomous" season="2008 - today" job="Freelancer">
        I started as a freelancer in 2008, developing websites and systems using
        technologies like PHP and C#. Later, I continued with PHP (sometimes
        WordPress) and started using Ruby on Rails and Jekyll in some projects.
        By now, my focus is React development, generally in adjunct with NodeJs
        API.
        <br />
        <br />
        In this walk, I learned a lot about website creation, website
        optimization, continuous integration and everything needed to create
        excellent websites easily and quickly.
      </Experience>
    </div>
  );
}
