import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'

const SinglePost = () => {
  return (
    <div className='flex flex-col gap-8 mt-12 '>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
        <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Meghamalai: Whispers of the Clouds, Secrets of the Hills </h1>
        <div className='flex items-center gap-2 text-sm'>
          <span >Written by</span>
          <Link className='text-blue-500'>Savannah</Link>
          <span >on</span>
          <Link className='text-blue-500'>Travel</Link>
          <span className='font-light'>10 hours ago</span>
        </div>
        <p>Meghamalai, translating to "Mountain of Clouds," is a hidden gem tucked away in the Western Ghats of 
          Tamil Nadu, India. Far from the bustling tourist trails, this serene hill station offers a tranquil 
          escape into nature's embrace. If you're yearning for
           misty landscapes, lush tea plantations, and the symphony of birdsong, Meghamalai is your answer.</p>
        </div>
        <div className='lg:block hidden w-2/5'> 
          <Image 
          src="nature.webp"
          className='rounded-xl'
          w="600"
          />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* text */}
        <div className='flex flex-col gap-6 lg:text-lg text-justify lg:w-3/4' >
          <p>As you journey towards this slice of heaven, the air grows crisp, and the landscape transforms into a tapestry of rolling hills draped in emerald green. The region's name itself, meaning "cloud mountain," hints at the ethereal beauty that awaits, where misty veils often shroud the peaks, creating an enchanting atmosphere. The journey, especially by personal vehicle, allows for immersive experiences, stopping at scenic viewpoints that reveal panoramic vistas.
          </p>
          <p>
          While buses connect Theni and Chinnamanur to Megamalai, the freedom of a personal vehicle allows for a more personalized exploration of the winding mountain roads. Accommodation options range from government guest houses to private lodges, and even camping for the adventurous, ensuring a peaceful retreat from the urban clamor.Within Megamalai's verdant expanse, a wealth of natural wonders awaits discovery. The Megamalai Wildlife Sanctuary, a sanctuary of biodiversity, shelters elephants, tigers, and a myriad of other creatures, offering thrilling safari experiences. Vellavi Falls, cascading amidst dense foliage, provides a refreshing respite, its waters invigorating the senses. The Iravangalar Dam, with its serene waters reflecting the surrounding hills, invites quiet contemplation, while boat rides offer a unique perspective of the landscape.
          </p>
          <p>
          The iconic tea plantations, stretching as far as the eye can see, create a mesmerizing tapestry of green, their manicured slopes a testament to human harmony with nature. From Maharaja Mettu, the highest point, panoramic views unfold, revealing the grandeur of the Western Ghats, particularly captivating during sunrise and sunset. Trekking, birdwatching, and nature walks offer further opportunities to connect with the region's untamed beauty.
          </p>
          <p>
          To fully appreciate Megamalai's charm, a few practical considerations are essential. The optimal time to visit is between October and May, when the weather is at its most pleasant. Packing warm clothing, rain gear, and sturdy footwear is crucial for navigating the mountain terrain. When exploring the wildlife sanctuary, adhere to the forest department's guidelines to ensure safety and respect for the natural habitat. Supporting local communities by purchasing tea and local products is a way to contribute to sustainable tourism.
          Minimizing plastic waste and respecting the local culture are vital for preserving the region's pristine beauty. Booking accommodations in advance, especially during peak season, is advisable. Finally, savoring the local cuisine adds another layer to the Megamalai experience, offering a taste of the region's culinary heritage. Megamalai is a destination that soothes the soul, a place where nature's symphony plays on, leaving lasting impressions on all who venture into its embrace.
          </p>

      </div>
       {/* menu */}
       <div className='px-4 h-max sticky top-8 lg:w-1/4'>
        <h1>Author</h1>
        <div>
          <Image
          src="author.jpg"
          className='rounded-full object-cover w-12 h-12'
          w="48"
          h="48"
          /> 
          <Link>Savannah</Link>
          <p>This my second blog on Megamala, </p>
          <div className="flex gap-2">
            <Link>
            <Image
            src="facebook.svg"
            />
            <Link>
            <Image
            src="instagram.svg"
            />
            </Link>
            </Link>
          </div>
        </div>
        {/* post menu actions */}
       <PostMenuActions />
       <h1>Categories</h1>
       <div className='flex flex-col gap-2 text-sm'>
        <Link className='underline'>All</Link>
        <Link to="/" className='underline'>Fashion</Link>
        <Link to="/" className='underline'>Lifestyle</Link>
        <Link to="/" className='underline'>Travel</Link>
        <Link to="/" className='underline'>Health</Link>
        <Link to="/" className='underline'>Career</Link>
       </div>
       <Search />
       </div>
      </div>
    </div>
  )
}

export default SinglePost