-- enable row level security on all tables
do
$$
    declare
        table_name text;
        tables     text[] default array [
            '_prisma_migrations',
            'Song',
            'Sample'
            ];
    begin
        for table_name in (select * from unnest(tables))
            loop
                if exists(select 1 from pg_tables where schemaname = 'public' and tablename = table_name) then
                    execute format('alter table %I enable row level security', table_name);
                end if;
            end loop;
    end
$$;