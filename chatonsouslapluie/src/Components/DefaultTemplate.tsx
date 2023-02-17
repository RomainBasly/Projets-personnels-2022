import * as React from "react";
import { ReactNode } from "react";
import Header from "../Components/Elements/Header";
import classes from "./classes.module.scss"
import { Inter } from "@next/font/google";
import Footer from "../Components/Elements/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

interface PropsDefaultTemplate {
  title: string;
  children?: ReactNode;
}

interface StateDefaultTemplate {}

class DefaultTemplate extends React.Component<PropsDefaultTemplate,StateDefaultTemplate> {
  constructor(props: PropsDefaultTemplate) {
    super(props);
    this.state = {};
  }
  public override render(): JSX.Element {
    return (
      <div className={classes["root"]}>
        <Header />
        <h1>{this.props.title}</h1>
        <div className={classes["content"]}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default DefaultTemplate;
