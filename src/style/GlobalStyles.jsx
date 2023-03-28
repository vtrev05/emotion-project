import { Global } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          "*": {
            fontFamily: "Regular",
            boxSizing: "border-box",
          },
          "html,body": {
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background,
            color: theme.palette.text,
          },
          "h1": {
               color: theme.palette.title
          },
          "p": {
            color: theme.palette.text
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
        },
       
      ]}
    />
  );
};

export default GlobalStyles;