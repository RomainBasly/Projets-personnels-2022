import React, { ReactNode } from 'react'
import classes from './classes.module.scss'
import classNames from 'classnames'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
  fullwidth?: boolean
  disabled?: boolean
  variant?: 'connect' | 'submit' | 'continue' | 'back'
  color?: 'main' | 'neutral' | 'disabled'
  size?: 'medium' | 'large' | 'small' | 'xsmall'
  startIcon?: React.ReactNode
  //children?: ReactNode
}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={classes['root']}>
        <button
          onClick={this.props.onClick}
          disabled={this.props.disabled}
          type={this.props.type || 'button'}
          className={classNames([
            classes['root'],
            classes[this.props.variant || 'submit'],
            classes[this.props.fullwidth ? 'fullWidth' : ''],
            classes[this.props.color ?? 'main'],
            classes[this.props.size ?? 'medium'],
          ])}
        >
          {this.props.label}
        </button>
      </div>
    )
  }
}

export default Button
