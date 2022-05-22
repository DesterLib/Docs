/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "Introduction",
      id: "intro",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "doc",
          label: "Local Deployement",
          id: "getting-started/local-deployement",
        },
        {
          type: "doc",
          label: "Heroku Deployement",
          id: "getting-started/deployement-on-heroku",
        },
        {
          type: "doc",
          label: "Dester Config",
          id: "getting-started/deployement-on-heroku",
        },
      ],
    },
    {
      type: "category",
      label: "Additional Info",
      items: [
        {
          type: "doc",
          label: "Terms and Conditions",
          id: "additional-info/terms-and-conditions",
        },
        {
          type: "doc",
          label: "Privacy",
          id: "additional-info/privacy-policy",
        },
      ],
    },
    {
      type: "doc",
      label: "The Team",
      id: "team",
    },
  ],
};

module.exports = sidebars;
