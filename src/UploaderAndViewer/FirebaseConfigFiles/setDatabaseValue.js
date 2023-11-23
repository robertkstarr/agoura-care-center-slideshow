import {ref, set} from "firebase/database";
import {database} from "./FirebaseConfig";

const setDatabaseValue = (directory, valueObject) => {
    set(ref(database, directory), valueObject).then();
};

export default setDatabaseValue;