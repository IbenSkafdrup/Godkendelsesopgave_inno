import { View, Text, ScrollView } from 'react-native';
import { PROFILE } from '../data/const';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function ProfilScreen() {
  // Udleder initialer fra navnet til avatar-cirklen, fx "Simon Holst" → "SH"
  const initialer = PROFILE.name
    .split(' ')
    .map((del) => del[0])
    .join('');

  return (
    <ScrollView style={GlobalStyle.container}>
      <View style={GlobalStyle.profileHeader}>
        <View style={GlobalStyle.avatarCircle}>
          <Text style={GlobalStyle.avatarInitials}>{initialer}</Text>
        </View>
        <Text style={GlobalStyle.profileName}>{PROFILE.name}</Text>
        <Text style={GlobalStyle.profileEducation}>{PROFILE.education}</Text>
        <Text style={GlobalStyle.profileBio}>{PROFILE.bio}</Text>
      </View>

      <Text style={GlobalStyle.sectionLabel}>Kompetencer & interesser</Text>
      <View style={GlobalStyle.skillsWrap}>
        {PROFILE.skills.map((skill) => (
          <View key={skill} style={GlobalStyle.skillTag}>
            <Text style={GlobalStyle.skillTagText}>{skill}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
