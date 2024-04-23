import './App.css'
import { TwitterFollowCard } from './TwitterFolloCard.jsx'

const users = [
    {
        userName: 'howardev_',
        name: 'Howard Parra',
        isFollowing: true
    },
    {
        userName: 'ImNOTCampbell',
        name: 'Naomi Gonzalez',
        isFollowing: false
    }

]

export function App () {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard >
                )
                )
            }
        </section>
    )
}