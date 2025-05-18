import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './Root.tsx'
import { ReduxProvider } from './store/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <Root />
    </ReduxProvider>
  </StrictMode>,
)
