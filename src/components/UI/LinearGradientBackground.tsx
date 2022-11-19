import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import COLORS from '../../commons/constants/COLORS'

type Props = { children: JSX.Element }

const LinearGradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={[COLORS.blue700, COLORS.pink700]}
      style={styles.root}
      start={{ x: 0, y: 0.75 }}
      end={{ x: 1, y: 0.25 }}
    >
      {children}
    </LinearGradient>
  )
}

export default LinearGradientBackground

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
