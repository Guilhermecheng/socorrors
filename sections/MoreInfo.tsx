interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Guilherme" }: Props) {
  return (
    <div class="bg-zinc-800 h-40 w-full">
      <h2 class="text-white">Hello {name}</h2>
    </div>
  )
}