import {useState, useEffect, useRef} from 'react'
import {db, storage} from './Firebase'

function useFireStore() {
    // get list from firestore
    const [items, setItems] = useState([]);
    const [budget, setBudget] = useState(0);        
    useEffect(() => {
        const unSubscribe1 = db.collection('Items').orderBy('date').onSnapshot(
            snap => {
                let fetched = snap.docs.map(doc =>{
                    return { ...doc.data(), id: doc.id }
                })

                let budget = snap.docs.map(doc => {
                    return doc.data().amount
                })

                setItems(fetched);
                setBudget( budget.length > 0 && budget.reduce((acc, current) => acc+current),0 )
            }            
        );
        return unSubscribe1
    }, []);

    // set item to firestore
    const addItem = async(item, amount) => {
        await db.collection('Items').add({
            ...item, amount, 
        });
    };

    // delete item from firestore
    const deleteItem = async(id) => {
        await db.collection('Items').doc(id).delete();
    }    


    const inputRef = useRef();
    const [images,setImages] = useState([]);
    const [progress,setProgress] = useState(0);
    useEffect(() => {
        const unSubscribe2 = db.collection('Images').orderBy('createdAt', 'desc').onSnapshot(snap => {
            let dbSnap = snap.docs.map( doc => ({
                ...doc.data(), id: doc.id,
            }));
            setImages(dbSnap);
        });

        return unSubscribe2
    }, []);

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref(file.name);
        storageRef.put(file).on("state_changed", 
            snap=>{
                let percentage = (snap.bytesTransferred/snap.totalBytes)*100;            
                setProgress(percentage);
            }, 
            err=>console.log(err),
            async () => {
                const url = await storageRef.getDownloadURL();
                await db.collection('Images').add({
                    url, createdAt: Date.now(),
                })                
                setProgress(0);  
                inputRef.current.value = '';
            }
        )        
    }

    return [
        items, addItem, deleteItem, budget,
        inputRef, images, progress, uploadImage
    ]
}

export default useFireStore
