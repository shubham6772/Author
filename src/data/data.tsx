import boyProfile from '../assets/BoyProfile.jpg';
import girlProfile from '../assets/GirlProfile.jpg';

export const questionData = [
    {
        question: 'Specify About Yourself?',
        options: [
            {
                img : boyProfile,
                label: 'Writer',
                value: 'writer',
            },
            {
                img : girlProfile,
                label: 'Reader',
                value: 'reader',
            }
        ],
    },
    {
        question: 'Your Gender?',
        options: [
            {
                img : boyProfile,
                label: 'Male',
                value: 'male',
            },
            {
                img : girlProfile,
                label: 'Female',
                value: 'female',
            }
        ],
    }
]