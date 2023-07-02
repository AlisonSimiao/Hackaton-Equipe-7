/*
  Warnings:

  - A unique constraint covering the columns `[pointsId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[financesId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `financeId` to the `FinancialGoals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financesId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `pointsId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pointsId_fkey";

-- AlterTable
ALTER TABLE "FinancialGoals" ADD COLUMN     "financeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "financesId" INTEGER NOT NULL,
ALTER COLUMN "pointsId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_pointsId_key" ON "User"("pointsId");

-- CreateIndex
CREATE UNIQUE INDEX "User_financesId_key" ON "User"("financesId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pointsId_fkey" FOREIGN KEY ("pointsId") REFERENCES "Points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_financesId_fkey" FOREIGN KEY ("financesId") REFERENCES "Finances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialGoals" ADD CONSTRAINT "FinancialGoals_financeId_fkey" FOREIGN KEY ("financeId") REFERENCES "Finances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_financeId_fkey" FOREIGN KEY ("financeId") REFERENCES "Finances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
