import Image from "next/image";
import profileImage from "../../../content/profile.jpg";

export default function ProfileIcon() {
  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col bg-indigo-500 rounded-full">
        <Image
          className="rounded-full h-20 w-20 object-cover"
          src={profileImage}
          alt={"Profile Image"}
        />
        <div className="mt-2 ms-5">
          <p>Edrei</p>
          <small>
            #dev por profissão e nas horas vagas.
            Link para alguns projetos pessoais:
          </small>
        </div>
      </div>
    </div>
  );
}
