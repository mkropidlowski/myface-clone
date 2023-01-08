import { useEffect, useState, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query) => {
    const [userdata, setData] = useState(null);
    const [error, setError] = useState(null);

    const query = useRef(_query).current;

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

        if (query) {
            ref = ref.where(...query);
        }

        const unsub = ref.onSnapshot(
            (snapshot) => {
                let result = [];
                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id });
                });

                setData(result);
                setError(null);
            },
            (error) => {
                setError("Brak danych.");
            }
        );

        return () => unsub();
    }, [collection, query]);

    return { userdata, error };
};
