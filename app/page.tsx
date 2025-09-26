import Container from "@/components/ironclad/Container";
import Divider from "@/components/ironclad/Divider";
import Profile from "@/components/Profile";
import ProfileItem from "@/components/ProfileItem";

import { guardsList, venuesList, usersList } from "@/dummyData";
import { checkIsLastItem } from "@/lib/utils";

export default function Profiles() {
  // TODO: check user, see what perms they have
  // TODO: One function that does an API call to request Guards, Venues & Users, the route would return all 3 sets of data at once.
  return (
    // ? do we need p-12 here? - Cathy double check styles
    <Container id="profiles-page" className="p-12 h-[90%] w-full flex gap-4 m-auto">
      <Profile title="Guards" total={guardsList.length}>
        {guardsList.map((guard, i) => (
          <ProfileItem key={guard.id} text={guard.name} subText={`Hourly: $${guard.hourly}`} last={checkIsLastItem(i, guardsList.length)} />
        ))}
      </Profile>
      <Divider />
      <Profile title="Venues" total={venuesList.length}>
        {venuesList.map((venue, i) => (
          <ProfileItem key={venue.id} text={venue.name} subText={`${venue.address}`} last={checkIsLastItem(i, venuesList.length)} />
        ))}
      </Profile>
      <Divider />
      <Profile title="Users" total={usersList.length}>
        {usersList.map((user, i) => (
          <ProfileItem key={user.id} text={user.name} subText={`${user.role}`} last={checkIsLastItem(i, usersList.length)} />
        ))}
      </Profile>
    </Container>
  );
}
