import React from 'react';

import Tag from '~/components/Tag';
import Experience from '~/components/Experience';

export default function About() {
  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">Education</Tag>
      </h3>
      <Experience
        company="Centro Universitário Redentor"
        season="2014 - 2020"
        job="Bachelor of Information Systems"
      />
    </div>
  );
}
