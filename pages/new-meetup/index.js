import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage () {
    const router = useRouter();
    async function addMeetupHandler (meetupData) {
        console.log(meetupData);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.push('/');

    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}