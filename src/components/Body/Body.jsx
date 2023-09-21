import { HistoricEvents } from "../HistoricEvents";
import { HistoricFigures } from "../HistoricFigures/HistoricFigures";
import { Hero } from "../Hero";
import { PlacesBlock } from "../PlacesBlock";
import { BookBlock } from "../BookBlock";
import { QuestionsBlock } from "../QuestionsBlock";
import { Frame } from "../Frame";

export const Body = () => {
  return (
    <section>
      <HistoricFigures />
      {/* <Frame /> */}
      {/* <Hero /> */}
      {/* <BookBlock /> */}
      {/* <PlacesBlock />}
      
      {/* <HistoricEvents /> */}{" "}
      {/* <FifthBlock title="" img="" background="" />
      <FifthBlock title="" img="" background="" />
      <FifthBlock title="" img="" background="" />
      <FifthBlock title="" img="" background="" />
      <FifthBlock title="" img="" background="" /> */}
      {/* <QuestionsBlock /> */}
    </section>
  );
};
