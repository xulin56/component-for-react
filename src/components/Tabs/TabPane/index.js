import React from 'react';
import propTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
export default class TabPane extends React.Component{
    static props = {
      tab : propTypes.string.isRequired,
    }
    render(){
        return(
                <div className="tabs-content">
                    {this.props.children}
                </div>
        )
    }
}
