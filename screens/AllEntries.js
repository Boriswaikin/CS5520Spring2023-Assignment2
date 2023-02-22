import { View, StyleSheet,Button ,FlatList,Text} from 'react-native'
import React, {useState,useEffect} from 'react'
import Color from '../components/Color'
import EntriesList from '../components/EntriesList';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-setup';
export default function AllEntries() {

  const [entriesAll,setEntriesAll] = useState([]);

  useEffect(()=>{
    onSnapshot(collection(db, "entries"),(querySnapshot) => {
      if (querySnapshot.empty){
        setEntriesAll([]);
      }
      else {
        let entriesFromDB = [];
        querySnapshot.docs.forEach((doc)=>{
          entriesFromDB.push({...doc.data(),id:doc.id});
        })
        setEntriesAll(entriesFromDB)
        // console.log(entriesFromDB)
      }
    });
    return ()=>{
      unsubscribe();
    }
    },[])

  // console.log(route.params.value);
  return (
    <View style={styles.container}>
      <EntriesList
        inputData={entriesAll}/>
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