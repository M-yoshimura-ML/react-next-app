import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage () {
    const addMeetupHandler = (meetupData) => {
        console.log(meetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}