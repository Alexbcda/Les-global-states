import { useThemeStore } from '../stores/ThemeStore';
import Container from './Container';



function App() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div>
      <Container />
     
    </div>
  );
}

export default App;
