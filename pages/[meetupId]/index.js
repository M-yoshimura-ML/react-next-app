import { Fragment } from "react";
import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage(props) {
  return (
    <Fragment>
      <Head>
          <title>{props.meetupData.title}</title>
          <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image="https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg"
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const url = process.env.NEXT_PUBLIC_MONGO_DB;
  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({ 
      params: { meetupId: meetup._id.toString() } 
    })),
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const url = process.env.NEXT_PUBLIC_MONGO_DB;
  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId) 
  });

  console.log(selectedMeetup);
  
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }
}
