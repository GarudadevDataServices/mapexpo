import { IconBrandGithub } from '@tabler/icons-react';
import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'data source',
};

export default async function Home({}) {
  const posts = await findLatestPosts();
  return (
    <section className="mx-4 md:mx-8 py-4">
      <header>
        <h1 className="md:mx-4 leading-tighter font-heading mb-8 text-start text-2xl font-bold tracking-tighter md:mb-6">
          Data Source
        </h1>
      </header>
      <div className="md:mx-2 text-base font-mono">
        <div className="md:mx-4 text-lg font-semibold">
            Shapefiles :
        </div>
        <div className='flex flex-col md:flex-row justify-center mt-4 text-sm'>
            <div className='md:w-1/2'>
                The INDIAN-SHAPEFILES repository, available at <a href='https://github.com/datta07/INDIAN-SHAPEFILES' className=' underline'>https://github.com/datta07/INDIAN-SHAPEFILES</a>, plays a pivotal role as a primary shapefile data source for our platform. Within this repository, we meticulously curate and contribute to a comprehensive collection of shapefiles, specifically focusing on geographic features in India. This initiative serves as a foundational component for our mapping and data visualization services, providing users on our platform with access to accurate and up-to-date spatial data. Our commitment involves the consistent maintenance and expansion of this repository, ensuring that it remains a reliable and valuable resource for geospatial information. By leveraging the INDIAN-SHAPEFILES repository, we empower our users to explore, analyze, and integrate geographical data seamlessly into their applications and projects showcased on our platform.
            </div>
            <div className='flex flex-col items-center justify-center w-[90%] md:w-1/3 bg-white md:mx-16 cursor-pointer rounded-full mt-4'>
                <IconBrandGithub className='md:w-1/2 w-1/3 h-1/2'/>
                datta07/INDIAN-SHAPEFILES
            </div>
        </div>
        
        <div className="md:mx-4 text-lg font-semibold mt-12">
          Statistical data :
        </div>
        <div className='md:mx-4 flex flex-row justify-center mt-4 text-sm'>
            <div>
              Our platform, relies on a robust foundation of authoritative data sources to enhance the quality and accuracy of the maps and visualizations we provide. These sources encompass authenticated data files procured directly from reputable government entities such as the NATIONAL FAMILY HEALTH SURVEY 5, Election Commission, Census Commission of India, and other trusted government data repositories. By prioritizing the integration of authorized data sets, we ensure that our users have access to reliable and up-to-date information on various aspects of Indian demographics, elections, and socio-economic indicators. This commitment to using verified government data underscores our dedication to delivering trustworthy and valuable insights through our mapping platform. Through the thoughtful selection and incorporation of diverse authorized data sources, we strive to offer users a comprehensive and credible mapping experience that caters to a wide range of interests and analytical requirements.
            </div>
        </div>

      </div>
    </section>
  );
}
