import { Text,FlatList, View } from "react-native";
import Languages from "../languages.js";

export default function Index() {
  const Titles = [
    {
      id: '1',
      title: 'Unity',
      experience: 'It\'s awesome',
      image: require('../assets/Unity.svg'),
    },
    {
      id: '2',
      title: 'C#',
      experience: 'OHHHH MY GOD!!!!!!!!!',
      image: require('../assets/CSharp.svg'),
    },
    {
      id: '3',
      title: 'Java',
      experience: 'it\'s okay',
      image: require('../assets/Java.svg'),
    },{
      id: '4',
      title: 'Unreal Engine',
      experience: 'shit...',
      image: require('../assets/UE.svg'),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={Titles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Languages
            title={item.title}
            experience={item.experience}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
