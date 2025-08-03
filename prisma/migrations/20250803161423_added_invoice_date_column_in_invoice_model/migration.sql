/*
  Warnings:

  - Added the required column `invoiceDate` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Invoices" ADD COLUMN     "invoiceDate" TIMESTAMP(3) NOT NULL;
