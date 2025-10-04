import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { EmploymentStatus, Role } from "@/lib/generated/prisma";
import { saveFile } from "@/lib/server/routeHelpers";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

/* 
    TODO: Need to add checking user session and verifying they have access to this route.
    (I'm aware if they can't see the rendered form on the front-end that's one way, but this adds a more secure layer.)
 */

//  Can always put this in the .env as well, but its public data in the DB anyway.
const IRONCLAD_ENTITY_ID = "a6d0854e-5f4c-4537-a26f-c87dfac5b4ee";
const ADMIN_PERMISSIONS = "all";
const GENERAL_PERMISSIONS = "guard.create,events.create,shifts.create";

export async function POST(req: Request) {
  let errorMessage = "";

  try {
    //  Retrieve the form data from the request
    const formData = await req.formData();

    //  Create a hashed password based on what was retrieved
    const hashedPassword = await bcrypt.hash(formData.get("password") as string, 10);

    //  Isolate the provided avatar image if provided into a file so we can modify
    const avatar = formData.get("userAvatar") as File;

    //  Assign permissions based on the role that was provided
    const permissions = formData.get("role") === "ADMIN" ? ADMIN_PERMISSIONS : GENERAL_PERMISSIONS;

    //  Attempt to create the user with the data provided
    await prisma.user.create({
      data: {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        password: hashedPassword,
        role: formData.get("role") as Role,
        permissions: permissions,
        streetAddress: formData.get("streetAddress") as string,
        city: formData.get("city") as string,
        province: formData.get("province") as string,
        postalCode: formData.get("postalCode") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        userAvatar: "",
        note: formData.get("note") as string,
        entityId: IRONCLAD_ENTITY_ID,
      },
    });

    //  Query the id of the newly created user so we can use that info for the avatar's filename
    const user = await prisma.user.findUnique({
      where: { email: formData.get("email") as string },
      select: { id: true },
    });

    //  These next steps are dependant if an avatar was found in the provided data
    if (avatar) saveFile(avatar, "avatars", user!.id);

    //  These next steps depend of if there is guard information included
    if ((formData.get("includeGuard") as string) === "true") {
      //  Isolate the license/smart serve files
      const securityLicense = formData.get("licenseNumber") as File;
      const smartServe = formData.get("smartServe") as File;

      //  Attempt to create a guard with the data provided
      await prisma.guard.create({
        data: {
          position: "SEARCHER", //  Up for removal.
          employmentStatus: formData.get("employmentStatus") as EmploymentStatus,
          rate: Number(formData.get("hourlyRate")),
          licenseNumber: "",
          smartServe: "",
          casualAttire: formData.get("casualAttire") === "true" ? true : false,
          semiFormalAttire: formData.get("semiFormalAttire") === "true" ? true : false,
          formalAttire: formData.get("formalAttire") === "true" ? true : false,
          moneyOwed: 0.0,
          notes: formData.get("guardNotes") as string,
          userId: user!.id,
          entityId: IRONCLAD_ENTITY_ID,
          lastCheckedIn: new Date(),
        },
      });

      //  Get the Id of the guard created
      const guard = await prisma.guard.findUnique({ where: { userId: user!.id }, select: { id: true } });

      //  These next steps are dependant if a smart serve file was provided
      if (securityLicense) saveFile(securityLicense, "security-licenses", guard!.id);

      //  These next steps are dependant if a smart serve file was provided
      if (smartServe) saveFile(smartServe, "smart-serves", guard!.id);

      // Update the user to have the Guard Id
      await prisma.user.update({
        where: { id: user!.id },
        data: {
          guardId: guard!.id,
        },
      });
    }

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error: any) {
    errorMessage = error.messsage;

    //  Can research the other different Prisma codes for custom messages.
    if (error.code === "P2002") errorMessage = "Email already exists in the database.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "unauthorized" });
  }
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Successfully retrived users!", users: users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error });
  }
}
