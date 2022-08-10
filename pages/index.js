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

export default function Home () {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}