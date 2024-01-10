import Link from 'next/link';
import { footerData2 } from '~/shared/data/global.data';

const Footer2 = () => {
  const { links, socials } = footerData2;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="px-4 text-muted py-6 text-xs text-gray-700 dark:text-slate-400 md:flex md:items-center md:justify-between md:py-8">
      <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          
          <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
            {socials.map(({ label, icon: Icon, href }, index) => (
              <li key={`item-social-${index}`}>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label={label}
                  href={href}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mb-4 -ml-2 flex pl-2 md:order-1 md:mb-0">
          {links &&
            links.map(({ label, href }, index) => (
              <li key={`item-link-${index}`}>
                <Link
                  className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                  aria-label={label}
                  href={href as string}
                >
                  {label}
                </Link>
                {links.length - 1 !== index && <span className="mr-1"> · </span>}
              </li>
            ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Footer2;
