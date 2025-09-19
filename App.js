import { StatusBar } from 'expo-status-bar';
import {
   Alert, 
   Image, 
   StyleSheet, 
   Text, 
   TextInput, 
   TouchableOpacity,  
   View 
  } from 'react-native';
import logo from './assets/todolist.png';
import add from './assets/add.png';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import btnLixo from "./assets/trash-bin.png"
import Checkbox from 'expo-checkbox';

export default function App() {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const addAdicionar = () => {
    //Alert.alert("TODO list","Valor: " + tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("")
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewItemRender}>
      <Checkbox value={false} />
      <Text style={styles.textItemRender}>{item}</Text>
      <TouchableOpacity>
        <Image source={btnLixo} />
      </TouchableOpacity>
    </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
        <Text>TODO List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput 
        placeholder="Digite a tarefa" 
        value={tarefa} 
        onChangeText={setTarefa} 
        />
        <TouchableOpacity onPress={addAdicionar}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList
        data={tarefas}
        renderItem={renderItem}
        estimatedItemSize={50}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },
  viewInput: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  add: {
    height: 32,
    width: 32,
  },
  viewLogo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  viewTarefas: {
    width: "100%",
    flex: 1,
  },
  viewItemRender: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    rowGap: 10,
  },
  textItemRender: {
    flex: 1,
  },
});
