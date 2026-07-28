
import ProfileHat from '@/assets/gothic-header.jpg'
import Avatar from '@/assets/avatar.jpg'

import ButtonTransp from '@/components/buttons/ButtonTransp'

export default function ProfileHero(){


    return <div className='relative w-full h-48"'>

        <img
          className=" w-full max-h-48 object-cover rounded-r-2xl"
          src={ProfileHat}
          alt=""
        />

          <div className="absolute right-6 top-6 flex items-center gap-3">
         <ButtonTransp value="Edit profile"/>
         <ButtonTransp value="..."/>
        </div>

        <img
          className="absolute -bottom-28 left-16 size-48 rounded-full  object-cover"
          src={Avatar}
          alt="Profile avatar"
    />

 </div>
}