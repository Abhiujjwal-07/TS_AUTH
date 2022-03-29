/*
  Warnings:

  - You are about to drop the column `Date_of_birth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Emp_end_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Employment_start_date` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Date_of_birth",
DROP COLUMN "Emp_end_date",
DROP COLUMN "Employment_start_date";
