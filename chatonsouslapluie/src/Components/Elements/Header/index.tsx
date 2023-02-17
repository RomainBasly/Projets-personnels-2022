import Button from '@/Components/Materials/buttons';
import Link from 'next/link';
import * as React from 'react';
import logo from './assets/logo/logo.png'
import classes from './classes.module.scss';
import burger from '../../assets/burger_menu.svg'

interface Props {
    isConnected?: boolean;
}
 
interface State {}
 
class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    public override render() { 
        return (
            <div className={classes["root"]}>
                <div className={classes["logo"]}>
                    <Link href='/'><img src={String(logo.src)} alt="logo" /></Link>
                </div>
                <div className={classes["connectButton"]}>
                    {this.props.isConnected ?                    
                        <div className={classes["burger"]}>
                            <img src={String(burger.src)} alt="Burger To Navigate" />
                        </div> : 
                    <Button label={"Connect / Register"}></Button>
                }
                </div>
            </div>
        );
    }
}
 
export default Header;
