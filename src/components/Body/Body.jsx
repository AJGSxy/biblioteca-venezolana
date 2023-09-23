import { HistoricEvents } from "../HistoricEvents";
import { HistoricFigures } from "../HistoricFigures/HistoricFigures";
import { Hero } from "../Hero";
import { PlacesBlock } from "../PlacesBlock";
import { BookBlock } from "../BookBlock";
import { QuestionsBlock } from "../QuestionsBlock";

export const Body = () => {
  return (
    <section>
      {/* <Hero /> */}
      {/* <BookBlock /> */}
      {/* <PlacesBlock /> */}
      {/* <HistoricEvents /> */}
      <HistoricFigures />
      {/* <QuestionsBlock /> */}
    </section>
  );
};
