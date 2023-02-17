import React from 'react'
import {useRouter} from 'next/router';
import classes from './classes.module.scss';
import paw from '../../assets/cat-paw.svg'
import info from '../../assets/info.svg'
import Link from 'next/link';

interface HomeCardProps {
  textDescription: string;
  title: string;
}

interface HomeCardState {}




class HomeCard extends React.Component<HomeCardProps, HomeCardState> {
  constructor(props: HomeCardProps) {
    super(props)
    this.state = {}
  }

  
  public override render(): JSX.Element {
    return (
      <div className={classes['root']}>
        <div className={classes['illustration']}>
          <img src={String(paw.src)} alt="cat paw" />
        </div>
        <div className={classes['description']}>
            <h3>{this.props.title}</h3>
            {this.props.textDescription}
            <div className={classes["infoContainer"]}>
                <img src={String(info.src)} alt="cat paw" />
            </div>
        </div>
      </div>
    )
  }
}

export default HomeCard
