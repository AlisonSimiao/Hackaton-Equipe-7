-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pointsId" INTEGER;

-- CreateTable
CREATE TABLE "Points" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Finances" (
    "id" SERIAL NOT NULL,
    "idExpenses" INTEGER NOT NULL,
    "idDebts" INTEGER NOT NULL,
    "idFinancialGoal" INTEGER NOT NULL,

    CONSTRAINT "Finances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IncomeBracket" (
    "id" SERIAL NOT NULL,
    "financeId" INTEGER NOT NULL,
    "range_start" DECIMAL(65,30) NOT NULL,
    "range_end" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "IncomeBracket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialGoals" (
    "id" SERIAL NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "closedAt" TIMESTAMP(3) NOT NULL,
    "idCategory" INTEGER NOT NULL,

    CONSTRAINT "FinancialGoals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" SERIAL NOT NULL,
    "Value" DECIMAL(65,30) NOT NULL,
    "idFrequency" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,
    "financeId" INTEGER NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frequency" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "idExpense" INTEGER NOT NULL,

    CONSTRAINT "Frequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Debts" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "Value" DECIMAL(65,30) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "financeId" INTEGER NOT NULL,

    CONSTRAINT "Debts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusDebts" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "StatusDebts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pointsId_fkey" FOREIGN KEY ("pointsId") REFERENCES "Points"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncomeBracket" ADD CONSTRAINT "IncomeBracket_financeId_fkey" FOREIGN KEY ("financeId") REFERENCES "Finances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_financeId_fkey" FOREIGN KEY ("financeId") REFERENCES "Finances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
