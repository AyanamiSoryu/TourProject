import React from 'react';

import DownloadIcon from '../Icon/downloadIcon.svg';
import classNames from './LinkComponent.modules.scss';

type ButtonLink = {
  href: string;
};
type ButtonDownloadLink = ButtonLink & {
  downloadName: string;
};

export type SquareButtonProps = {
  icon: React.ReactNode;
  tagClassName?: string;
  id?: string;
  selected?: boolean;
  onHover?: Function;
} & (ButtonLink | ButtonDownloadLink | {});

const SquareButton: React.FC<SquareButtonProps> = (props) => {
  const { icon: imgSvg, tagClassName: tagClass } = props;
  const isLink = 'href' in props;
  const isDownload = 'downloadName' in props;

  const Tag = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: props.href, target: '_blank' } : {};
  const downloadProps = isDownload ? { download: props.downloadName } : {};
  const additionalProps = { ...linkProps, ...downloadProps };
  if (tagClass) {
    console.log('WWOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWW');
  }
  const ifClassExist = tagClass === 'true' ? classNames.focused : classNames.root;
  return (
    <Tag className={ifClassExist} {...additionalProps}>
      {isDownload && (
        <div className={classNames.downloadIcon}>
          <DownloadIcon />
        </div>
      )}
      {imgSvg}
    </Tag>
  );
};

export default SquareButton;

// <SquareButton icon={<ProfileIcon />} />;
// <SquareButton icon={<img />} />;
