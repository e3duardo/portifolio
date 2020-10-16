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
        company="Centro Universitário Redentor"
        season="Jun 2020 - today"
        job="Software Architect"
      />
      <Experience
        company="Deep Consulting Solutions"
        season="Mar 2020 - Jun 2020"
        job="Software Engineer"
      />
      <Experience
        company="Centro de Ensino Random"
        season="Oct 2019 - May 2020"
        job="Computing instructor"
      >
        I started teaching to pass some of my knowledge forward. Today I&apos;m
        teaching basic computer
      </Experience>
      <Experience
        company="Centro Universitário Redentor"
        season="Mar 2015 - Mar 2020"
        job="Systems Analyst"
      >
        I started in Centro Universitário Redentor as an IT assistant in 2015
        and the following year, I migrated to the development area as a systems
        analyst. I have been using Java and Java EE on a daily basis.
        Additionally, I use a brazilian framework vraptor and jsp, hibernate,
        and mysql. in the front-end, i generally use bootstrap, jquery, and
        various plugins. Our main project is the institution&apos;s portal. I
        also form part of the development team for the web system for the
        university clinic.
        <br />
        In addition to growing significantly as a web developer, I have been
        learning about devops, ci, data modeling, and mobile application
        development with phonegap.
      </Experience>
      <Experience
        company="ViewTech"
        season="Jun 2011 - Dec 2015"
        job="Founding partner"
      >
        In 2011 I opened a computer store with my brother. We grew very fast and
        gained a market share in our city. Next, I decided to leave the store to
        focus again on my development career.
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
