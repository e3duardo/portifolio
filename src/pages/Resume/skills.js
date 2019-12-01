import React from 'react';

import Tag from '~/components/Tag';
import Progress from '~/components/Progress';
import ProgressLegend from '~/components/ProgressLegend';

export default function Skills() {
  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">Skills</Tag>
      </h3>
      <Progress tick={94}>HTML</Progress>
      <Progress tick={90}>CSS</Progress>
      <Progress tick={69}>ES6</Progress>
      <Progress tick={55}>React</Progress>
      <Progress tick={85}>Java</Progress>
      <Progress tick={75}>Hibernate</Progress>
      <Progress tick={5}>Clojure</Progress>
      <ProgressLegend />
    </div>
  );
}
