import DefaultTemplate from '@/Components/DefaultTemplate'
import * as React from 'react'
import classes from "./Signalement.module.scss"

interface SignalementProps {}

interface SignalementState {
  disabled: boolean;
}

class Signalement extends React.Component<SignalementProps, SignalementState> {
  constructor(props: SignalementProps) {
    super(props)
    this.state = {
      disabled: false
    }
  }
  render() {
    return (
      <DefaultTemplate title={'Signaler un chat blessé ou gravement malade'}>
        <div className={classes["root"]}>
        <form action="/">
          <div>
          <h3>A lire avant d&apos;effectuer un signalement</h3>
        Merci de prendre note de ces éléments avant d&apos;effectuer votre signalement : 
        Cette section ne sert pas à signaler les chats errants.
        Elle sert plus particulièrement à signaler les chats dans les cas suivants : 
        - les chats qui ont été déclarés perdus sur ce site;
        - les chattes qui viennent de mettre bas dans un lieu public;
        - un ou des chatons présents dans votre jardin ou sur la voie publique
        - les chats gravements blessés ou malades, et dont la vie est en danger et qui requièrent une visite médicale immédiatement (chats sales, chats qui saignent, chats avec un membre cassé, chats immobiles, chats qui bavent, chats qui ont du mal à respirer)


          </div>
        
        <button type="submit" disabled={this.state.disabled}>Signaler un chat</button>

        </form>
        </div>
      </DefaultTemplate>
    )
  }
}

export default Signalement
