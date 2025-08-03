/*
  Warnings:

  - Added the required column `customerId` to the `InvoiceItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `InvoiceItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."InvoiceItems" ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;
