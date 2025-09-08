import Container from "@/components/Container";
import GuardsList from "@/components/GuardsList";
import Profile from "@/components/Profile";

import { guardsList, venuesList, usersList } from "@/dummyData";

export default function Profiles() {
  //  TODO: One function that does an API call to request Guards, Venues & Users, the route would return all 3 sets of data at once.
  return (
    <Container id="profiles-page" className="h-[90%] w-full flex gap-4 m-auto">
      <GuardsList guards={guardsList} />
      <Container noStyle className="relative">
        <Container className="divider" />
      </Container>
      <Profile title="Venues" />
      {/* TODO: make this a Divider component */}
      <Container noStyle className="relative">
        <Container className="divider" />
      </Container>
      <Profile title="Users" />
    </Container>
  );
}
