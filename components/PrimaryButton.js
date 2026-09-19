import { Pressable, Text } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

// Genbrugelig primær knap, bruges på tværs af Opgaveliste- og Opgavedetalje-skærmene.
export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      style={[GlobalStyle.primaryButton, disabled && GlobalStyle.primaryButtonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={GlobalStyle.primaryButtonText}>{title}</Text>
    </Pressable>
  );
}
