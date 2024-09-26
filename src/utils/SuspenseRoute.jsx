import { Suspense } from "react";

// eslint-disable-next-line react/prop-types
const SuspenseRoute = ({ Component }) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Component />
    </Suspense>
  );
};
export default SuspenseRoute;
