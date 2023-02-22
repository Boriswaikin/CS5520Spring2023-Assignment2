import { View, StyleSheet } from 'react-native'
import React, {useState,useEffect} from 'react'
import Color from '../components/Color'
import EntriesList from '../components/EntriesList';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-setup';

export default function OverLimitEntries() {

  const [entriesOverlimit,setEntriesOverlimit] = useState([]);

  const q = query(collection(db, "entries"), where("flagOverlimit", "==", true));
  useEffect(()=>{
    onSnapshot(q,(querySnapshot) => {
      if (querySnapshot.empty){
        setEntriesOverlimit([]);
      }
      else {
        let entriesFromDB = [];
        querySnapshot.docs.forEach((doc)=>{
          entriesFromDB.push({...doc.data(),id:doc.id});
        })
        setEntriesOverlimit(entriesFromDB)
        // console.log(entriesFromDB)
      }
    });
    return ()=>{
      unsubscribe();
    }
    },[])

  return (
    <View style={styles.container}>
      <EntriesList
        inputData={entriesOverlimit}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.contentColor,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
})