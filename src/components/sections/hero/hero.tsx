import BgGradient from "@/components/bg-gradient";
import Text from "@/components/text";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <header className="relative py-20 container">
      <Text size="h1">
        {t("intro")}{" "}
        <Text variant="gradient" className="font-medium">
          {t("name")}
        </Text>
        ,
        <br />
        {t("profession")}
      </Text>

      <BgGradient top={8} right={-5} size={20} color="red-500" opacity={0.1} />
      <BgGradient top={5} left={1} size={15} color="orange-500" opacity={0.2} />
    </header>
  );
};

export default Hero;
