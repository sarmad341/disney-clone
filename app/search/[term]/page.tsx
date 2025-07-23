import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function Searchpage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  return <div>Welcome to the search page: {termToUse}</div>;
}

export default Searchpage;
