/*
  Warnings:

  - You are about to drop the column `Employment_start_end` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Personal_email` on the `User` table. All the data in the column will be lost.
  - Added the required column `Employment_end_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Employment_start_end",
DROP COLUMN "Personal_email",
ADD COLUMN     "Employment_end_date" TEXT NOT NULL;
