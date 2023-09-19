import { Icon, Text, TouchFiller } from "@components";
import { Language as LanguageType, switchLanguage } from "@locale";
import { useAppTheme } from "@theme";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text as TextRN, View } from "react-native";
import { Button } from "react-native-paper";

export default function TabOneScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <TextRN className="text-red-700">Hey</TextRN>
      <Icon name="car" size={30} color={"green"} />
      <LanguageItem languageShort="en" languageTitle="English" />
      <LanguageItem languageShort="de" languageTitle="Deutsch" />
      <LanguageItem languageShort="ar" languageTitle="العربية" />

      <View
        className="m-1 rounded-full bg-gray-400 overflow-hidden self-stretch"
        style={{
          backgroundColor: "green",
        }}
      >
        <Text
          className="m-5 text-center font-bold text-[20px]"
          style={{
            color: "black",
          }}
        >
          {t("screen.home")}
        </Text>
        <TouchFiller onPress={() => {}} />
      </View>

      <Button
        onPress={() => {
          console.log("hi");
        }}
      >
        <Text>Hey</Text>
      </Button>
    </View>
  );
}

const LanguageItem = ({
  languageTitle,
  languageShort,
}: {
  languageTitle: string;
  languageShort: LanguageType;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      className="m-1 rounded-full bg-gray-400 overflow-hidden self-stretch"
      style={{
        backgroundColor: colors._surface,
      }}
    >
      <Text
        className="m-5 text-center font-bold text-[20px]"
        style={{
          color: colors._onSurface,
        }}
      >
        {languageTitle}
      </Text>
      <TouchFiller
        onPress={() => {
          console.log("wassup");
          switchLanguage(languageShort);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
