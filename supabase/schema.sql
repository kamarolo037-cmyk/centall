create table users (
  id uuid primary key default gen_random_uuid(),
  telegram_id bigint unique not null,
  username text,
  balance bigint default 1000,
  income_per_hour bigint default 10,
  current_price bigint default 100,
  owner_id uuid references users(id),
  created_at timestamp default now()
);

create table transactions (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid references users(id),
  target_id uuid references users(id),
  price bigint not null,
  created_at timestamp default now()
);