// Disaster Relief Web Start Page Configuration
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Little Rock",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://abscdisasterrelief.org",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Disaster Relief",
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "Communication",
          links: [
            {
              name: "Outlook",
              url: "https://outlook.office.com/mail/",
              icon: "envelope",
              icon_color: palette.green,
            },
            {
              name: "Microsoft 365",
              url: "https://www.microsoft365.com/",
              icon: "brand-microsoft",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "DR Resources",
          links: [
            {
              name: "Arkansas Baptist DR",
              url: "https://abscdisasterrelief.org/",
              icon: "home-2",
              icon_color: palette.peach,
            },
            {
              name: "Entergy Storm Center",
              url: "https://www.entergynewsroom.com/storm-center/",
              icon: "cloud",
              icon_color: palette.red,
            },
            {
              name: "National Weather Service",
              url: "https://www.weather.gov/",
              icon: "cloud-sun",
              icon_color: palette.blue,
            },
            {
              name: "IDrive Arkansas",
              url: "https://www.idrivearkansas.com/",
              icon: "car",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Formstack",
          links: [
            {
              name: "Assistance Request",
              url: "https://sbdr.formstack.com/forms/assistance_request",
              icon: "form",
              icon_color: palette.peach,
            },
            {
              name: "Daily Report",
              url: "https://sbdr.formstack.com/forms/daily_report",
              icon: "file-text",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
