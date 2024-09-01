import { Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, storage } from '../FirebaseConfigFiles/FirebaseConfig';
import setDatabaseValue from '../FirebaseConfigFiles/setDatabaseValue';

export const handleUpload = (file, setPercent, animalId) => {
    const storageRef = ref(storage, `/${animalId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const getWidthAndHeight = async () => {
        if (file.type == 'video/mp4') {
            // TODO: Fix this
            return { width: 60, height: 60 };
        } else {
            const imageBitmap = await createImageBitmap(file);
            const { width, height } = imageBitmap;
            return { width, height };
        }
    };
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                const uploadTime = Timestamp.now().seconds;
                const uploadUserId = auth.currentUser.uid;
                const uploadUserName = auth.currentUser.displayName;
                console.log(file);

                const { width, height } = await getWidthAndHeight();
                setDatabaseValue(`Public/${animalId}/${file.name.split('.')[0]}`, {
                    url,
                    uploadTime,
                    userId: uploadUserId,
                    userName: uploadUserName,
                    fileName: file.name,
                    imageHeight: height,
                    imageWidth: width,
                    animalId,
                });
            });
        }
    );
};
