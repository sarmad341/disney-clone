import { Genres } from "@/typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const respone = await fetch(url, options);
  const data = (await respone.json()) as Genres;

  console.log(data.genres);

  return <div>GenreDrop</div>;
}

export default GenreDropdown;
