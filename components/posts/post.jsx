import {Card, Button, Icon, Link} from 'konsta/react'
import {HeartFill, ChatBubble2Fill, ArrowshapeTurnUpRightFill, Ellipsis} from 'framework7-icons/react'
const Post = (post) => {
    return (
        <Card
            className='w-5/6 md:w-full'
            post-id={post.id}
            margin='m-1'
            header={
                <>
                    <Link className='transition-all float-right mt-1 hover:dark:bg-neutral-800 hover:shadow-sm hover:dark:shadow-blue-700/50 rounded-full p-2'>
                        <Icon>
                            <Ellipsis className="w-7 h-7"></Ellipsis>
                        </Icon>
                    </Link>
                    <div className='flex flex-row gap-2'>
                        <img className='rounded-full h-15 w-15' src='../../sample.png' />
                        <div className='flex flex-col justify-center'>
                            <span className='font-normal text-base dark:text-neutral-300'>{post.name}</span>
                            <span className='text-xs text-neutral-400'>{post.time}</span>
                        </div>
                    </div>
                </>
            }
            footer={
                <>
                    <div className='container grid grid-cols-3 gap-2'>
                        <Button
                            colors={{
                                text: 'text-rose-500',
                                bg: 'bg-rose-500',
                                activeBg: 'active:bg-rose-500',
                                activeBgDark: 'active:bg-rose-600',
                                touchRipple: 'touch-ripple-rose-500',
                            }}
                            clear>
                            <Icon>
                                <HeartFill className='w-7 h-7'></HeartFill>
                            </Icon>
                        </Button>
                        <Button
                            colors={{
                                text: 'text-neutral-300',
                                bg: 'bg-neutral-500',
                                activeBg: 'active:bg-neutral-500',
                                activeBgDark: 'active:bg-neutral-600',
                                touchRipple: 'touch-ripple-neutral-500',
                            }}
                            clear>
                            <Icon>
                                <ChatBubble2Fill className='w-7 h-7'></ChatBubble2Fill>
                            </Icon>
                        </Button>
                        <Button
                            colors={{
                                text: 'text-indigo-800',
                                bg: 'bg-indigo-500',
                                activeBg: 'active:bg-indigo-500',
                                activeBgDark: 'active:bg-indigo-600',
                                touchRipple: 'touch-ripple-indigo-500',
                            }}
                            clear>
                            <Icon>
                                <ArrowshapeTurnUpRightFill className='w-7 h-7'></ArrowshapeTurnUpRightFill>
                            </Icon>
                        </Button>
                    </div>
                </>
            }>
                {post.children}
            </Card>
    )
}
export default Post