import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';


interface Link {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: Icon;
}


interface MenuLink extends Link {
  links?: Array<Link>;
}

interface AnnouncementProps {
  title: string;
  callToAction?: CallToAction;
  callToAction2?: CallToAction;
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

// WIDGETS

interface HeaderProps {
  links?: Array<MenuLink>;
  actions?: Array<CallToAction>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
}


interface FooterProps {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  socials: Array<Link>;
  footNote?: string | ReactElement;
  theme?: string;
}