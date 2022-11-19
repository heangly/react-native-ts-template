import { StyleSheet, View, ViewStyle } from 'react-native'

type Props = { additionalStyles: ViewStyle; children: JSX.Element }

const GlassCard: React.FC<Props> = ({ additionalStyles, children }) => {
  return <View style={[styles.glassCard, additionalStyles]}>{children}</View>
}

export default GlassCard

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 32,
    borderRadius: 10,
    shadowColor: 'rgba( 31, 38, 135, 0.37 )',
    borderWidth: 2,
    borderColor: 'rgba( 255, 255, 255, 0.18 )'
  }
})
