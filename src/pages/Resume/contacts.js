import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import Tag from '~/components/Tag';
import ContactList from '~/components/ContactList';
import Contact from '~/components/Contact';

import email from '~/assets/envelope-open-text-duotone.svg';
import linkedin from '~/assets/linkedin-brands.svg';
import github from '~/assets/github-square-brands.svg';

export default function Contacts({ className }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h3>
        <Tag tag="h3">{t("Contact")}</Tag>
      </h3>
      <ContactList>
        <Contact icon={email} link="mailto:e3duardo@gmail.com">
          e3duardo[a]gmail.com
        </Contact>
        <Contact icon={linkedin} link="https://www.linkedin.com/in/e3duardo/">
          linkedin.com/in/e3duardo/
        </Contact>
        <Contact icon={github} link="https://github.com/e3duardo">
          github.com/e3duardo
        </Contact>
      </ContactList>
    </div>
  );
}

Contacts.propTypes = {
  className: PropTypes.string,
};

Contacts.defaultProps = {
  className: '',
};
