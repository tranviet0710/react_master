import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetUps} />;
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://vietdev:WOXGUE2PMxxDrQDA@cluster0.59ezxwz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetUps = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetUps: meetUps.map((meetUp) => {
        return {
          ...meetUp,
          id: meetUp._id.toString(),
          // because _id is an ObjectId so we must serialize it
          _id: meetUp._id.toString(),
        };
      }),
    },
    revalidate: 60, // Revalidate every 60 seconds (1 minute)
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetUps: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
