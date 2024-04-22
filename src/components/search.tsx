'use client';
import { TextField, debounce } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function MoviesSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log('value', value);
    const params = new URLSearchParams(searchParams);
    if (value) { params.set('search', value);}
    else { params.delete('search'); }

    replace(`${pathname}?${params.toString()}`);
  }, 300)

  return (
    <TextField
      id="search"
      onChange={onChange}
      label="Search"
      variant="outlined"
      defaultValue={searchParams.get('search')?.toString()}
    />
  );
}