/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import './navigation.scss'
import delayUnmounting from './delayedComponent'

const Navigation = ({ showMenu, data, onNavigate, history }) => {
  const [selected, setSelected] = useState(null)

  const comp1 = data[0]
  const comp2 = data[1]
  const comp3 = data[2]
  const rest = data.slice(3) || []

  useEffect(() => {
    if (!showMenu) {
      const activePage = data.findIndex(item => item.path === history.location.pathname) + 1
      setSelected(activePage)
    }
  }, [showMenu, data, history.location.pathname])

  const finfdUnmountingClass = (item) => { // to find class when this component gonna unmount
    switch (item) {
      case 1:
        return selected === 1 ? 'unmount2-selected' : 'unmount2'
      case 2:
        return selected === 2 ? 'unmount' : 'unmount-unselected'
      case 3:
        return selected === 3 ? 'unmount3-selected' : 'unmount3'
      default:
        return selected === item ? 'unmount4-selected' : 'unmount3'
    }
  }

  const handleCLick = (path, item) => {
    setSelected(item)
    history.push(path)
    onNavigate()
  }

  return <React.Fragment>

    <div className={`nav-list ${!showMenu ? 'nav-list-unmount' : ''} `} >
      {
        [...data].map((item, index) => <div className='nav-item'
          onClick={() => { handleCLick(item.path, index + 1) }}
        >
          <span>
            {item.name}
          </span>
        </div>)
      }
    </div>

    <div className={`nav-container ${!showMenu ? 'unmount-nav-container' : ''} `}>

      <div
        onClick={() => { handleCLick(comp1.path, 1) }}
        className={`div1 ${!showMenu ? finfdUnmountingClass(1) : ''}`}>
        <comp1.component />
      </div>

      <div
        onClick={() => {
          handleCLick(comp2.path, 2)
        }}
        className={`div2 ${!showMenu ? finfdUnmountingClass(2) : ''}`}>
        <comp2.component />
      </div>

      <div
        onClick={() => {
          handleCLick(comp3.path, 3)
        }}
        className={`div3 ${!showMenu ? finfdUnmountingClass(3) : ''}`}>
        <comp3.component />
      </div>

      {
        rest.map((item, index) => {
          const Component = item.component

          return <div
            onClick={() => {
              handleCLick(item.path, index + 1 + 3)
            }}
            className={`rest-div ${!showMenu ? finfdUnmountingClass(index + 1 + 3) : ''}`}>
            <Component />
          </div>
        })
      }

    </div>
  </React.Fragment>
}

export default delayUnmounting(Navigation)
