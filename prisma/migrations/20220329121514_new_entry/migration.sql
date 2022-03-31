/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `Date_of_birth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Designation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Employment_start_date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Employment_start_end` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Home_address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Manager` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Marital_status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Notice_period` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Personal_email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "Date_of_birth" TEXT NOT NULL,
ADD COLUMN     "Designation" TEXT NOT NULL,
ADD COLUMN     "Employee_id" SERIAL NOT NULL,
ADD COLUMN     "Employment_start_date" TEXT NOT NULL,
ADD COLUMN     "Employment_start_end" TEXT NOT NULL,
ADD COLUMN     "Gender" TEXT NOT NULL,
ADD COLUMN     "Home_address" TEXT NOT NULL,
ADD COLUMN     "Manager" TEXT NOT NULL,
ADD COLUMN     "Marital_status" TEXT NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL,
ADD COLUMN     "Notice_period" TEXT NOT NULL,
ADD COLUMN     "Personal_email" TEXT NOT NULL,
ADD COLUMN     "Phone" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Employee_id");
