import React from 'react';
import { Layout, Body, Nav, Accordion, AccordionItem, Group} from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Accordion"/>
        <Body slot="body">
          <Group>
            <Accordion>
              <AccordionItem title="标题文字" open={true}>
                如果有一天我能够拥有一个大果园，
                我愿放下所有追求做个农夫去种田，
                每一个早晨我耕耘在绿野田园，
                每一个黄昏我守望在乡间的麦田。
                我会把忧虑都融化在夕阳里，
                让孤独的心等待秋收的欢喜。
              </AccordionItem>
              <AccordionItem title="标题文字">
                如果有一天我能够拥有一个大果园，
                我愿放下所有追求做个农夫去种田，
                每一个早晨我耕耘在绿野田园，
                每一个黄昏我守望在乡间的麦田。
                我会把忧虑都融化在夕阳里，
                让孤独的心等待秋收的欢喜。
              </AccordionItem>
            </Accordion>
            <br />
            <Accordion mutex={false}>
              <AccordionItem title="标题文字" open={true}>
                如果有一天我能够拥有一个大果园，
                我愿放下所有追求做个农夫去种田，
                每一个早晨我耕耘在绿野田园，
                每一个黄昏我守望在乡间的麦田。
                我会把忧虑都融化在夕阳里，
                让孤独的心等待秋收的欢喜。
              </AccordionItem>
              <AccordionItem title="标题文字">
                如果有一天我能够拥有一个大果园，
                我愿放下所有追求做个农夫去种田，
                每一个早晨我耕耘在绿野田园，
                每一个黄昏我守望在乡间的麦田。
                我会把忧虑都融化在夕阳里，
                让孤独的心等待秋收的欢喜。
              </AccordionItem>
            </Accordion>
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;
