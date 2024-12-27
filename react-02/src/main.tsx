/*
 * @Author: zhengduo
 * @Date: 2024-12-27 14:55:31
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-27 15:32:39
 * @Description: file content
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App4.tsx'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
