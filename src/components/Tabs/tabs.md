## API

```html
<Tabs tab={tab} tabClick={(item,index)=>this.tab(item,index)} defaultActiveKey={2}>
    <TabPane>content1</TabPane>
    <TabPane>content2</TabPane>
    <TabPane>content3</TabPane>
    <TabPane>content4</TabPane>
</Tabs>
```

| 参数 | 说明 | 类型 | 默认值 | 必需 |
| --- | --- | --- | --- | --- |
| tab | 名称 | array | - | 是 |
| defaultActiveKey | 默认选择的tab | number | - | 否 |
| tabClick | 内容改变的回调，参数是index | Function(item,value) | - |   否|
