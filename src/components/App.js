import { AuthProvider } from '../context/AuthContext';
import Signup from './Signup';

function App() {
  return (
    <AuthProvider>
      <div className="flex justify-center items-center h-screen">
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
