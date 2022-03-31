/*
  Warnings:

  - Changed the type of `Date_of_birth` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Employment_start_date` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Notice_period` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Phone` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `Emp_end_date` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Date_of_birth",
ADD COLUMN     "Date_of_birth" TIMESTAMP(3) NOT NULL,
DROP COLUMN "Employment_start_date",
ADD COLUMN     "Employment_start_date" TIMESTAMP(3) NOT NULL,
DROP COLUMN "Notice_period",
ADD COLUMN     "Notice_period" INTEGER NOT NULL,
DROP COLUMN "Phone",
ADD COLUMN     "Phone" INTEGER NOT NULL,
DROP COLUMN "Emp_end_date",
ADD COLUMN     "Emp_end_date" TIMESTAMP(3) NOT NULL;
