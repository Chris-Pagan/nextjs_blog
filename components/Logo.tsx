import Image from 'next/image';
import React from 'react'
import ArtLogo from "../assets/fallingstar.png"

const Logo = (props:any) => {
    const {renderDefault, title} = props;

  return (
    <div className='flex items-center space-x-2'>
        <Image
            className='rounded-full object-cover'
            height={50}
            width={50}
            src={ArtLogo}
            alt="logo"
        />
        {renderDefault  && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo