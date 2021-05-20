import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";

const ReadDataFromCloudFirestore = () => {
  const { user } = useUser();
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id)
        .onSnapshot(function (doc) {
          console.log(doc.data());
        });
      alert(
        "Data was successfully fetched from cloud firestore! Close this alert and check console for output."
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      <button
        onClick={readData}
        className="border-gray-600 rounded-md px-1 py-1 bg-gray-300"
      >
        Read Data From Cloud Firestore
      </button>
    </div>
  );
};

export default ReadDataFromCloudFirestore;
