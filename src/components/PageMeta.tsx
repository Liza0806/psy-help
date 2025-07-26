import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description?: string;
  noindex?: boolean; // если true — добавит meta robots noindex
}

const PageMeta: FC<PageMetaProps> = ({ title, description, noindex = false }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default PageMeta;
