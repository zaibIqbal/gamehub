import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An expected error occur."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
