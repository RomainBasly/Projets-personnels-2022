import * as React from "react";
import DefaultTemplate from "@/Components/DefaultTemplate"

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
          </>
        </div>
      </DefaultTemplate>
      </>
    );
  }
}

export default Home;
