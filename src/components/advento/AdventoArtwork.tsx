import Image from "next/image";
import type { Sample } from "@/components/site/SampleGallery";

type Cover = Pick<Sample, "src" | "width" | "height" | "alt">;

/** A capa oficial e duas amostras da própria edição, sem alterar as artes. */
export function AdventoArtwork({ cover, samples }: { cover: Cover; samples: Sample[] }) {
  return (
    <figure className="advent-artwork">
      <div className="advent-cover">
        <Image {...cover} alt={cover.alt} preload sizes="(min-width: 1024px) 480px, (min-width: 640px) 540px, 88vw" />
      </div>
      <div className="advent-paper-pair" aria-hidden="true">
        {samples.slice(0, 2).map((sample) => (
          <Image key={sample.src} src={sample.src} width={sample.width} height={sample.height} alt="" sizes="(min-width: 1024px) 220px, 38vw" />
        ))}
      </div>
      <figcaption>Páginas reais do material</figcaption>
    </figure>
  );
}
