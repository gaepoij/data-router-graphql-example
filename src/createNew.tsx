import { gql } from "@apollo/client";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  ActionFunction,
  Form,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import apolloClient from "./client";
import { Ship, ShipsQuery } from "./generated/graphql";

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  const formPayload = Object.fromEntries(formData);
  console.log("FROM ACTION", formPayload);

  // Validation can be done here with zod or yup for example.
  const errors = {};

  // Intent can be used to describe which form / button this action originates.
  // for example we could have a route with multiple forms, like 2 modals with their own forms.
  // In each form we can describe intent on the form submit button.
  const intent = formPayload.intent;

  if (intent === "submit_new") {
    // Do graphql mutation to submit new.
  } else if (intent === "update") {
    // Update mutation
  } else if (intent === "delete") {
    // delete
  }

  // can be retrieved on component with useActionData to show validation / network -errors etc.
  return { errors };
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await apolloClient.query<ShipsQuery>({
    query: gql`
      query Ships {
        ships {
          model
          name
          type
          status
        }
      }
    `,
  });
  return data.ships;
};

function CreateNew() {
  const ships = useLoaderData() as Ship[];
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ height: "100%", maxWidth: "600px", margin: "250px auto" }}
    >
      <Typography variant="subtitle1">Some preloaded data</Typography>
      <Box mb={10}>
        {ships.map((ship, key) => {
          return <Box key={key}> {ship.name}</Box>;
        })}
      </Box>

      <Form method="post">
        <TextField
          name="name"
          sx={{ padding: 1 }}
          fullWidth
          id="outlined-basic"
          label="name"
          variant="outlined"
        />
        <TextField
          name="email"
          sx={{ padding: 1 }}
          fullWidth
          id="outlined-basic"
          label="info"
          variant="outlined"
        />
        <Button name="intent" value="submit_new" type="submit">
          Store new
        </Button>
      </Form>
    </Box>
  );
}

export default CreateNew;
