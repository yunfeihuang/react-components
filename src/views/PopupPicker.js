import React from 'react';
import { Layout, Nav, Body, Message, PopupPicker, Group, Cell, Switch} from '@/components'

let citys = {
  '01': [
    {
      value: '0101',
      label: '深圳市'
    },
    {
      value: '0102',
      label: '广州市'
    }
  ],
  '02': [
    {
      value: '0201',
      label: '南宁市'
    },
    {
      value: '0202',
      label: '柳州市'
    }
  ]
}

let areas = {
  '0101': [
    {
      value: '010101',
      label: '南山区'
    },
    {
      value: '010102',
      label: '福田区'
    },
    {
      value: '010103',
      label: '罗湖区'
    },
    {
      value: '010104',
      label: '宝安区'
    },
    {
      value: '010105',
      label: '龙华区'
    },
    {
      value: '010106',
      label: '龙岗区'
    },
    {
      value: '010107',
      label: '盐田区'
    },
    {
      value: '010108',
      label: '坪山区'
    },
    {
      value: '010109',
      label: '光明区'
    }
  ],
  '0102': [
    {
      value: '010201',
      label: '荔湾区'
    },
    {
      value: '010202',
      label: '天河区'
    },
    {
      value: '010203',
      label: '海珠区'
    },
    {
      value: '010204',
      label: '番禺区'
    },
    {
      value: '010205',
      label: '黄埔区'
    },
    {
      value: '010206',
      label: '白云区'
    },
    {
      value: '010207',
      label: '南沙区'
    },
    {
      value: '010208',
      label: '花都区'
    },
    {
      value: '010209',
      label: '增城区'
    },
    {
      value: '010210',
      label: '从化区'
    }
  ],
  '0201': [
    {
      value: '020101',
      label: '兴宁区'
    },
    {
      value: '020102',
      label: '江南区'
    },
    {
      value: '020103',
      label: '青秀区'
    },
    {
      value: '020104',
      label: '良庆区'
    },
    {
      value: '020105',
      label: '邕宁区'
    }
  ],
  '0202': [
    {
      value: '020201',
      label: '柳北区'
    },
    {
      value: '020202',
      label: '柳南区'
    },
    {
      value: '020203',
      label: '城中区'
    },
    {
      value: '020204',
      label: '柳江区'
    }
  ]
}

class Demo extends React.Component {
  state = {
    value: '',
    pickerOpen: false,
    pickers: [
      {
        value: '010101',
        options: areas['0101']
      }
    ],
    value2: '',
    pickerAddressOpen: false,
    pickers2: [
      {
        value: '01',
        options: [
          {
            value: '01',
            label: '广东省'
          },
          {
            value: '02',
            label: '广西壮族自治区'
          }
        ]
      },
      {
        value: '0101',
        options: citys['01']
      },
      {
        value: '010101',
        options: areas['0101']
      }
    ]
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="PopupPicker"/>
        <Body slot="body">
          <Message>注意：此示例要在移动设备体验哦~</Message>
          <Group>
            <Cell arrow={false} title={"地区 picker："+this.state.value}>
              <Switch value={this.state.pickerOpen} onChange={this.handleSwitchChange.bind(this)}/>
            </Cell>
            <Cell arrow={false} title={"地址级联 picker："+this.state.value2}>
              <Switch value={this.state.pickerAddressOpen} onChange={this.handleSwitchChange2.bind(this)}/>
            </Cell>
          </Group>
        </Body>
        <PopupPicker
          open={this.state.pickerOpen}
          pickers={this.state.pickers}
          onClose={this.handleSwitchChange.bind(this, false)}
          onChange={this.handleConfirm.bind(this)}
          />
        <PopupPicker
          open={this.state.pickerAddressOpen}
          pickers={this.state.pickers2}
          onClose={this.handleSwitchChange2.bind(this, false)}
          onPickerChange={this.handleChangeAddressPicker.bind(this)}
          onChange={this.handleConfirmAddress.bind(this)}
          />
      </Layout>
    );
  }
  handleSwitchChange (value) {
    console.log('value', value)
    this.setState({
      pickerOpen: value
    })
  }
  handleSwitchChange2 (value) {
    this.setState({
      pickerAddressOpen: value
    })
  }
  handleConfirm (value) {
    let val = value.map(item => item.value)
    this.setState({
      value: val
    })
    console.log('你选中了值：' + val)
    // this.$toast({message: '你选中了值：' + val})
  }
  handleChangeAddressPicker (value, index) {
    let pickers = JSON.parse(JSON.stringify(this.state.pickers2))
    if (index === 0) {
      pickers[1].options = citys[value]
      pickers[1].value = citys[value][0].value
      pickers[2].options = areas[pickers[1].value]
      pickers[2].value = areas[pickers[1].value][0].value
    }
    if (index === 1) {
      pickers[2].options = areas[value]
      pickers[2].value = areas[value][0].value
    }
    pickers[index].value = value
    this.setState({
      pickers2: pickers
    })
  }
  handleConfirmAddress (value) {
    let val = value.map(item => item.value)
    this.setState({
      value2: val
    })
    console.log('你选中了值：' + val)
    // this.$toast({message: '你选中了值：' + val})
  }
}

export default Demo;
