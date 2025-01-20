import CoreConcept from './CoreConcept';


import { CORE_CONCEPTS } from '../data';


export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return (
            <CoreConcept
              key={conceptItem.title}
              img={conceptItem.image}
              title={conceptItem.title}
              description={conceptItem.description}
            />
          );
        })}
      </ul>
    </section>
  );
}
