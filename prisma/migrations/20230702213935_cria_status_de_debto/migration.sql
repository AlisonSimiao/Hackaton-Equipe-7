-- AddForeignKey
ALTER TABLE "Debts" ADD CONSTRAINT "Debts_status_fkey" FOREIGN KEY ("status") REFERENCES "StatusDebts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
