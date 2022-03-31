/*
  Warnings:

  - You are about to drop the column `Employment_end_date` on the `User` table. All the data in the column will be lost.
  - Added the required column `Emp_end_date` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Employment_end_date",
ADD COLUMN     "Emp_end_date" TEXT NOT NULL;
