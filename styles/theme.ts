import { extendTheme } from "@chakra-ui/react";


const styles = {
  global: {
    body: {
      bg: "gray.50",
    },
  },
};



export const theme = extendTheme({
  styles
});

export default theme;
