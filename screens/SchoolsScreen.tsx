import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SchoolList from '../components/SchoolList';

const schoolList = {
  schools: [
    {
    id: '1',
    imageUri: 'https://nigerianfinder.com/wp-content/uploads/2018/01/LAUTECH.jpg',
    schoolName: 'Ladoke Akintola University of Technology',
    },
    {
    id: '2',
    imageUri: 'https://www.unijos.edu.ng/sites/default/files/inline-images/uo_jos.jpg',
    schoolName: 'University of Jos',
    },
    {
    id: '3',
    imageUri: 'https://www.thenhef.org/wp-content/uploads/abulogo.jpg',
    schoolName: 'Ahmadu Bello University',
    },
    {
    id: '4',
    imageUri: 'https://www.thenhef.org/wp-content/uploads/UNN_Logo.jpg',
    schoolName: 'University of Nigeria',
    },
    {
    id: '5',
    imageUri: 'https://www.nounportal.org/wp-content/uploads/2015/05/national-open-university-of-nigeria.jpg',
    schoolName: 'National Open University',
    },
    {
    id: '6',
    imageUri: 'https://www.myschoolgist.com/wp-content/uploads/2021/04/Plateau-State-College-of-Nursing-and-Midwifery-vom.jpg',
    schoolName: 'School of Nursing and Midwifery, Plateau',
    },
  ]
}

export default function SchoolsScreen() {

  return (
    <View style={styles.container}>
      <SchoolList schools={schoolList.schools}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});