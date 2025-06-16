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
      <Text size="p" className="mb-10">
        {t("description")}
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-2xl bg-accent/30 p-6 transition-all duration-300 hover:bg-accent/50 hover:scale-105">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-1 flex items-center justify-center">
              <Design />
            </div>
            <div>
              <Text size="h3" className="mb-2">
                {t("design")}
              </Text>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-accent/30 p-6 transition-all duration-300 hover:bg-accent/50 hover:scale-105">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-1 flex items-center justify-center">
              <Animation />
            </div>
            <div>
              <Text size="h3" className="mb-2">
                {t("animation")}
              </Text>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-accent/30 p-6 transition-all duration-300 hover:bg-accent/50 hover:scale-105">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-1 flex items-center justify-center">
              <Responsive />
            </div>
            <div>
              <Text size="h3" className="mb-2">
                {t("responsive")}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;
