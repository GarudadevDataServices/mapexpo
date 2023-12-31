import Image from 'next/image';
import AppLogo from '~/assets/icons/logo.ico';

const Logo = () => (
  <span className="md:ml-2 gap-[3px] flex items-center self-center whitespace-nowrap text-xl font-bold text-gray-900 dark:text-white md:text-base">
    <Image
      src={AppLogo.src}
      alt={'Logo'}
      height={40}
      width={40}
      className='-mb-[3px]'
    />
    MapExpo
  </span>
);

export default Logo;
