module.exports = {
	framework: { name: "@storybook/nextjs", options: {} },
	stories: [
		"../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
		"../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-onboarding",
		"@storybook/addon-vitest",
	],
	staticDirs: ["../public"],
};
