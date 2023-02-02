export default {
    title: "Design System",
    description: "Usage documentation for the Design System.",
    lastUpdated: true,
    themeConfig: {
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023 Daniel Tedman",
        },
        editLink: {
            pattern:
                "https://github.com/dbtedman/design-system/tree/main/docs/:path",
            text: "Suggest changes to this page",
        },
        sidebar: [
            {
                text: "Getting Started",
                link: "/getting-started",
            },
            {
                text: "Foundations",
                items: [
                    {
                        text: "Colours",
                        link: "/foundations/colours",
                    },
                    {
                        text: "Typography",
                        link: "/foundations/typography",
                    },
                    {
                        text: "Logos",
                        link: "/foundations/logos",
                    },
                    {
                        text: "Icons",
                        link: "/foundations/icons",
                    },
                    {
                        text: "Shadows and Blurs",
                        link: "/foundations/shadows-blurs",
                    },
                    {
                        text: "Grids and Spacing",
                        link: "/foundations/grids-spacing",
                    },
                    {
                        text: "Error Pages",
                        link: "/foundations/error-pages",
                    },
                ],
            },
            {
                text: "Components",
                items: [
                    {
                        text: "Buttons",
                        link: "/components/buttons",
                    },
                    {
                        text: "Forms",
                        link: "/components/forms",
                    },
                ],
            },
            {
                text: "Contributing",
                link: "/contributing",
            },
        ],
    },
};
