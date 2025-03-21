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
      name: "ABDR",
      background_url: "src/img/banners/abdr-web-sidebar.png",
      categories: [
        {
          name: "Work Space",
          links: [
            {
              name: "Outlook",
              url: "https://outlook.office.com/mail/",
              icon: "mail",
              icon_color: palette.green,
            },
			{
              name: "Excel",
              url: "https://www.microsoft365.com/launch/excel?auth=2",
              icon: "file-spreadsheet",
              icon_color: palette.green,
            },
            {
              name: "Microsoft 365",
              url: "https://www.microsoft365.com/",
              icon: "world",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "National Weather Service",
              url: "https://www.weather.gov/",
              icon: "windsock",
              icon_color: palette.blue,
            },
            {
              name: "Entergy Storm Center",
              url: "https://www.entergynewsroom.com/storm-center/",
              icon: "bolt-off",
              icon_color: palette.red,
            },
            {
              name: "National Hurricane Center",
              url: "https://www.nhc.noaa.gov/",
              icon: "storm",
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
              icon: "file-text",
              icon_color: palette.yellow,
            },
            {
              name: "Daily Report",
              url: "https://sbdr.formstack.com/forms/daily_report",
              icon: "file-text",
              icon_color: palette.yellow,
            },
            {
              name: "Dropbox Forms",
              url: "https://www.dropbox.com/sh/99ox606a4twzug7/AAB3dMIIOD4QC3qkQuE5yxnQa?dl=0",
              icon: "folder-down",
              icon_color: palette.blue,
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
