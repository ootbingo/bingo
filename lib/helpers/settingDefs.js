export const settingDefs = [
  {
    name: "General",
    settings: [
      {
        id: "info-font",
        label: "Font",
        injectCss: true,
        defaultValue: '"Roboto"',
        type: "font",
      },
      {
        id: "info-text-size",
        label: "Text size",
        injectCss: true,
        defaultValue: "13",
        unit: "px",
        type: "number",
      },
      {
        id: "info-line-height",
        label: "Line height",
        injectCss: true,
        defaultValue: 1,
        type: "number",
      },
      {
        id: "page-background-color",
        label: "Page background color",
        injectCss: true,
        defaultValue: "#111111",
        type: "color",
      },
      {
        id: "info-text-color",
        label: "Text color",
        injectCss: true,
        defaultValue: "#bec7d2",
        type: "color",
      },
      {
        id: "info-header-text-color",
        label: "Header text color",
        injectCss: true,
        defaultValue: "#e09456",
        type: "color",
      },
      {
        id: "info-emphasis-text-color",
        label: "Emphasis text color",
        injectCss: true,
        defaultValue: "#f7e279",
        type: "color",
      },
      {
        id: "show-filename",
        label: "Show random filename",
        injectClass: true,
        defaultValue: false,
        type: "boolean",
      },
      {
        id: "language",
        label: "Language",
        defaultValue: null,
        type: "language",
      },
    ],
  },
  {
    name: "Board",
    display: "board",
    settings: [
      {
        name: "Cell",
        settings: [
          {
            id: "board-cell-font",
            label: "Font",
            injectCss: true,
            defaultValue: '"Roboto"',
            type: "font",
          },

          {
            id: "board-cell-line-height",
            label: "Line height",
            injectCss: true,
            defaultValue: 1,
            type: "number",
          },
          {
            id: "board-cell-text-size",
            label: "Text size",
            injectCss: true,
            defaultValue: 14,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-height",
            label: "Cell height",
            injectCss: true,
            defaultValue: 90,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-width",
            label: "Cell width",
            injectCss: true,
            defaultValue: 110,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-padding",
            label: "Padding",
            injectCss: true,
            defaultValue: 5,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-border-width",
            label: "Border width",
            injectCss: true,
            defaultValue: 1,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-text-color",
            label: "Text color",
            injectCss: true,
            defaultValue: "#bec7d2",
            type: "color",
          },
          {
            id: "board-cell-border-color",
            label: "Border color",
            injectCss: true,
            defaultValue: "#424242",
            type: "color",
          },
          {
            id: "board-cell-background-color",
            label: "Background color",
            injectCss: true,
            defaultValue: "#000000",
            type: "color",
          },
          {
            id: "board-cell-shadow-opacity",
            label: "Shadow opacity",
            injectCss: true,
            defaultValue: 0.6,
            type: "number",
          },
          {
            id: "board-cell-green-background-color",
            label: "Green background color",
            injectCss: true,
            defaultValue: "#005511",
            type: "color",
          },
          {
            id: "board-cell-red-background-color",
            label: "Red background color",
            injectCss: true,
            defaultValue: "#550011",
            type: "color",
          },
          {
            id: "board-cell-hover-background-color",
            label: "Hover background color",
            injectCss: true,
            defaultValue: "#001a36",
            type: "color",
          },
          {
            id: "board-cell-hover-text-color",
            label: "Hover text color",
            injectCss: true,
            defaultValue: "white",
            type: "color",
          },
          {
            id: "board-cell-hover-green-background-color",
            label: "Hover green background color",
            injectCss: true,
            defaultValue: "#007722",
            type: "color",
          },
          {
            id: "board-cell-hover-red-background-color",
            label: "Hover red background color",
            injectCss: true,
            defaultValue: "#770022",
            type: "color",
          },
          {
            id: "board-cell-show-star",
            label: "Allow starring goals",
            injectClass: true,
            defaultValue: true,
            type: "boolean",
          },
          {
            id: "board-cell-star-color",
            label: "Star color",
            injectCss: true,
            defaultValue: "#FFFFFF",
            type: "color",
          },
          {
            id: "board-cell-star-size",
            label: "Star size",
            injectCss: true,
            defaultValue: 16,
            unit: "px",
            type: "number",
          },
          {
            id: "board-cell-star-margin",
            label: "Star margin",
            injectCss: true,
            defaultValue: 8,
            unit: "px",
            type: "number",
          },
        ],
      },
      {
        name: "Header",
        settings: [
          {
            id: "board-header-font",
            label: "Font",
            injectCss: true,
            defaultValue: '"Roboto"',
            type: "font",
          },
          {
            id: "board-header-line-height",
            label: "Line height",
            injectCss: true,
            defaultValue: 1,
            type: "number",
          },
          {
            id: "board-header-height",
            label: "Header height",
            injectCss: true,
            defaultValue: 31,
            type: "number",
            unit: "px",
          },
          {
            id: "board-header-width",
            label: "Header width",
            injectCss: true,
            defaultValue: 45,
            type: "number",
            unit: "px",
          },
          {
            id: "board-header-text-size",
            label: "Text size",
            injectCss: true,
            defaultValue: 10,
            type: "number",
            unit: "px",
          },
          {
            id: "board-header-text-color",
            label: "Text color",
            injectCss: true,
            defaultValue: "#3c70df",
            type: "color",
          },
          {
            id: "board-header-border-color",
            label: "Border color",
            injectCss: true,
            defaultValue: "#0a245a",
            type: "color",
          },
          {
            id: "board-header-background-color",
            label: "Background color",
            injectCss: true,
            defaultValue: "#000811",
            type: "color",
          },
          {
            id: "board-header-shadow-opacity",
            label: "Shadow opacity",
            injectCss: true,
            defaultValue: 0.6,
            type: "number",
          },
          {
            id: "board-header-hover-border-color",
            label: "Hover border color",
            injectCss: true,
            defaultValue: "#1448b3",
            type: "color",
          },
          {
            id: "board-header-hover-background-color",
            label: "Hover background color",
            injectCss: true,
            defaultValue: "#1448b3",
            type: "color",
          },
          {
            id: "board-header-hover-text-color",
            label: "Hover text color",
            injectCss: true,
            defaultValue: "#ffffff",
            type: "color",
          },
        ],
      },
      {
        name: "Tracker",
        settings: [
          {
            id: "board-tracker-token-size",
            label: "Max token size",
            injectCss: true,
            defaultValue: 16,
            type: "number",
            unit: "px",
          },
          {
            id: "board-tracker-counter-icon-size",
            label: "Counter icon size",
            injectCss: true,
            defaultValue: 24,
            type: "number",
            unit: "px",
          },
          {
            id: "board-tracker-counter-text-size",
            label: "Counter text size",
            injectCss: true,
            defaultValue: 14,
            type: "number",
            unit: "px",
          },
          {
            id: "board-tracker-show-for-normal-mode",
            label: "Show in normal/short mode",
            injectClass: true,
            defaultValue: false,
            type: "boolean",
          },
          {
            id: "board-tracker-show-for-blackout-mode",
            label: "Show in blackout mode",
            injectClass: true,
            defaultValue: true,
            type: "boolean",
          },
          {
            id: "board-tracker-animation-time",
            label: "Animation time",
            defaultValue: 0.2,
            type: "number",
            unit: "s",
          },
        ],
      },
    ],
  },
  {
    name: "Row Popout",
    display: "row-popout",
    settings: [
      {
        name: "Cell",
        settings: [
          {
            id: "row-popout-cell-font",
            label: "Font",
            injectCss: true,
            defaultValue: '"Roboto"',
            type: "font",
          },
          {
            id: "row-popout-cell-line-height",
            label: "Line height",
            injectCss: true,
            defaultValue: 1,
            type: "number",
          },
          {
            id: "row-popout-cell-text-size",
            label: "Text size",
            injectCss: true,
            defaultValue: 19,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-height",
            label: "Cell height",
            injectCss: true,
            defaultValue: 87,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-width",
            label: "Cell width",
            injectCss: true,
            defaultValue: 220,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-padding",
            label: "Padding",
            injectCss: true,
            defaultValue: 10,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-border-width",
            label: "Border width",
            injectCss: true,
            defaultValue: 1,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-text-color",
            label: "Text color",
            injectCss: true,
            defaultValue: "#FFFFFF",
            type: "color",
          },
          {
            id: "row-popout-cell-border-color",
            label: "Border color",
            injectCss: true,
            defaultValue: "#666",
            type: "color",
          },
          {
            id: "row-popout-cell-background-color",
            label: "Background color",
            injectCss: true,
            defaultValue: "#000000",
            type: "color",
          },
          {
            id: "row-popout-cell-shadow-opacity",
            label: "Shadow opacity",
            injectCss: true,
            defaultValue: 0.6,
            type: "number",
          },
          {
            id: "row-popout-cell-green-background-color",
            label: "Green background color",
            injectCss: true,
            defaultValue: "#005511",
            type: "color",
          },
          {
            id: "row-popout-cell-red-background-color",
            label: "Red background color",
            injectCss: true,
            defaultValue: "#550011",
            type: "color",
          },
          {
            id: "row-popout-cell-hover-background-color",
            label: "Hover background color",
            injectCss: true,
            defaultValue: "#000000",
            type: "color",
          },
          {
            id: "row-popout-cell-hover-text-color",
            label: "Hover text color",
            injectCss: true,
            defaultValue: "white",
            type: "color",
          },
          {
            id: "row-popout-cell-hover-green-background-color",
            label: "Hover green background color",
            injectCss: true,
            defaultValue: "#005511",
            type: "color",
          },
          {
            id: "row-popout-cell-hover-red-background-color",
            label: "Hover red background color",
            injectCss: true,
            defaultValue: "#550011",
            type: "color",
          },
          {
            id: "row-popout-cell-show-star",
            label: "Allow starring goals",
            injectClass: true,
            defaultValue: false,
            type: "boolean",
          },
          {
            id: "row-popout-cell-star-color",
            label: "Star color",
            injectCss: true,
            defaultValue: "#FFFFFF",
            type: "color",
          },
          {
            id: "row-popout-cell-star-size",
            label: "Star size",
            injectCss: true,
            defaultValue: 16,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-cell-star-margin",
            label: "Star margin",
            injectCss: true,
            defaultValue: 8,
            unit: "px",
            type: "number",
          },
        ],
      },
      {
        name: "Header",
        settings: [
          {
            id: "row-popout-header-font",
            label: "Font",
            injectCss: true,
            defaultValue: '"Roboto"',
            type: "font",
          },
          {
            id: "row-popout-header-text-size",
            label: "Text size",
            injectCss: true,
            defaultValue: 19,
            type: "number",
            unit: "px",
          },
          {
            id: "row-popout-header-text-color",
            label: "Text color",
            injectCss: true,
            defaultValue: "#FFFFFF",
            type: "color",
          },
          {
            id: "row-popout-header-height",
            label: "Header height",
            injectCss: true,
            defaultValue: 26,
            unit: "px",
            type: "number",
          },
          {
            id: "row-popout-header-border-color",
            label: "Border color",
            injectCss: true,
            defaultValue: "#1448B3",
            type: "color",
          },
          {
            id: "row-popout-header-background-color",
            label: "Background color",
            injectCss: true,
            defaultValue: "#1448B3",
            type: "color",
          },
          {
            id: "row-popout-header-shadow-opacity",
            label: "Shadow opacity",
            injectCss: true,
            defaultValue: 0.6,
            type: "number",
          },
          {
            id: "row-popout-header-hover-border-color",
            label: "Hover border color",
            injectCss: true,
            defaultValue: "#1448b3",
            type: "color",
          },
          {
            id: "row-popout-header-hover-background-color",
            label: "Hover background color",
            injectCss: true,
            defaultValue: "#1448b3",
            type: "color",
          },
          {
            id: "row-popout-header-hover-text-color",
            label: "Hover text color",
            injectCss: true,
            defaultValue: "#ffffff",
            type: "color",
          },
        ],
      },
      {
        name: "Tracker",
        settings: [
          {
            id: "row-popout-tracker-token-size",
            label: "Max token size",
            injectCss: true,
            defaultValue: 32,
            type: "number",
            unit: "px",
          },
          {
            id: "row-popout-tracker-counter-icon-size",
            label: "Counter icon size",
            injectCss: true,
            defaultValue: 32,
            type: "number",
            unit: "px",
          },
          {
            id: "row-popout-tracker-counter-text-size",
            label: "Counter text size",
            injectCss: true,
            defaultValue: 19,
            type: "number",
            unit: "px",
          },
          {
            id: "row-popout-tracker-show",
            label: "Show tracker",
            injectClass: true,
            defaultValue: true,
            type: "boolean",
          },
          {
            id: "row-popout-tracker-animation-time",
            label: "Animation time",
            injectCss: true,
            defaultValue: 300,
            type: "number",
            unit: "ms",
          },
        ],
      },
    ],
  },
  {
    name: "Tracker",
    settings: [
      {
        id: "tracker-show-counter-denominator",
        label: "Show counter denominator",
        injectClass: true,
        defaultValue: false,
        type: "boolean",
      },
    ],
  },
];
