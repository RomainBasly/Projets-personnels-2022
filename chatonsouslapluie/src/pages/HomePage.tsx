import * as React from "react";
import DefaultTemplate from "@/Components/DefaultTemplate"
import HomeCard from "@/Components/Materials/HomeCard/HomeCard";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }
  public override render(): JSX.Element {
    return (
      <>
      <DefaultTemplate title="HomePage">
        <div className="root">
          <>
          <h1>Body of the page</h1>
          <HomeCard textDescription={"Vous êtes un voisin et vous souhaitez signaler un animal en détresse"} title={"Signalement"}></HomeCard>
          </>
        </div>
      </DefaultTemplate>
      </>
    );
  }
}

export default Home;
