/*
 * @Author: zhengduo
 * @Date: 2024-12-25 13:29:26
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-27 13:42:48
 * @Description: file content
 */
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App8.tsx'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
