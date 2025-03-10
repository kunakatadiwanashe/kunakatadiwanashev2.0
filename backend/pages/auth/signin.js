import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });

    if (result.error) {
      alert(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}