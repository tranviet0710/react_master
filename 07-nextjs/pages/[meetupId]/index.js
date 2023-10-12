import React from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
export default function index(props) {
  return <MeetupDetail meetupData={props.meetupData} />;
}
// pre-generate the id from url
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://vietdev:WOXGUE2PMxxDrQDA@cluster0.59ezxwz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupsId = await meetupsCollection
    .find()
    .map((meetup) => meetup._id.toString())
    .toArray();
  client.close();

  return {
    /**
     * fallback
     * false: define all params on path, only pre-generate the page that we define in paths => 404
     * true: define some of params on path, pre-generate the page dynamically => m3 also show
     */
    fallback: false,
    paths: meetupsId.map((meetupId) => ({
      params: {
        meetupId: meetupId,
      },
    })),
  };
}
// pre-generate the page
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://vietdev:WOXGUE2PMxxDrQDA@cluster0.59ezxwz.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        ...selectedMeetup,
        id: selectedMeetup._id.toString(),
        _id: selectedMeetup._id.toString(),
      },
    },
  };
}
