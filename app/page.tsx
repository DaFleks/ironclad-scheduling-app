import Container from "@/components/Container";
import GuardsList from "@/components/GuardsList";
import Profile from "@/components/Profile";

import { guardsList } from "@/dummyData";

export default function Profiles() {
  //  TODO: One function that does an API call to request Guards, Venues & Users, the route would return all 3 sets of data at once.
  return (
    <Container className="h-full w-full grid grid-cols-3 gap-8">
      <GuardsList guards={guardsList} />
      <Profile title="Venues" />
      <Profile title="Users" />
    </Container>
  );
}
