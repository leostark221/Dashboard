import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider,
  embeddedWallet, metamaskWallet, } from "@thirdweb-dev/react";
const activeChain = "fantom-testnet";
import { StateContextProvider } from './context'; // Adjust the path as necessary


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        embeddedWallet({
          auth: {
            options: ["email", "google"],
          }
        })
      ]}
    >
    <StateContextProvider>
    
    <App />
    </StateContextProvider>
        </ThirdwebProvider>
  </React.StrictMode>,
)
