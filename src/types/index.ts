export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Pagination {
  current_page: number;
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface User  {
  id: string;
  first_name: string;
  last_name: string;
  token: string;
}