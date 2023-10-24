import { SignIn } from "@clerk/nextjs";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function SignInPage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-24">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}
