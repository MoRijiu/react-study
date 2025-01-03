/*
 * @Author: zhengduo
 * @Date: 2025-01-02 13:37:14
 * @LastEditors: zhengduo
 * @LastEditTime: 2025-01-03 14:18:34
 * @Description: file content
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
