import { useRouter } from "next/navigation";
import { theme } from "@/styles/theme.css";
import { Rubik } from "@/styles/font.css";
import Text from "@/components/Text/Text";
import Header from ".";

const MainHeader = () => {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/");
  };

  return (
    <Header>
      <Header.Left onClick={moveToHome}>
        <Text
          color={theme.color.primary10}
          family={Rubik}
          size={theme.fontSize.title.md}
          weight="bold"
          lineHeight="30px"
        >
          Timer Pro
        </Text>
      </Header.Left>
    </Header>
  );
};

export default MainHeader;
