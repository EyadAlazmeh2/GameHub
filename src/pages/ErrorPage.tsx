import { Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Heading>Oh Opsss!!</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This Page is not found 404"
          : "Failed inexpected"}
      </Text>
    </>
  );
};

export default ErrorPage;
