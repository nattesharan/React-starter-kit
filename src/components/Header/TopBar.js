import React,{Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TopBar.css';
class TopBar extends Component{
    render(){
        return(
            <div id={s.toolbar}>
            This is Toolbar
            </div>
        
        );
    }
}