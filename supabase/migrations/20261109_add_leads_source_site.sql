-- Add a website-of-origin column to the CRM's leads table.
--
-- STATUS: APPLIED TO PRODUCTION (owner-approved, executed and verified by the
-- owner on 10 November 2026: the approved `alter table` statement below).
-- The live `public.leads` columns were confirmed first (18 base + 12
-- attribution columns; supabase/schema.sql in this repo is known to be behind
-- production and lacks the attribution columns that lib/leads.ts writes).
-- The `comment on column` statement is optional documentation.
--
-- Effect:
--   * Purely additive: one nullable text column, no default, no backfill.
--   * Existing rows get NULL, which the CRM displays as "Saudi Private
--     Transfers" (the original website). No existing value changes.
--   * Existing queries are unaffected: lib/leads.ts selects `*` and ignores
--     unknown columns; the original /api/leads insert does not send this
--     column at all.
--   * Only POST /api/leads/intake writes it, with a value chosen by the
--     server from the authenticated bearer token
--     (e.g. 'private-transfers-across-saudi').
--   * RLS, grants and policies are unchanged (all access is service-role).
--   * Idempotent: safe to run twice.
--
-- Rollback (only if no code depends on it any more):
--   alter table public.leads drop column if exists source_site;

alter table public.leads
  add column if not exists source_site text;

comment on column public.leads.source_site is
  'Website that created the lead. NULL = Saudi Private Transfers (original site, incl. all legacy leads). Set server-side by /api/leads/intake only.';
