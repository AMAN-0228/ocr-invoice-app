/*
  Warnings:

  - The primary key for the `Accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Customers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `InvoiceItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `InvoiceItems` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Invoices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Invoices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Sessions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `userId` on the `Accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `invoiceId` on the `InvoiceItems` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `Invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Sessions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customerId` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Accounts" DROP CONSTRAINT "Accounts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Customers" DROP CONSTRAINT "Customers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Customers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."InvoiceItems" DROP CONSTRAINT "InvoiceItems_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "invoiceId",
ADD COLUMN     "invoiceId" INTEGER NOT NULL,
ADD CONSTRAINT "InvoiceItems_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Invoices" DROP CONSTRAINT "Invoices_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Sessions" DROP CONSTRAINT "Sessions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "customerId",
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
