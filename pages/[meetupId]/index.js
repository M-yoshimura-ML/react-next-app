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
