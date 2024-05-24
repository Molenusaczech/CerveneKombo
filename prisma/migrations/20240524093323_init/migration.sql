-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "discordId" TEXT NOT NULL,
    "globalName" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "appId" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isOrg" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("appId", "avatar", "discordId", "globalName", "id") SELECT "appId", "avatar", "discordId", "globalName", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
