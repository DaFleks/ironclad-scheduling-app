import { auth } from "@/auth";
import { cookies } from "next/headers";

import Container from "@/components/ironclad/Container";
import Divider from "@/components/ironclad/Divider";
import Profile from "@/components/Profile";
import ProfileItem from "@/components/ProfileItem";

import { guardsList, venuesList, usersList } from "@/dummyData";
import { getAllUsers } from "@/lib/api/users/userApi";
import { User } from "@/lib/generated/prisma";
import { checkIsLastItem } from "@/lib/utils";

export default async function Profiles() {
  // TODO: check user, see what perms they have
  // TODO: One function that does an API call to request Guards, Venues & Users, the route would return all 3 sets of data at once.

  // Get the current session cookies that are stored in the browser
  const cookieStore = await cookies();

  // Retrieve the users from the API route while passing the session data
  const { users } = await getAllUsers(cookieStore);

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
      <Profile title="Users" total={users.length}>
        {users.map((user: User, i: number) => (
          <ProfileItem
            key={user.id}
            text={`${user.firstName} ${user.lastName}`}
            subText={`${user.role}`}
            last={checkIsLastItem(i, users.length)}
          />
        ))}
      </Profile>
    </Container>
  );
}
