import React from 'react';

import Tag from '~/components/Tag';
import Language from '~/components/Language';

export default function Languages() {
  return (
    <div>
      <h3 className="mt-3">
        <Tag tag="h3">Languages</Tag>
      </h3>
      <Language star={5}>Portuguese </Language>
      <Language star={3}>English </Language>
    </div>
  );
}
