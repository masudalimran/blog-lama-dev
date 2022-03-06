import { lazy, Suspense } from "react";
import Body from "../components/body/Body";
// import Header from "../components/header/Header";
const Header = lazy(() => import("../components/header/Header"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Body />
    </>
  );
}
