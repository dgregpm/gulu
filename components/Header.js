import React from 'react';
import Image from 'next/image';
import logo from './../gulu-logo.png'
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon, 
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
 } from '@heroicons/react/outline';


function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
          <HeaderItem title='SEARCH' Icon={SearchIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <div className="mx-10 min-w-fit">
        <Image
          className="object-contain"
          src={logo} 
          width={100} 
          height={100}
        />
        </div>
    </header>
  );
}
// "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"

export default Header