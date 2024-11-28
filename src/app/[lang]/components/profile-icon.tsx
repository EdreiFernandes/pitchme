import Image from "next/image";

export default function ProfileIcon() {
  const profileImage =
    "https://instagram.fcgh16-1.fna.fbcdn.net/v/t51.2885-19/457273399_556276503400669_3908025523554360294_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcgh16-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Gh5697yoWAEQ7kNvgGqh1zi&_nc_gid=c0fab0913e8d425e98e4092f1b83c605&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYBAz9INj1zRMefHsTUoAclsFs30sF5NPdIiA3wsEgXZ9A&oe=674EB461&_nc_sid=22de04";

  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col bg-indigo-500 rounded-full">
        <Image
          className="rounded-full h-20 w-20 object-cover"
          src={profileImage}
          width={100}
          height={100}
          alt={"Profile Image"}
        />
        <div className="mt-2 ms-5">
          <p>Edrei</p>
          <small>
            #dev por profissão e nas horas vagas. Link para alguns projetos
            pessoais:
          </small>
        </div>
      </div>
    </div>
  );
}
