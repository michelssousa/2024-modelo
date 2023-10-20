import { Button, Icon, Page } from 'konsta/react'
import Header from '../../components/header'
import Navigation from '../../components/navigation'
import Main from '../../components/main'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0'
export default function Home() {
  const { user, error, isLoading } = useUser()
  return (
    <Page>
      {!isLoading && (
        <>
          <Header profile={true}></Header>
          <Navigation profile={true} />
          <Main>
            <div className="flex dark:bg-dark h-[80vh] sm:h-[75vh] dark:bg-block-strong-dark w-full transition-all">
              <div className="w-full flex justify-center transition-all">
                <div className="relative w-2/3 h-[75%] sm:h-[50vh] lg:w-full transition-all">
                  <img className="shadow-lg rounded-b-xl object-cover w-full h-full" src="../../Screenshot from 2021-11-08 06-51-25.png" />
                  <div className="absolute w-full -bottom-16 left-3 lg:left-0 flex lg:justify-center trasition-all">
                    <img className="shadow-lg rounded-full object-cover" width={180} height={180} layout="fill" src={user.picture} />
                  </div>
                  <div className="absolute flex right-2 bottom-2">
                    <Button className="touch-ripple-indigo-300" raised colors={{ bg: 'bg-gray-50' }}>
                      <div className="text-gray-900 flex flex-row gap-2 items-center justify-center px-1 transition-all">
                        <i className="text-lg fas fa-edit"></i>
                        <span className="md:hidden">Edit Profile</span>
                      </div>
                    </Button>
                  </div>
                  <div className="absolute w-full flex flex-col -bottom-12 lg:bottom-[-6.5rem] pl-48 lg:pl-0 lg:items-center transition-all">
                    <span className="text-gray-200 font-bold text-3xl lg:text-2xl">{user.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </Main>
        </>
      )}
    </Page>
  )
}
export const getServerSideProps = withPageAuthRequired()