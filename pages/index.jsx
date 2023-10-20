import React, {useEffect  } from 'react'
import { Page, Navbar, Link, Icon, Card, Block, Button} from 'konsta/react'
import Header from '../components/header'
import Main from '../components/main'
import Navigation from '../components/navigation'
import Post from '../components/posts/post'
export default function Home() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
  return (
    <Page>
      {/* Header */}
      <Header/>
      {/* Navigation */}
      <Navigation/>
      {/* Main Content */}
      <Main>
        <div className='grid grid-cols-4 gap-3'>
          <div className='col-span-1 sm:hidden w-full'></div>
          <div className='col-span-2 md:col-span-full h-full w-full flex flex-col items-center'>
            {num.map( (nums, i) => (
              <Post count={i} id="1010101" name="Jake Peregrino Velasco" image="../../sample.png" time="5hrs ago">
                <div className='dark:text-neutral-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid porro, officiis illum eum nam, libero quae quaerat quod, adipisci beatae placeat facilis debitis odio aut id distinctio minus magnam!
                Nam vitae ipsum iure odit eveniet magni deserunt vero nesciunt consequatur delectus facere, laboriosam similique accusantium. Harum vero fugiat illo dolores dolorem unde magni tenetur sed ratione fugit? Numquam, in!
                At suscipit, voluptates quasi corporis, possimus, repudiandae quos quaerat porro autem nemo impedit laudantium blanditiis molestias neque! A sint dolores, itaque aliquam obcaecati debitis iure repellat unde totam maiores fuga.
                Id minima doloremque commodi quibusdam provident nemo molestias voluptatem, at sed repellendus perspiciatis! Libero animi autem voluptas quis culpa, commodi nemo, eius molestiae tenetur aut recusandae ad laborum, eaque voluptate?
                Dignissimos doloribus atque enim praesentium culpa perspiciatis consequatur repellendus. Incidunt similique porro officia voluptatem pariatur impedit maiores nostrum dolores, animi quos dolor a laboriosam provident itaque. Consequuntur, expedita asperiores? Possimus?</div>
              </Post>
            ))}
          </div>
          <div className='col-span-1 sm:hidden'></div>
        </div>
      </Main>
    </Page> 
  )
}