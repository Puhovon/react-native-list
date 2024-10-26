import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function Languages({ title, experience, image }) {
   return (
      <View style={styles.card}>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.experience}>{experience}</Text>
         <Image source={image} style={styles.image} />
      </View>
   );
}

