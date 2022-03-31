/*
  Warnings:

  - Added the required column `Emp_end_date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Employment_start_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Emp_end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Employment_start_date" TIMESTAMP(3) NOT NULL;
