"use client";

type Props = {
  message: string,
}

export default function Bio(props: Props) {

  return (
    <div className="items-center justify-items-center">
      <b id="name">Edrei Fernandes</b>
      <p id="message">{props.message}</p>
    </div>
  );
}
