ALTER TABLE "links" RENAME COLUMN "slug" TO "shortCode";--> statement-breakpoint
ALTER TABLE "links" DROP CONSTRAINT "links_slug_unique";--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (sequence name "links_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1);--> statement-breakpoint
ALTER TABLE "links" ADD CONSTRAINT "links_shortCode_unique" UNIQUE("shortCode");