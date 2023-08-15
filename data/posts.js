import {USERS} from "../data/users"

export const POSTS = [
    {
        imageUrl: 'https://source.unsplash.com/random/1',
        user: USERS[0].user,
        likes: 219,
        caption: 'Building Instagram clone with React Native, this is going to be a fun build #react #dev #build',
        profile_picture: USERS[0].image,
        comments: [ 
            {
                user: 'priyanka',
                comment: 'Wow! This looks awesome AF...'
            },
            {
                user: 'shreya',
                comment: 'Definitely someone to look upto!!'
            },
        ]
    },
    {
        imageUrl: 'https://source.unsplash.com/random/2',
        user: USERS[1].user,
        likes: 572,
        caption: 'Speechless',
        profile_picture: USERS[1].image,
        comments: [ 
            {
                user: 'aditya',
                comment: 'Damn bro! you da boss. Smooth'
            },
            // {
            //     user: 'amit',
            //     comment: 'Definitely someone to look upto!!'
            // },
        ]
    }
]