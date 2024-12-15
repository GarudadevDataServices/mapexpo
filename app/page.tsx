"use client";

// import type { Metadata } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { convertApiToPageData } from 'apis/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { IconInfoCircle } from '@tabler/icons-react';
import Popup from 'reactjs-popup';
import { PageData, PageObject } from 'models/page_objects';


// import { SITE } from '~/config.js';

// export const metadata: Metadata = {
//   title: SITE.title,
// };

export default function Page() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  // const [paramLoaded,setLoadedParams] = useState<String[]>([]);

  const paramLoaded = useRef<String[]>([]);
  const searchParams = useSearchParams();

  
  const loadInitialData = useCallback((_path:String,paramAlreadyLoaded:boolean)=>{   
    // if (pageData!=null){
      setPageData(null);
    // }
    convertApiToPageData(_path,paramAlreadyLoaded).then(
      (data) => setPageData(data)
    )
  },[]);

  useEffect(() => {
    const path = searchParams.get('page') ?? 'home';
    console.log(`Getting data for ${path}`)
    const paramAlreadyLoaded = paramLoaded.current.some((param)=> param===path);
    if (!paramAlreadyLoaded){
      paramLoaded.current=[...paramLoaded.current,path];
    }
    loadInitialData(path,paramAlreadyLoaded);
  }, [loadInitialData, searchParams]);

  return (
    <div className='h-full'>
      {pageData?.title && <div className='flex ml-4 md:ml-8 mt-4 text-xl font-bold items-center'>
        <span className="capitalize font-semibold text-gray-800">
        🗺️ {pageData.title?.replace(/-/g, ' ')} 
        </span>
        {pageData.icon && (
          <Popup
            trigger={(open) => <IconInfoCircle className="ml-2 cursor-pointer" />}
            on={['hover', 'focus']}
            arrowStyle={{ color: 'rgb(255,255,255,1)' }}
            contentStyle={{
              background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)',
              color: 'black',
              borderColor: '#fff',
              borderRadius: '0.25rem',
              maxWidth: '400px',
              padding: '16px',
              border: '1px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            overlayStyle={{ color: 'rgba(0,0,0,0.5)' }}
          >
            <div className="text-xs">{pageData.icon}</div>
          </Popup>
          
        )}
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

const getAltImgLink = (imageLink: string): string|null => {

  const githubRawRegex = /^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/(.+)$/;
  const githubRawMatch = imageLink.match(githubRawRegex);

  if (githubRawMatch) {
    const [, owner, repo, filePath] = githubRawMatch;
    return `https://${owner}.github.io/${repo}/${filePath}`;
  } else {
    const githubPageRegex = /^https:\/\/([^/]+)\.github\.io\/([^/]+)\/(.+)$/;
    const githubPageMatch = imageLink.match(githubPageRegex);

    if (githubPageMatch) {
      const [, owner, repo, filePath] = githubPageMatch;
      return `https://raw.githubusercontent.com/${owner}/${repo}/master/${filePath}`;
    }
  }

  // If the input doesn't match either pattern, return the input itself
  return null;
};


function DoubleCard(props: { page: PageObject }) {
  const page = props.page;
  const altImg =getAltImgLink(page.img);
  const href = (page.type === 'page') ? { pathname: '/', query: { page: page.id } } : { pathname: 'https://garudadevdataservices.github.io/map', query: { map: page.id } }
  return <div className='w-full md:w-1/2 lg:w-2/3 pr-4 pb-4'>
    <Link href={href}
      key={page.id} title={page.title} className='w-full bg-gradient-to-r from-sky-50 to-white cursor-pointer flex flex-col lg:flex-row justify-center items-center border shadow-lg rounded-md lg:rounded-xl  mx-auto transition-all duration-100 ease-in h-56 font-medium overflow-hidden  border-gray-300 hover:shadow-xl'>
      <picture className='relative lg:w-2/3 w-full flex justify-center'>
      {(page.type=='page') && <div className='mt-1 lg:mt-0 rounded-3xl text-white px-2 flex absolute top-0 right-2 text-[14px] font-mono bg-black/[0.5]'> 🗺️ Map Collection</div>}
        <img src={page.img} alt={altImg?altImg:page.title} className=' h-48 object-cover'/>
        {/* <div className=' absolute top-[50%] right-[25%] text-base font-serif font-semibold text-red-600'>ELECTIONS</div> */}
        {page.tag && tag(page.tag,true)}
      </picture>
      <div className='h-full bg-late-200 rounded-xl flex flex-1 justify-center items-center whitespace-nowrap lg:whitespace-normal w-full lg:w-1/3 px-2 '>
        <div className='w-full text-center text-ellipsis overflow-hidden text-md'>{page.title}</div>
      </div>
    </Link></div>
}


function NormalCard(props: { page: PageObject }) {
  const page = props.page;
  const altImg =getAltImgLink(page.img);
  const href = (page.type === 'page') ? { pathname: '/', query: { page: page.id } } : { pathname: 'https://garudadevdataservices.github.io/map', query: { map: page.id } }
  return <div className='w-full md:w-1/2 lg:w-1/3 pr-4 pb-4'>
    <Link href={href}
      key={page.id} title={page.title} className='bg-gradient-to-b from-sky-50 to-white cursor-pointer shadow-lg rounded-2xl overflow-hidden transition-all duration-100 ease-in h-56 flex flex-col justify-center items-center border border-gray-300 hover:shadow-xl'>
      <picture className='relative w-full flex justify-center'>
        {(page.type=='page') && <div className=' rounded-full text-white px-2 flex absolute top-2 right-2 text-[14px] font-mono bg-black/[0.5]'>Map Collection 🗺️</div>}
        <img src={page.img} alt={altImg?altImg:page.title} className=' h-48 object-cover' />
        {page.tag && tag(page.tag)}
      </picture>
      <div className=' bg-sate-200 rounded-b-2xl flex flex-1 justify-center items-center  w-full whitespace-nowrap px-4 py-2 '>
        <div className='w-full text-center text-ellipsis overflow-hidden text-sm font-medium'>{page.title}</div>
      </div>
    </Link></div>
}

function tag(_tag: string, isRounded?: boolean) {
  const isRoundedClass = isRounded ? 'rounded-2xl' : 'rounded-l-2xl';
  switch (_tag) {
    case "politics":
      return (
        <div className={isRoundedClass + " bg-[#fb9426] px-2 py-1 flex absolute items-center gap-2 bottom-0 right-0 text-xs font-sans font-semibold text-white shadow-lg"}>
          <div>🏛️ ELECTIONS</div>
        </div>
      );
    case "religion":
      return (
        <div className={isRoundedClass + " bg-[#FF5733] px-2 py-1 flex absolute items-center gap-1 bottom-0 right-0 text-xs font-sans font-semibold text-[#fff] shadow-lg"}>
          <div>☸️ RELIGION</div>
        </div>
      );
    case "language":
      return (
        <div className={isRoundedClass + " bg-[#4CAF50] px-2 py-1 flex absolute items-center gap-1 bottom-0 right-0 text-xs font-sans font-semibold text-[#fff] shadow-lg"}>
          <div> 🗣️ LANGUAGE</div>
        </div>
      );
    default:
      return (
        <div className={isRoundedClass + " pr-3 pt-1 px-2  bg-[#455A64] py-1 flex absolute items-center gap-1 bottom-0 right-0 text-xs font-sans font-semibold text-[#fff] shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]"}>
          <div>{_tag}</div>
        </div>
      );
  }
}

