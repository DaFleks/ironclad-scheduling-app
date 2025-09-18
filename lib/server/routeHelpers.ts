import path from "path";
import { promises as fs } from "fs";
import prisma from "@/lib/server/prisma";

export async function saveFile(file: File, folderName: string, id: string) {
  // Generate unique file name
  const fileName = `${Date.now()}-${folderName}-${id}.${file.name.split(".")[1]}`;
  const filePath = path.join(process.cwd(), "public", folderName, fileName);

  // Save file locally
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  //  Update the DB with the URL of the file

  /** There is probably a better way to write this function,
   *  my brain's just at this point in time lol.
   */

  switch (folderName) {
    case "avatars":
      await prisma.user.update({
        where: { id: id },
        data: {
          userAvatar: `/${folderName}/${fileName}`,
        },
      });
      break;
    case "security-licenses":
      await prisma.guard.update({
        where: { id: id },
        data: {
          licenseNumber: `/${folderName}/${fileName}`,
        },
      });
      break;
    case "smart-serves":
      await prisma.guard.update({
        where: { id: id },
        data: {
          smartServe: `/${folderName}/${fileName}`,
        },
      });
      break;
  }
}
