import React from 'react';

import Tag from '~/components/Tag';

export default function Contact() {
  return (
    <div>
      <h3>
        <Tag tag="h3">Contact</Tag>
      </h3>
      <p>
        please contact me at{' '}
        <a href="mail:e3duardo@gmail.com">e3duardo[a]gmail.com</a>
      </p>
    </div>
  );
}
