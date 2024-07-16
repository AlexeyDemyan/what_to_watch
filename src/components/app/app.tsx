import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  filmCardCount: number
}

export default function App({filmCardCount}: AppScreenProps): JSX.Element {
  return <MainScreen filmCardCount={filmCardCount}/>;
}
