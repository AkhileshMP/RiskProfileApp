import React from 'react';
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const Constants = {
    width: width,
    height: height,
    fontFamily: "Roboto-Regular",
    fontHeader: "Roboto-Bold",
    fontFamilyBold: "Roboto-Bold",
    fontFamilyExtraBold: "Roboto-Black",

    questions: [
      {
        id: 1,
        question: 'How would you rate your knowledge of investments?',
        options: [
            {
                id: 1,
                option: 'Novice',
                score: 1
            },
            {
                id: 2,
                option: 'Intermediate',
                score: 2
            },
            {
                id: 3,
                option: 'Advanced',
                score: 3
            }
        ]
      },
      {
        id: 2,
        question: 'How long have you been investing in financial products?',
        options: [
            {
                id: 1,
                option: 'Less than 1 year',
                score: 1
            },
            {
                id: 2,
                option: '1-3 years',
                score: 2
            },
            {
                id: 3,
                option: 'More than 3 years',
                score: 3
            }
        ]
      },
      {
        id: 3,
        question: 'How do you feel about the possibility of losing money on your investments?',
        options: [
            {
                id: 1,
                option: 'I cannot accept any losses',
                score: 1
            },
            {
                id: 2,
                option: 'I can accept minor losses',
                score: 2
            },
            {
                id: 3,
                option: 'I am comfortable with moderate losses',
                score: 3
            },
            {
                id: 4,
                option: 'I am comfortable with significant losses',
                score: 4
            }
        ]
      },
      {
        id: 4,
        question: 'How long can you leave your money invested before you need to access it?',
        options: [
            {
                id: 1,
                option: 'Less than 1 year',
                score: 1
            },
            {
                id: 2,
                option: '1-3 years',
                score: 2
            },
            {
                id: 3,
                option: '3-5 years',
                score: 3
            },
            {
                id: 4,
                option: 'More than 5 years',
                score: 4
            }
        ]
      },
      {
        id: 5,
        question: 'What is your primary financial goal?',
        options: [
            {
                id: 1,
                option: 'Preserving my capital',
                score: 1
            },
            {
                id: 2,
                option: 'Generating regular income',
                score: 2
            },
            {
                id: 3,
                option: 'Growing my capital',
                score: 3
            },
            {
                id: 4,
                option: 'Maximizing my returns',
                score: 4
            }
        ]
      }
    ]
}
export default Constants;
