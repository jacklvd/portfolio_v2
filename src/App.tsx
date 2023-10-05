import './App.scss'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Waveform } from '@uiball/loaders'
;<Waveform size={84} lineWeight={3.5} speed={1} color="black" />

const Home = lazy(() => import('./pages/Home/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'))

function App() {
    return (
        <>
            <Suspense
                fallback={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            minHeight: '100vh',
                        }}
                    >
                        <Waveform />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </Suspense>
        </>
    )
}

//  test lazy function
// function wait(time: number) {
//   return new Promise((resolve) => setTimeout(resolve, time))
// }

export default App
