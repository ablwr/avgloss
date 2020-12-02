export default {
  colors: {
    text: "#1D2D49",
    headerBackground: "#C5E7DB",
    headerText: "#1D2D49",
    // top lvl
    paperBackgroundColor: "#C5E7DB",
    paperHoverBackgroundColor: "#fcfcfc",
    paperHeadingColor: "#1D2D49",
    paperHoverHeadingColor: "#1D2D49",
    paperBorderColor: "transparent",
    paperDescriptionColor: "rgb(86, 88, 103)",
    // middle lvl
    collectionBackgroundColor: "#C5E7DB",
    collectionHeading: "#282a36",
    collectionDescription: "#C5E7DB",
    breadcrumbLinkTextColor: "#DDB52F",
    breadcrumbHoverLinkTextColor: "#DDB52F",
    breadcrumbTextColor: "#DDB52F",
    // article lvl (duh)
    articleTextColor: "#1D2D49",
    articleDescriptionColor: "#1D2D49",
    background: "#1D2D49",
    primary: "#639",
    secondary: "#ff6347",
    muted: "#8f919d",
    searchTextColor: "#282a36",
    searchTextFocusColor: "#3a3c4c",
    searchTextPlaceholderColor: "#666",
    searchTextFocusPlaceholderColor: "black",
    comboboxColor: "black",
    iconColor: "#EFBB49",
    logoColor: "#EFBB49",
    footerTextColor: "#a8b6c2",
    footerTextHoverColor: "#a8b6c2",
  },
  // radii: [0, 2, 4, 8],
  fonts: {
    body: "Yrsa, monospace",
    heading: "Exo, monospace",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    small: 1.2,
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  /* Styles for MDX */
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    h2: {
      fontStyle: "italic",
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
    },
    blockquote: {
      marginLeft: "1.75rem",
    },
    // more styles can be added as needed
  },
}
