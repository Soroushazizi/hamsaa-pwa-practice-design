import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./form";
import { Marginer } from "../marginer";

export function LoginForm(props) {

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="number" placeholder="شماره موبایل" />
        <Input type="nationalCode" placeholder="کد ملی" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>ورود</SubmitButton>
    </BoxContainer>
  );
}