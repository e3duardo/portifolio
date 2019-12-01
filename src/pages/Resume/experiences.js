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
        company="centro universitário redentor"
        season="2015 - today"
        job="Systems Analyst"
      >
        I started here as an IT assistant and in 2016 I migrated to the
        development area. As a systems analyst. I use Java and Java EE daily,
        our projects are developed using VRaptor, JSP, Hibernate, MySql and for
        frontend, we use Bootstrap, JQuery, and various plugins. Our main
        project is the institution&apos;s portal, which uses the technologies
        above, as well as other projects with the same stack.
        <br />
        <br />
        In addition to growing a lot as a web developer here, I was able to
        learn about DevOps, data modeling, and mobile application development
        with PhoneGap.
      </Experience>
      <Experience company="own" season="2008 - today" job="Freelancer">
        I started freelancing in 2008 developing websites and systems using
        technologies like PHP and C #. Later I continued with PHP (sometimes
        WordPress) and started using Ruby on Rails and Jekyll in some projects.
        I am currently focused on React development.
        <br />
        <br />
        In this walk, I learned a lot about website creation, website
        optimization, continuous integration and everything needed to create on
        the web easily and quickly.
      </Experience>
    </div>
  );
}
