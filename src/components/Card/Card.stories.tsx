import type { Meta } from "@storybook/react";
import Card from "./Card";
import { Babel, Play } from "../Icons";
import * as style from "../../app/page.css";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const DefaultTemplate: any = (args: any) => (
  <Card
    style={{
      width: "250px",
      backgroundColor: "#574480",
      margin: "0",
      padding: "20px",
    }}
    {...args}
  />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  children: (
    <div>
      <div className={style.displayFlex}>
        <Card.Icon>
          <Babel width="28" height="28" color="#999999" />
        </Card.Icon>
        <Card.Text>텍스트</Card.Text>
      </div>
      <Card.Number>숫자</Card.Number>
    </div>
  ),
};

const SecondTemplate: any = (args: any) => (
  <Card
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "250px",
      backgroundColor: "#574480",
      margin: "0",
      padding: "20px",
    }}
    {...args}
  />
);

export const Second = SecondTemplate.bind({});
Second.args = {
  children: (
    <>
      <div className={style.displayFlex}>
        <Card.Icon>
          <Babel width="28" height="28" color="#999999" />
        </Card.Icon>
        <Card.Text>텍스트</Card.Text>
      </div>
      <Card.Number>숫자</Card.Number>
    </>
  ),
};

const ThirdTemplate: any = (args: any) => (
  <Card
    style={{
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#574480",
      width: "343px",
      height: "208px",
    }}
    {...args}
  />
);

export const Third = ThirdTemplate.bind({});
Third.args = {
  children: (
    <>
      <Card.Number size="lg">03 : 20</Card.Number>
      <Card.Icon>
        <Play width="28" height="28" color="#fff" />
      </Card.Icon>
      <div className={style.displayFlex}></div>
    </>
  ),
};
