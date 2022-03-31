/*
  Warnings:

  - Changed the type of `Emp_end_date` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Emp_end_date",
ADD COLUMN     "Emp_end_date" BIGINT NOT NULL;
