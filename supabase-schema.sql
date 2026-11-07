-- N9 AI Academy: paste this file into Supabase Dashboard > SQL Editor > New query, then click Run.
-- After creating your own account, make it an admin with the last UPDATE statement below.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default 'ผู้เรียน N9',
  email text not null unique,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_index smallint not null check (lesson_index between 0 and 5),
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_index)
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', 'ผู้เรียน N9'),
    coalesce(new.email, '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;

drop policy if exists "profiles: learner can view own" on public.profiles;
create policy "profiles: learner can view own"
  on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin());

drop policy if exists "progress: learner manages own" on public.lesson_progress;
create policy "progress: learner manages own"
  on public.lesson_progress for all to authenticated
  using (user_id = auth.uid() or public.is_admin())
  with check (user_id = auth.uid());

-- Replace YOUR_EMAIL@example.com after you create and confirm your account.
-- update public.profiles set role = 'admin' where email = 'YOUR_EMAIL@example.com';
