import DefaultTemplate from "@/Components/DefaultTemplate";
import * as React from "react";
import classes from "./Signalement.module.scss";

import MapV2 from "@/Components/Materials/MapV2/MapV2";

interface SignalementProps {}

interface SignalementState {
  disabled: boolean;
}

class Signalement extends React.Component<SignalementProps, SignalementState> {
  constructor(props: SignalementProps) {
    super(props);
    this.state = {
      disabled: false,
    };
  }
  public override render() {
    return (
      <DefaultTemplate title={"Signaler un chat blessé ou gravement malade"}>
        <div className={classes["root"]}>
          <div>
            <h3>A lire avant d&apos;effectuer un signalement de chat</h3>
            L&apos;objectif de cette section : elle sert à signaler aux
            associations présents sur ce site les chats gravement malades ou
            blessés pour une prise en charge éventuelle. La qualité des
            informations que vous transmettrez dépendra de la survie du chat que
            vous signalez. Elle sert plus particulièrement à signaler les chats
            dans les cas suivants : - les chats qui ont été déclarés perdus sur
            ce site; - les chattes qui viennent de mettre bas; - Présence de
            chatons dans votre jardin ou sur la voie publique - les chats
            gravements blessés ou malades, et dont la vie est en danger et qui
            requièrent une prise en charge médicale immédiate (logo information)
            (chats sales, chats qui saignent, chats avec un membre cassé, chats
            immobiles, chats qui bavent, chats qui ont du mal à respirer)
          </div>

          <MapV2 />

          <button type="button" disabled={this.state.disabled}>
            Signaler un chat
          </button>
        </div>
      </DefaultTemplate>
    );
  }
}

export default Signalement;
