"use client";

export default async function Bio(props: {
  message: string;
}) {

  return (
    <div className="items-center justify-items-center">
      <b id="name">Edrei Fernandes</b>
      <p id="message">{props.message}</p>
    </div>
  );
}
