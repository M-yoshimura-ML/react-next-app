// import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  { 
    id: 'm1', 
    title: 'A first Meetup', 
    image: 'https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup'
  },
  { 
    id: 'm2', 
    title: 'A Second Meetup', 
    image: 'https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a Second meetup'
  }
]

export default function HomePage (props) {
  return (
      <MeetupList meetups={props.meetups} />
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}