import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@material-ui/core";

function ContactForm(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20,
      }}
    >
      <form style={{ width: "50%" }}>
        <h1>Contact Form</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your name.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="message">Message</InputLabel>
          <Input
            id="email"
            aria-describedby="my-helper-text"
            multiline
            rows={10}
          />
          <FormHelperText id="my-helper-text">
            Please send us your query.
          </FormHelperText>
        </FormControl>

        <Button variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
