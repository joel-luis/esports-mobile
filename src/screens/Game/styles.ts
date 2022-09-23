import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 82,
    height: 50
  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 44,
    alignItems: 'flex-start'
  }
})
