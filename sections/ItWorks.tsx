import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
  name?: string;
  subtext?: string;
}

export default function Section({ 
  name = "Hello World!", 
  subtext = "It's a new Deco site!", 
}: Props) {

  return (
    <div
      id="it-works"
      class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16 bg-zinc-800"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full text-zinc-100">
        <div>
          <div class="w-full h-full flex items-center justify-center text-4xl font-semibold" dangerouslySetInnerHTML={{
            __html: name,
          }} />

          <div class="w-full h-full flex items-center justify-center text-2xl" dangerouslySetInnerHTML={{
            __html: subtext,
          }} />
        </div>
        
        <div class="w-full h-full flex items-center justify-center text-4xl font-semibold" >
          pix
        </div>
      </div>
    </div>
  );
}
