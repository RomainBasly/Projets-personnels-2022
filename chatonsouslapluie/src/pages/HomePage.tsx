import * as React from "react";
import DefaultTemplate from "@/Components/DefaultTemplate"
import HomeCard from "@/Components/Materials/HomeCard/HomeCard";
import Link from "next/link";

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
          <Link href={'/Signalement'}>
            <HomeCard textDescription={"Vous êtes un voisin et vous souhaitez signaler un animal en détresse"} title={"Signalement"}></HomeCard>
          </Link>
        </div>
      </DefaultTemplate>
      </>
    );
  }
}

export default Home;
