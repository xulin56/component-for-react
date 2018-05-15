import React from 'react';
import propTypes from 'prop-types';
import {autobind} from 'core-decorators';
import './tabs.less';

@autobind
export default class Tabs extends React.Component{
    static props = {
        tab : propTypes.array.isRequired,
        tabClick : propTypes.func,
        defaultActiveKey : propTypes.number,
    }
    componentDidMount() {
      if(this.props.defaultActiveKey){
        this.setState({
            showItem : this.props.defaultActiveKey
        })
      }
    }
    state = {
      showItem : 0
    }
    render(){
        const {tab,tabClick} = this.props;
        const {showItem} = this.state;
        return(
            <div className="tabs">
                <ul className="tabs-nav">
                    {
                      tab.map((item,index)=>{
                        return (
                          <li key={index} onClick={()=>{this.setState({showItem:index});tabClick && tabClick(item,index)}} className={showItem==index?'active':''}>
                              {
                                item.icon
                                ?
                                <span className={item.icon}></span>
                                :
                                ''
                              }
                              <span>{item.label}</span>
                          </li>
                        )
                      })
                    }
                </ul>
                <div className='tabs-content'>
                    {this.props.children[showItem]}
                </div>
            </div>
        )
    }
}
