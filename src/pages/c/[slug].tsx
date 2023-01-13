import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import BusinessCard from "../../components/business-card/BusinessCard";
import { api } from "../../utils/api";

interface SlugProps {}

const Slug: FC<SlugProps> = ({}) => {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== "string") return null;

  const { data: card } = api.card.getCard.useQuery({ slug });

  console.log(card?.name);

  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-rose-500 to-purple-600">
      <Head>
        <title>
          {card?.name} | {card?.title}
        </title>
      </Head>

      <BusinessCard card={card} />
    </div>
  );
};

export default Slug;
