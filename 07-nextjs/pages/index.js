import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  const [meetUps, setMeetUps] = useState([]);
  useEffect(() => {
    // send a http request and fetch data
    setMeetUps(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={props.meetUps} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetUps: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}
export default HomePage;
