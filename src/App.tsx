import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePreserveScrollPosition } from './usePreserveScrollPosition';

const loremIspum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
  interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
  dui mauris, mattis quis lacus id, pellentesque lobortis odio.`;

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const refTab1 = useRef<HTMLDivElement>(null);
  const refTab2 = useRef<HTMLDivElement>(null);
  const refTab3 = useRef<HTMLDivElement>(null);

  usePreserveScrollPosition(refTab1, currentTab === 1);
  usePreserveScrollPosition(refTab2, currentTab === 2);
  usePreserveScrollPosition(refTab3, currentTab === 3);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="tabs">
        <button onClick={() => setCurrentTab(1)}>Tab 1</button>
        <button onClick={() => setCurrentTab(2)}>Tab 2</button>
        <button onClick={() => setCurrentTab(3)}>Tab 3</button>
      </div>
      <div className="content">
        {currentTab === 1 && <div id="a" className="tab_content" ref={refTab1}>Tab 1 content {loremIspum}{loremIspum}{loremIspum}</div>}
        {currentTab === 2 && <div id="b" className="tab_content" ref={refTab2}>Tab 2 content {loremIspum}{loremIspum}{loremIspum}</div>}
        {currentTab === 3 && <div id="c" className="tab_content" ref={refTab3}>Tab 3 content {loremIspum}{loremIspum}{loremIspum}</div>}
      </div>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
