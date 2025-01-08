import type { Config } from "tailwindcss";
import sharedConfig from "@react-19-storybook-nextjs-vite/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
