"use client"

import { Button } from "@radix-ui/themes";
import { useFormStatus } from "react-dom"
import { buttonVariants } from "../ui/button";

export default function SubmitButton() {
    const {pending} = useFormStatus();
  return (
    <Button className={buttonVariants()} type="submit" disabled={pending}>{pending? "Submitting" : "Submit"}</Button>
  )
}
