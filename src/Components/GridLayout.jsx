import { Grid, GridItem, Text, Box, Center } from "@chakra-ui/react";
let GridLayout = () => {
  return (
    <Grid
      width="65%"
      margin="auto"
      height="80vh"
      marginTop="10vh"
      border="1px solid black"
      templateColumns="repeat(6,1fr)"
      templateRows="repeat(10,1fr)"
    >
      <GridItem
        border="1px solid black"
        rowStart={1}
        rowEnd={2}
        colStart={1}
        colEnd={3}
      >
        <Center>
          <Text p={4} fontWeight="bold">
            LOREM IPSUM
          </Text>
        </Center>
      </GridItem>
      <GridItem
        border="1px solid black"
        rowStart={1}
        rowEnd={2}
        colStart={3}
        colEnd={7}
        boxSizing="border-box"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        paddingRight="10%"
      >
        <Text fontWeight="bold">LINK1</Text>
      </GridItem>
      <GridItem
        border="1px solid black"
        rowStart={2}
        rowEnd={8}
        colStart={1}
        colEnd={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxSizing="border-box"
        padding="3%"
      >
        <Text fontWeight="bold">
          THIS IS SOME CONTENT ALIGNED IN THE CENTER VERTICALLY AND HORIZONTALLY
        </Text>
      </GridItem>
      <GridItem
        border="1px solid black"
        rowStart={2}
        rowEnd={8}
        colStart={4}
        colEnd={8}
      ></GridItem>
      <GridItem
        border="1px solid black"
        rowStart={8}
        rowEnd={11}
        colStart={1}
        colEnd={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRight="none"
      >
        <Text fontWeight="bold">
          THIS IS THE FOOTER CONTENT WHICH IS ALIGNED LEFT
        </Text>
      </GridItem>
      <GridItem
        border="1px solid black"
        rowStart={8}
        rowEnd={11}
        colStart={4}
        colEnd={8}
        borderLeft="none"
      ></GridItem>
    </Grid>
  );
};
export default GridLayout;
