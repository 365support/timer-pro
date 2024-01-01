import type { Meta } from "@storybook/react";
import Card from "./Card";
import { Babel, Play } from "../Icons";
import * as style from "../../app/page.css";
import * as cardStyles from "./Card.css";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const DefaultTemplate: any = (args: any) => (
  <Card className={cardStyles.cardStyle} {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: (
    <>
      <div className={style.displayFlex}>
        <Card.Icon>
          <Babel width="24" height="24" color="#999999" />
        </Card.Icon>
        <Card.SubTitle>운동</Card.SubTitle>
      </div>
      <Card.Title>0:20</Card.Title>
    </>
  ),
};

const SecondTemplate: any = (args: any) => (
  <Card className={cardStyles.secondCardStyle} {...args} />
);

export const Second = SecondTemplate.bind({});
Second.args = {
  children: (
    <>
      <div className={style.displayFlex}>
        <Card.Icon>
          <Babel width="24" height="24" color="#999999" />
        </Card.Icon>
        <Card.SubTitle>텍스트</Card.SubTitle>
      </div>
      <Card.Title>숫자</Card.Title>
    </>
  ),
};

const ThirdTemplate: any = (args: any) => (
  <Card className={cardStyles.thirdCardStyle} {...args} />
);

export const Third = ThirdTemplate.bind({});
Third.args = {
  children: (
    <>
      <Card.Title size="lg">03 : 20</Card.Title>
      <Card.Icon>
        <Play width="28" height="28" color="#fff" />
      </Card.Icon>
      <div className={style.displayFlex}></div>
    </>
  ),
};
