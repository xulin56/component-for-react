import React from 'react';
import {autobind} from 'core-decorators';
import {Tabs,TabPane} from 'components/Tabs';
import {CommentList} from 'components/List';

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
      ],
    }
    tab(item,index){
      console.log(index);

    }
    render(){
        const {tab,listData} = this.state;
        return(
            <div className="test-hxl">
                <Tabs tab={tab} tabClick={(item,index)=>this.tab(item,index)} defaultActiveKey={2}>
                    <TabPane>content1</TabPane>
                    <TabPane>content2</TabPane>
                    <TabPane>content3</TabPane>
                    <TabPane>content4</TabPane>
                </Tabs>
                <div style={{width:'420px'}}>
                    <CommentList
                      url='/tradList'
                      listData={[
                        {
                          listImg : require('../../components/images/test.jpg'),
                          listTitle : '高圆圆',
                          description : '楼主顶我上去，给你一百个赞',

                        },
                        {
                          listImg : require('../../components/images/test.jpg'),
                          listTitle : '美女',
                          description : '楼主顶我上去，给你一百个赞',

                        },
                        {
                          listImg : require('../../components/images/test.jpg'),
                          listTitle : '校花',
                          description : '楼主顶我上去，给你一百个赞',
                          operate : [
                            {
                              label : '编辑',
                              render(row,index){
                                  console.log(row,index)
                              },
                            },
                            {
                              label : '查看',
                              render(row,index){
                                  console.log(row,index)
                              },
                            }
                          ]

                        },
                        {
                          listImg : require('../../components/images/test1.jpg'),
                          listTitle : '懒女',
                          description : '楼主顶我上去，给你一百个赞',
                          operate : [
                            {
                              label : '编辑',
                              render(row,index){
                                  console.log(row,index)
                              },
                            },
                            {
                              label : '查看',
                              render(row,index){
                                  console.log(row,index)
                              },
                            }
                          ]

                        },
                      ]}>
                    </CommentList>
                </div>

            </div>
        )
    }
}
