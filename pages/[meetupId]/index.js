import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg"
        title="First Meetup"
        address="some address 5 some city"
        description="This is a frist meetup"
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: '',
        id: 'm1',
        title: 'First Meetup',
        address: 'some address 5 some city',
        description: 'This is a frist meetup',
      }
    }
  }
}
