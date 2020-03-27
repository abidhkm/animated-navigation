/* eslint-disable react/prop-types */
/* eslint-disable react/no-did-update-set-state */
import React, { useEffect, useRef, useState } from 'react'
import './navigation.scss'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const delayUnmounting = Component => props => {
  const [shouldRender, setShouldRender] = useState(props.showMenu)

  function handleMenuClick() {
    if (!props.showMenu) {
      props.setShowMenu(true)
    } else {
      props.history.push(window.location.path)
      props.setShowMenu(false)
    }
  }
  const prevCount = usePrevious(props.showMenu)

  useEffect(() => {
    if (prevCount && !props.showMenu) {
      setTimeout(
        () => setShouldRender(false),
        500
      )
    } else if (!prevCount && props.showMenu) {
      setShouldRender(true)
    }
  }, [prevCount, props.showMenu])

  const button = <div className='btn-container' >
    <div onClick={() => handleMenuClick()} className={`hamburger ${props.showMenu && 'is-active'}`} id='hamburger-1'>
      <span className='line' />
      <span className='line' />
      <span className='line' />
    </div>
  </div>

  if (shouldRender) {
    return <React.Fragment>
      {button}
      <Component {...props}
      />
    </React.Fragment>
  } else {
    return <React.Fragment>{button}</React.Fragment>
  }
}

export default delayUnmounting
