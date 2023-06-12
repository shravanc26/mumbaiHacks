import React, { useState } from 'react'
import PastSearch from './pastSearch'
import { useRouter } from 'next/router';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [onFocused, setOnFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formSubmit = () => {
    event.preventDefault();
    console.log(searchText);
    router.push({
      pathname: '/chat',
      query: {text:searchText, },
  });
  }
  return (
    <div>
      <form className="px-4" onSubmit={formSubmit} >
        <div className="relative shadow-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Quick Search"
            className="w-[25vw] h-16 text-lg py-3 pl-12 pr-4 rounded-md outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={(e) => { setOnFocused(true); setLoading(true) }}
            onBlur={(e) => setOnFocused(false)}
          />
        </div>
      </form>
      {
        loading
          ? <div class="backdrop-filter backdrop-blur-md backdrop-opacity-95 bg-white/30 fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary flex flex-col items-center justify-center">
            <div className='absolute top-64'>
              <form className="px-4" onSubmit={formSubmit} >
                <div className="relative shadow-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Quick Search"
                    className="w-[40vw] h-16 text-lg py-3 pl-12 pr-4 rounded-md outline-none"
                    value={searchText}
                    autoFocus={true}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={(e) => { setOnFocused(true); }}
                    onBlur={(e) => { setOnFocused(false); setLoading(false) }}
                  />
                </div>
              </form>
              {
                onFocused
                  ? <PastSearch />
                  : null
              }
            </div>
          </div>
          : null}
    </div>
  )
}
