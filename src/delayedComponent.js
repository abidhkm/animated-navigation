/* eslint-disable react/prop-types */
/* eslint-disable react/no-did-update-set-state */
import React from 'react'
import './navigation.css'

function delayUnmounting(Component) {
  return class extends React.Component {
        state = {
          shouldRender: this.props.isMounted
        };

        handleMenuClick() {
          if (!this.props.isMounted) {
            this.props.setShowMenu(true)
          } else {
            this.props.history.push(window.location.path)
            this.props.setShowMenu(false)
          }
        }

        componentDidUpdate(prevProps) {
          if (prevProps.isMounted && !this.props.isMounted) {
            this.setState({
              unmounted: true
            })
            setTimeout(
              () => this.setState({ shouldRender: false }),
              500
            )
          } else if (!prevProps.isMounted && this.props.isMounted) {
            this.setState({ shouldRender: true })
          }
        }

        render() {
          const button = <div className='btn-container' >
            <div onClick={() => this.handleMenuClick()} className={`hamburger ${this.props.isMounted && 'is-active'}`} id='hamburger-1'>
              <span className='line' />
              <span className='line' />
              <span className='line' />
            </div>
          </div>

          return this.state.shouldRender
            ? <React.Fragment>
              {button}
              <Component {...this.props}
                unmounted={this.state.unmounted}
              />
            </React.Fragment> : <React.Fragment>{button}</React.Fragment>
        }
  }
}

export default (delayUnmounting)
