import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";

const WriteToCloudFirestore = () => {
  const { user } = useUser();
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id) // leave as .doc() for a random unique doc name to be assigned
        .set({
          string_data: user.name,
          number_data: Math.random(),
          boolean_data: true,
          map_data: { stringInMap: user.email, numberInMap: Math.random() },
          array_data: ["text", 4],
          null_data: null,
          time_stamp: firebase.firestore.Timestamp.fromDate(
            new Date("December 17, 1995 03:24:00")
          ),
          geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435),
        })
        .then(alert("Data was successfully sent to cloud firestore!"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      <button
        onClick={sendData}
        className="border-gray-600 rounded-md px-1 py-1 bg-gray-300"
      >
        Send Data To Cloud Firestore
      </button>
    </div>
  );
};

export default WriteToCloudFirestore;
