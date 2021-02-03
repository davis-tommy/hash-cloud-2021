import { Auth } from "aws-amplify";

export default function SignIn() {
  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
        Sign in with Google
      </button>
    </div>
  )
}