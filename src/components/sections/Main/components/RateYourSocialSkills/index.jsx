import React from 'react'
import ImageOne from '../../../../../Images/images-1.jpg';
import ImageTwo from '../../../../../Images/images-2.jpg';

const RateYourSocialSkills = () => {
  return (
    <div className="w-7/8  h-full flex flex-col text-center px-16 py-16 bg-blue-50 rounded-3xl">
      <div className="text-xl my-4">{`Let your friends, family, and co-workers (anonymously) rate your social skills`}</div>
      <div className="text-5xl font-bold mb-4 ">Ever wondered what others think of you?</div>
      <div>
        <img src={ImageOne} alt="image-one" />
      </div>
      <div>
        <img src={ImageTwo} alt="image-two" />
      </div>
    </div>
  )
}

export default RateYourSocialSkills