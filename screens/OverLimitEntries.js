import { View, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import Color from '../components/Color'
import EntriesList from '../components/EntriesList';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-setup';

export default function OverLimitEntries({navigation}) {

  const [entriesOverlimit,setEntriesOverlimit] = useState([]);

  function navigate(entries){
    navigation.navigate('EditEntries',{entriesItem: entries});
  }

  const q = query(collection(db, "entries"), 
  where("flagOverlimit", "==", true),
  where("reviewedStatus", "==", false));
  useEffect(()=>{
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      if (querySnapshot.empty){
        setEntriesOverlimit([]);
      }
      else {
        let entriesFromDB = [];
        querySnapshot.docs.forEach((doc)=>{
          entriesFromDB.push({...doc.data(),id:doc.id});
        })
        setEntriesOverlimit(entriesFromDB);
      }
    });
    return ()=>{
      unsubscribe();
    }
    },[])

  return (
    <View style={styles.container}>
      <EntriesList
        inputData={entriesOverlimit} 
        EntriesPressed={navigate}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.contentColor,
      justifyContent: 'center',
    },
})