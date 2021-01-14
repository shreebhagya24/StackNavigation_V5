import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, width: '100%', marginTop: 80 }}>

        <Image source={require('./assets/home.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} ></Image>

      </View>
      <View style={{ flex: 2, marginTop: 40, alignItems: 'center' }}>

        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Welcome Home Screen</Text>

        <View style={{ width: '100%', marginVertical: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Music", {
            user: "Hello Bhagya Shree!"
          }
          )}
            style={{ backgroundColor: '#ff8a65', padding: 10, borderRadius: 15 }}>
            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}> Go to Music Screen </Text>

          </TouchableOpacity>

        </View>
      </View>

    </View>


  );
}

function MusicScreen({ route, navigation }) {

  let { user } = route.params;

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, width: '100%', marginTop: 80 }}>

        <Image source={require('./assets/snow_music.jpg')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }} ></Image>

      </View>
      <View style={{ flex: 2, marginTop: 40, alignItems: 'center' }}>

        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Welcome Music Screen</Text>

        <Text style={{ fontWeight: '200', marginTop: 15 }}>{user}</Text>

        <View style={{ width: '100%', marginVertical: 15 }}>
          <Button title="Go to Home  Screen" onPress={() => navigation.navigate('Home')}
            color="#f47373" />
        </View>

        <View style={{ width: '100%', marginVertical: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: '#FFF', padding: 10, borderRadius: 15, borderColor: '#ff8a65',
              borderWidth: 1, width: 150, alignItems: 'center'
            }}>
            <Text style={{ fontSize: 20, color: '#ff8a65', fontWeight: '100' }}> Go Back </Text>

          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();

function CustomeHeader()
{
  return <FontAwesome5 name="music" size={24}  color="#FFF" />
}

function CustomeHeaderHome()
{
  return <FontAwesome5  name="home" size={24} color="#FFF"/>
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: "#f47373"
        },
        headerTintColor: "#FFF",
        headerTitleStyle:{
          fontWeight: 'bold',
          fontSize: 28
        }


      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle:(props)=> <CustomeHeaderHome {...props}/>
        }} 
        ></Stack.Screen>
        <Stack.Screen name="Music" component={MusicScreen} options={{
        headerTitle:(props)=> <CustomeHeader {...props}/>
    
        }

        }></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  screen: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },



});


export default App;
