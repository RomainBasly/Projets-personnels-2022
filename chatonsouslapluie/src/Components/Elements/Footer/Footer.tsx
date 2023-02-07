import * as React from 'react';
import classes from './classes.module.scss'


interface FooterProps {}
 
interface FooterState {}
 
class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <div className={classes["logo"]}>footer</div>
         );
    }
}
 
export default Footer;