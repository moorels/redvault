-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vault" (
    "id" SERIAL NOT NULL,
    "vaultname" TEXT NOT NULL,
    "vaultusername" TEXT NOT NULL,
    "vaultpassword" TEXT NOT NULL,
    "userEmailId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Vault" ADD FOREIGN KEY ("userEmailId") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
