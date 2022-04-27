import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageRouting from './Components/Routing/PageRouting';
import { ClothingContextProvider } from './Context/Clothing/clothing-context';
import { UsersContextProvider } from './Context/Users/users-context';
import { LoadingContextProvider } from './Context/loading/loading-context';
function App() {
  return (
    <div className="App">
      <ClothingContextProvider>
        <UsersContextProvider>
<LoadingContextProvider>
     <PageRouting/>
</LoadingContextProvider>
        </UsersContextProvider>
      </ClothingContextProvider>
    </div>
  );
}

export default App;
