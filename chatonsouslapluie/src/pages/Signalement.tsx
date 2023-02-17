import DefaultTemplate from '@/Components/DefaultTemplate'
import * as React from 'react'

interface SignalementProps {}

interface SignalementState {}

class Signalement extends React.Component<SignalementProps, SignalementState> {
  constructor(props: SignalementProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <DefaultTemplate
        title={'Signaler un chat blessé ou gravement malade'}
      ></DefaultTemplate>
    )
  }
}

export default Signalement
