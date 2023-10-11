import React from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";
export default function index(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}
// pre-generate the id from url
export async function getStaticPaths() {
  return {
    /**
     * fallback
     * false: define all params on path, only pre-generate the page that we define in paths => 404
     * true: define some of params on path, pre-generate the page dynamically => m3 also show
     */
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
// pre-generate the page
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup!!!",
      },
    },
  };
}
