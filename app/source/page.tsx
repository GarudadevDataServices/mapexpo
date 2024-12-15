import { IconBrandGithub } from '@tabler/icons-react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'data source',
};

export default async function Home({}) {
  
  return (
    <section className="mx-4 md:mx-8 py-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg shadow-lg">
  <header className="text-center">
    <h1 className="md:mx-4 leading-tight font-heading mb-8 text-3xl font-extrabold tracking-tight text-blue-900">
      🔍 Data Source
    </h1>
  </header>
  <div className="md:mx-2 text-base font-mono">
    <div className="md:mx-4 text-lg font-semibold text-blue-900">
      📐 Shapefiles:
    </div>
    <div className="flex flex-col md:flex-row justify-center mt-4 text-sm">
      <div className="md:w-1/2 p-4">
        <p className="text-gray-700">
          🌟 The <span className="font-bold text-blue-900">INDIAN-SHAPEFILES</span> repository, available at 
          <a href="https://github.com/datta07/INDIAN-SHAPEFILES" className="font-semibold underline text-blue-600 hover:text-blue-800">
            🌐 GitHub Repository
          </a>, plays a pivotal role as a primary shapefile data source for our platform. 📊 Within this repository, we meticulously curate and contribute to a comprehensive collection of shapefiles, focusing on geographic features in India. 🗺️ This initiative serves as a foundational component for our mapping and data visualization services, providing users with access to accurate and up-to-date spatial data. By leveraging the INDIAN-SHAPEFILES repository, we empower our users to explore, analyze, and integrate geographical data seamlessly into their applications and projects showcased on our platform. 🚀
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-[90%] md:w-1/3 bg-white md:mx-16 cursor-pointer rounded-full mt-4 p-4 shadow-md">
        <IconBrandGithub className="md:w-1/2 w-1/3 h-1/2 text-gray-800"/>
        <span className="font-semibold text-gray-900">datta07/INDIAN-SHAPEFILES</span>
      </div>
    </div>

    <div className="md:mx-4 text-lg font-semibold mt-12 text-blue-900">
      📊 Statistical data:
    </div>
    <div className="md:mx-4 flex flex-row justify-center mt-4 text-sm">
      <div className="p-4  rounded-lg ">
        <p className="text-gray-800 ">
          🌟 Our platform relies on a robust foundation of authoritative data sources to enhance the quality and accuracy of the maps and visualizations we provide. 📊 These sources encompass authenticated data files procured directly from reputable government entities such as the 
          <span className="font-bold text-indigo-900"> NATIONAL FAMILY HEALTH SURVEY 5</span>, 
          <span className="font-bold text-indigo-900"> Election Commission</span>, 
          <span className="font-bold text-indigo-900"> Census Commission of India</span>, and other trusted government data repositories. 🗂️ By prioritizing the integration of authorized data sets, we ensure our users have access to reliable and up-to-date information on various aspects of Indian demographics, elections, and socio-economic indicators. 🌐 Through the thoughtful selection and incorporation of diverse authorized data sources, we strive to offer a comprehensive and credible mapping experience that caters to a wide range of interests and analytical requirements. 📈
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
