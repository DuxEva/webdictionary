import Margindevider from "./Margindevider";

export interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

const ContentContainer = ({ meaning }: { meaning: Meaning }) => {
  console.log(meaning);

  return (
    <div>
      <Margindevider value={meaning.partOfSpeech} />
      <h3 className="text-lg mt-5 text-light-4 mb-5">Meaning</h3>
      <ul className="pl-[4rem] list-disc marker:text-purple-1">
        {meaning.definitions.map((definition, index) => (
          <li key={index} className="mb-5">
            {definition.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentContainer;
