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
          label: "Prerequisite Setup",
          id: "getting-started/prerequisite-setup",
        },
        {
          type: "doc",
          label: "Local Deployement",
          id: "getting-started/local-deployement",
        },
        {
          type: "doc",
          label: "Heroku Deployement",
          id: "getting-started/heroku-deployment",
        },
        {
          type: "doc",
          label: "Desktop Application",
          id: "getting-started/desktop-application",
        },
      ],
    },
    {
      type: "category",
      label: "Building",
      items: [
        {
          type: "doc",
          label: "Backend",
          id: "building/backend",
        },
        {
          type: "doc",
          label: "Frontend",
          id: "building/frontend",
        },
        {
          type: "doc",
          label: "Desktop",
          id: "building/desktop",
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
      label: "Screenshots",
      id: "screenshots",
    },
    {
      type: "doc",
      label: "The Team",
      id: "the-team",
    },
  ],
};

module.exports = sidebars;
