import React from "react";
import { useTranslation } from "react-i18next";

import Tag from "components/Tag";
import ContactList from "components/ContactList";
import Contact from "components/Contact";

import assets from "assets";

interface ContactsProps {
  className?: string;
}

function Contacts({ className }: ContactsProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h3>
        <Tag tag="h3">{t("Contact")}</Tag>
      </h3>
      <ContactList>
        <Contact
          icon={assets.duotone.envelopeOpenText}
          link="mailto:e3duardo@gmail.com"
        >
          e3duardo[a]gmail.com
        </Contact>
        <Contact
          icon={assets.brands.linkedin}
          link="https://www.linkedin.com/in/e3duardo/"
        >
          linkedin.com/in/e3duardo/
        </Contact>
        <Contact
          icon={assets.brands.githubSquare}
          link="https://github.com/e3duardo"
        >
          github.com/e3duardo
        </Contact>
      </ContactList>
    </div>
  );
}

Contacts.defaultProps = {
  className: "",
};

export default Contacts;
