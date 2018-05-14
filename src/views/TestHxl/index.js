import React from 'react';
import {autobind} from 'core-decorators';
import {Tabs,TabPane} from 'components/Tabs';

@autobind
export default class TestHxl extends React.Component {
    state = {
      tab : [
        {
          icon : 'iconFont1',
          label : 'tab1'
        },
        {
          label : 'tab2'
        },
        {
          label : 'tab3'
        },
        {
          icon : 'iconFont4',
          label : 'tab4'
        }
      ]
    }
    tab(index){
      console.log(index)
    }
    render(){
        const {tab} = this.state;
        return(
            <div className="test-hxl">
                <Tabs tab={tab} tabClick={(item,index)=>this.tab(item,index)}>
                    <TabPane>content1</TabPane>
                    <TabPane>content2</TabPane>
                    <TabPane>content3</TabPane>
                    <TabPane>content4</TabPane>
                </Tabs>
            </div>
        )
    }
}
