import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

export default function ContactForm({ setCard }) {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    contact: "",
    infoText: "",
    error: {
      nameError: "",
      dobError: "",
      emailError: "",
      contactError: "",
      infoTextError: "",
    },
    formValid: false,
  });

  let currentDate = new Date().toJSON().slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateName(form.name) &&
      validateDob(form.dob) &&
      validateEmail(form.email) &&
      validateContact(form.contact) &&
      validateInfoText(form.infoText)
    ) {
      console.log("form is validated");
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      validateName(e.target.value);
    }
    if (e.target.id === "dob") {
      validateDob(e.target.value);
    }
    if (e.target.id === "email") {
      validateEmail(e.target.value);
    }
    if (e.target.id === "contact") {
      validateContact(e.target.value);
    }
    if (e.target.id === "infoText") {
      validateInfoText(e.target.value);
    }
  };

  const validateName = (name) => {
    let formValid = form.formValid;
    let nameError = form.error.nameError;
    let namePattern = /^[a-zA-Z]+$/;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This is a required field";
    } else if (!namePattern.test(name)) {
      formValid = false;
      nameError = "Name can only contain alphabetical characters";
    } else if (name.trim().length <= 3) {
      formValid = false;
      nameError = "Name must be at least 3 characters";
    } else {
      formValid = true;
      nameError = "";
    }

    setForm({
      ...form,
      name,
      formValid,
      error: { ...form.error, nameError },
    });
    setCard({ ...form });

    return formValid;
  };

  const validateDob = (dob) => {
    let formValid = form.formValid;
    let dobError = form.error.dobError;

    if (dob.trim() === "") {
      formValid = false;
      dobError = "This is a required field";
    } else if (dob.replaceAll("-", "") > currentDate.replaceAll("-", "")) {
      formValid = false;
      dobError = "DOB cannot be later than current date";
    } else {
      formValid = true;
      dobError = "";
    }

    setForm({
      ...form,
      dob,
      formValid,
      error: { ...form.error, dobError },
    });

    return formValid;
  };

  const validateEmail = (email) => {
    let formValid = form.formValid;
    let emailError = form.error.emailError;
    let emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (email.trim() === "") {
      formValid = false;
      emailError = "This is a required field";
    } else if (!emailPattern.test(email)) {
      formValid = false;
      emailError = "Invalid email entered";
    } else {
      formValid = true;
      emailError = "";
    }

    setForm({
      ...form,
      email,
      formValid,
      error: { ...form.error, emailError },
    });
    setCard({ ...form });

    return formValid;
  };

  const validateContact = (contact) => {
    let formValid = form.formValid;
    let contactError = form.error.contactError;
    let contactPattern = /^[0-9]{10}$/;

    if (contact.trim() === "") {
      formValid = false;
      contactError = "This is a required field";
    } else if (!contactPattern.test(contact.trim())) {
      formValid = false;
      contactError =
        "Contact number must only contain digits and be 10 characters";
    } else {
      formValid = true;
      contactError = "";
    }

    setForm({
      ...form,
      contact,
      formValid,
      error: { ...form.error, contactError },
    });
    setCard({ ...form });

    return formValid;
  };

  const validateInfoText = (infoText) => {
    let formValid = form.formValid;
    let infoTextError = form.error.infoTextError;

    if (infoText.trim() === "") {
      formValid = false;
      infoTextError = "This is a required field";
    } else {
      formValid = true;
      infoTextError = "";
    }

    setForm({
      ...form,
      infoText,
      formValid,
      error: { ...form.error, infoTextError },
    });
    setCard({ ...form });

    return formValid;
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        // noValidate
        // autoComplete="off"
      >
        {/* <form onSubmit={handleSubmit}> */}
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            id="name"
            InputLabelProps={{ shrink: true }}
            type="text"
            variant="outlined"
            color="secondary"
            label="Name"
            onChange={handleChange}
            value={form.name}
            helperText={form.error.nameError}
            fullWidth
            required
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputProps: { max: currentDate },
            }}
            id="dob"
            type="date"
            variant="outlined"
            color="secondary"
            label="Date of Birth"
            onChange={handleChange}
            value={form.dob}
            helperText={form.error.dobError}
            fullWidth
            required
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="contact"
            type="tel"
            variant="outlined"
            color="secondary"
            label="Contact Number"
            onChange={handleChange}
            value={form.contact}
            helperText={form.error.contactError}
            fullWidth
            required
          />
        </Stack>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="email"
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={handleChange}
          value={form.email}
          helperText={form.error.emailError}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="infoText"
          type="text"
          variant="outlined"
          color="secondary"
          label="Tell me about yourself"
          onChange={handleChange}
          value={form.infoText}
          helperText={form.error.infoTextError}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <Button
          variant="outlined"
          color="secondary"
          // type="submit"
          onClick={handleSubmit}
        >
          Register
        </Button>
        {/* </form> */}
      </Box>
    </React.Fragment>
  );
}
