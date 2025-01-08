// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@react-19-storybook-nextjs-vite/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
