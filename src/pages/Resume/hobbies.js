import React from 'react';

import Tag from '~/components/Tag';
import HobbieList from '~/components/HobbieList';
import Hobbie from '~/components/Hobbie';

import code from '~/assets/laptop-code-duotone.svg';
import moto from '~/assets/motorcycle-duotone.svg';
import paw from '~/assets/paw-duotone.svg';

export default function Hobbies() {
  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">Hobies</Tag>
      </h3>
      <HobbieList>
        <Hobbie icon={moto}>Motorcycle</Hobbie>
        <Hobbie icon={paw}>Dog</Hobbie>
        <Hobbie icon={code}>Programming</Hobbie>
      </HobbieList>
    </div>
  );
}
