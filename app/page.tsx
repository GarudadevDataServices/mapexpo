"use client";

// import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { convertApiToPageData } from 'apis/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { IconInfoCircle } from '@tabler/icons-react';
import Popup from 'reactjs-popup';
import Elections from 'public/images/elections.png';
import Religion from 'public/images/religion.png';
import Language from 'public/images/languages.png';
import Image from 'next/image';
import { PageData, PageObject } from 'models/page_objects';


// import { SITE } from '~/config.js';

// export const metadata: Metadata = {
//   title: SITE.title,
// };

export default function Page() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setPageData(null);
    const path = searchParams.get('page') ?? 'home';
    console.log(`Getting data for ${path}`)
    convertApiToPageData(path).then(
      (data) => setPageData(data)
    )
  }, [searchParams]);

  return (
    <div className='h-full'>
      {pageData?.title && <div className='flex ml-4 md:ml-8 mt-4 text-xl font-bold items-center'>
        {pageData.title}
        {pageData.icon && <Popup
          trigger={open => (
            <IconInfoCircle className='ml-2 cursor-pointer' />
          )}

          on={['hover', 'focus']}
          arrowStyle={{ color: 'rgb(255,255,255,1)' }}
          contentStyle={{
            background: 'rgb(255,255,255,1)', color: 'black', borderColor: '#fff', borderRadius: '0.25rem',
            maxWidth: '400px', paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px',
            border: '1px'
          }}
          overlayStyle={{ color: 'rgba(0,0,0,0.5)' }}
        >
          <div className='text-xs '> {pageData.icon} </div>
        </Popup>}
      </div>}
      <div className='ml-4 md:ml-8 mt-4 '>
        {
          (pageData === null) ?
            <div className='flex h-[50vh] justify-center items-center'><ClipLoader color='red'
            /></div> :
            <div className='flex flex-wrap'>{
              pageData.Objects.map(
                (page, index) => (index != 0) ? <NormalCard key={page.id} page={page} /> : <DoubleCard key={page.id} page={page} />
              )
            }</div>
        }
      </div>
    </div>
  );
}

function DoubleCard(props: { page: PageObject }) {
  const page = props.page;
  const href = (page.type === 'page') ? { pathname: '/', query: { page: page.id } } : { pathname: 'https://garudadevdataservices.github.io/map', query: { map: page.id } }
  return <div className='w-full md:w-1/2 lg:w-2/3 pr-4 pb-4'>
    <Link href={href}
      key={page.id} title={page.title} className='w-full bg-white cursor-pointer flex flex-col lg:flex-row justify-center items-center border shadow-lg rounded-md lg:rounded-xl  mx-auto transition-all duration-100 ease-in h-56 font-medium overflow-hidden'>
      <picture className='relative lg:w-2/3 w-full flex justify-center'>
      {(page.type=='page') && <div className='mt-1 lg:mt-0 rounded-3xl text-white px-2 flex absolute top-0 right-2 text-[14px] font-mono bg-black/[0.5]'>Map Collection</div>}
        <img src={page.img} alt={page.title} className=' h-48 object-cover'/>
        {/* <div className=' absolute top-[50%] right-[25%] text-base font-serif font-semibold text-red-600'>ELECTIONS</div> */}
        {page.tag && tag(page.tag)}
      </picture>
      <div className='h-full bg-teal-50 rounded-xl flex flex-1 justify-center items-center whitespace-nowrap lg:whitespace-normal w-full lg:w-1/3 px-2 '>
        <div className='w-full text-center text-ellipsis overflow-hidden text-md'>{page.title}</div>
      </div>
    </Link></div>
}


function NormalCard(props: { page: PageObject }) {
  const page = props.page;
  const href = (page.type === 'page') ? { pathname: '/', query: { page: page.id } } : { pathname: 'https://garudadevdataservices.github.io/map', query: { map: page.id } }
  return <div className='w-full md:w-1/2 lg:w-1/3 pr-4 pb-4'>
    <Link href={href}
      key={page.id} title={page.title} className='bg-white cursor-pointer  flex flex-col justify-center items-center border shadow-lg rounded-md  mx-auto transition-all duration-100 ease-in h-56 overflow-hidden font-medium'>
      <picture className='relative w-full text-center flex justify-center'>
        {(page.type=='page') && <div className=' rounded-3xl text-white px-2 flex absolute top-0 right-2 text-[14px] font-mono bg-black/[0.5] my-1'>Map Collection</div>}
        <img src={page.img} alt={page.title} className=' h-48 object-cover' />
        {/* <div className=' absolute top-[50%] right-[25%] text-base font-serif font-semibold text-red-600'>ELECTIONS</div> */}
        {page.tag && tag(page.tag)}
      </picture>
      <div className=' bg-teal-50 rounded-md flex flex-1 justify-center items-center  w-full whitespace-nowrap px-2 '>
        <div className='w-full text-center text-ellipsis overflow-hidden text-sm'>{page.title}</div>
      </div>
    </Link></div>
}

function tag(_tag:string) {
  switch(_tag){
    case "politics":
      return <div className=' rounded-l-2xl border border-black bg-white pl-2 flex absolute items-end gap-2 bottom-0 right-0 text-base font-serif font-bold'>
        <div className='pb-1'>ELECTIONS</div>
        <Image src={Elections} alt={''} className='w-10 h-10' />
      </div>
    case "religion":
      return <div className=' rounded-l-2xl border border-black bg-white pl-2 flex absolute items-end gap-1 bottom-0 right-0 text-base font-serif font-bold'>
        <div className='pb-1'>RELIGION</div>
        <Image src={Religion} alt={''} className='w-10 h-10' />
      </div>
    case "language":
      return <div className=' rounded-l-2xl border border-black bg-white pl-2 flex absolute items-end gap-1 bottom-0 right-0 text-base font-serif font-bold'>
        <div className='pb-1'>LANGUAGE</div>
        <Image src={Language} alt={''} className='w-10 h-10' />
      </div>
    default:
      return <div className='pr-3 pt-1 px-2 rounded-l-2xl border border-black bg-white pl-2 flex absolute items-end gap-1 bottom-0 right-0 text-base font-serif font-bold'>
        <div className='pb-1'>{_tag}</div>
      </div>
  }
  
}