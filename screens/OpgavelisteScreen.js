import { View, Text, FlatList } from 'react-native';
import { TASKS } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';
import PrimaryButton from '../components/PrimaryButton';

export default function OpgavelisteScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>
      {/* Viser alle mock-opgaver fra data/const.js i en scrollbar liste */}
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 12 }}
        ListHeaderComponent={
          <Text style={[GlobalStyle.screenTitle, { paddingHorizontal: 16 }]}>
            Ledige opgaver
          </Text>
        }
        renderItem={({ item }) => (
          <View style={GlobalStyle.taskCard}>
            <Text style={GlobalStyle.taskCompany}>{item.company}</Text>
            <Text style={GlobalStyle.taskTitle}>{item.title}</Text>

            <View style={GlobalStyle.taskMetaRow}>
              <View style={GlobalStyle.categoryTag}>
                <Text style={GlobalStyle.categoryTagText}>{item.category}</Text>
              </View>
              <Text style={GlobalStyle.taskRate}>{item.hourlyRate} kr/t</Text>
            </View>

            <PrimaryButton
              title="Se opgave"
              // Sender hele opgave-objektet med som parameter til detalje-skærmen
              onPress={() => navigation.navigate('OpgaveDetalje', { task: item })}
            />
          </View>
        )}
      />
    </View>
  );
}
