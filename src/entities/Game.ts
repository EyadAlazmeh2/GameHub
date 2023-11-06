import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";
import Trailer from "./Trailer";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  trailer: Trailer[];
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
