import Text from "@/components/text";
import { useTranslations } from "next-intl";
import Animation from "./animation";
import Design from "./design";
import Responsive from "./responsive";

const WhatIdo = () => {
  const t = useTranslations("WhatIdo");

  return (
    <section className="py-20 container">
      <Text size="h2" variant="h2">
        {t("title")}
      </Text>
      <div className="flex flex-row flex-wrap items-center justify-center my-8 w-full gap-4 text-white">
        <div className="rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-red-500 to-orange-600 flex flex-col">
          <Design />
          <div className="h-1/4 text-center">
            <h3 className="text-lg font-bold">{t("design")}</h3>
          </div>
        </div>

        <div className="rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-orange-600 to-orange-500 flex flex-col">
          <Animation />
          <div className="h-1/4 text-center">
            <h3 className="text-lg font-bold">{t("animation")}</h3>
          </div>
        </div>

        <div className="rounded-3xl h-[230px] max-sm:w-full sm:aspect-square bg-gradient-to-br from-orange-500 to-orange-400 flex flex-col pt-6 px-6 overflow-hidden">
          <Responsive />
          <div className="h-1/4 text-center mt-4">
            <h3 className="text-lg font-bold">{t("responsive")}</h3>
            {t("responsiveNote")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;
