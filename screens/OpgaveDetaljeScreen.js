import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';
import PrimaryButton from '../components/PrimaryButton';

export default function OpgaveDetaljeScreen({ route }) {
  // Opgaven sendes med som navigations-parameter fra OpgavelisteScreen.
  const { task } = route.params;
  // Lokal state der styrer, om der er "ansøgt" — ingen backend, så det nulstilles
  // hver gang man forlader og genbesøger skærmen.
  const [harAnsoegt, setHarAnsoegt] = useState(false);

  return (
    <ScrollView style={GlobalStyle.container}>
      <View style={GlobalStyle.detailCard}>
        <Text style={GlobalStyle.detailCompany}>{task.company}</Text>
        <Text style={GlobalStyle.detailTitle}>{task.title}</Text>

        <View style={GlobalStyle.categoryTag}>
          <Text style={GlobalStyle.categoryTagText}>{task.category}</Text>
        </View>

        <Text style={GlobalStyle.detailLabel}>Beskrivelse</Text>
        <Text style={GlobalStyle.detailValue}>{task.description}</Text>

        <Text style={GlobalStyle.detailLabel}>Sted</Text>
        <Text style={GlobalStyle.detailValue}>{task.location}</Text>

        <Text style={GlobalStyle.detailLabel}>Estimeret tidsforbrug</Text>
        <Text style={GlobalStyle.detailValue}>{task.estimatedHours} timer</Text>

        <Text style={GlobalStyle.detailLabel}>Timeløn</Text>
        <Text style={GlobalStyle.detailValue}>{task.hourlyRate} kr/time</Text>

        <View style={{ marginTop: 20 }}>
          {/* Knappen deaktiveres og skifter tekst, når man har "ansøgt" */}
          <PrimaryButton
            title={harAnsoegt ? 'Ansøgning sendt' : 'Ansøg om opgaven'}
            onPress={() => setHarAnsoegt(true)}
            disabled={harAnsoegt}
          />
        </View>

        {harAnsoegt && (
          <Text style={GlobalStyle.confirmationText}>
            Din ansøgning er sendt til {task.company}!
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
