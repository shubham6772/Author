import boyProfile from '../assets/BoyProfile.jpg';
import girlProfile from '../assets/GirlProfile.jpg';

export const questionData = [
    {
        question: 'Specify About Yourself?',
        options: [
            {
                img: boyProfile,
                label: 'Writer',
                value: 'writer',
            },
            {
                img: girlProfile,
                label: 'Reader',
                value: 'reader',
            }
        ],
    },
    {
        question: 'Your Gender?',
        options: [
            {
                img: boyProfile,
                label: 'Male',
                value: 'male',
            },
            {
                img: girlProfile,
                label: 'Female',
                value: 'female',
            }
        ],
    }
]

export const sortSelectData = [
    {
        label: 'None',
        value: 'none'

    },
    // {
    //     label: 'Most Relevant',
    //     value: 'most_relevant',
    // },
    // {
    //     label: 'Newest',
    //     value: 'newest',
    // },
    // {
    //     label: 'Oldest',
    //     value: 'oldest',
    // },
    {
        label: 'Price high to low',
        value: 'price_high_to_low',
    },
    {
        label: 'Price low to high',
        value: 'price_low_to_high',
    }
]