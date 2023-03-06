import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  style: any;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

function InstructionText({ children, style }: Props) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;
