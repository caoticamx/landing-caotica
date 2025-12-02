import Button from "../button";
import { Heading } from "../heading";
import Paragraph from "../paragraph";

export default function Hero({
  title,
  description,
  buttonPrimary,
  buttonSecondary,
  hrefPrimary,
  hrefSecondary,
}: {
  title?: string;
  description?: string;
  buttonPrimary?: string;
  buttonSecondary?: string;
  hrefPrimary?: string;
  hrefSecondary?: string;
}) {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center pt-18 pb-8 px-4 sm:px-0"
      id="inicio"
    >
      <div className="container mx-auto my-0 px-5 z-10">
        <div>
          <Heading
            as="h1"
            variant="h1"
            className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#00d4ff] via-white to-[#9b59b6] bg-clip-text text-transparent animate-fadeInUp"
          >
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
          {buttonPrimary && (
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href={hrefPrimary || ""} className="btn-primary">
                {buttonPrimary}
              </Button>
              {buttonSecondary && (
                <Button href={hrefSecondary || ""} className="btn-secondary">
                  {buttonSecondary}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
