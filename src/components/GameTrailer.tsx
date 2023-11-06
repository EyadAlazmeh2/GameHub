import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId?: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[1];

  if (!first) return null;

  return first ? (
    <video width='100%' height='100%' controls poster={first.data[480]} src={first.data[480]} />
  ) : null;
};

export default GameTrailer;
