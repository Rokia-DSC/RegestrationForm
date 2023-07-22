-- CreateTable
CREATE TABLE "UsersTBL" (
    "User_id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UsersTBL_pkey" PRIMARY KEY ("User_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersTBL_email_key" ON "UsersTBL"("email");
